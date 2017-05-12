#include <iostream>
#include "AA+.h"

using namespace std;

void printSolarEclipse(const CAASolarEclipseDetails & details);
void printLunarEclipse(const CAALunarEclipseDetails & details);

int main()
{
	unsigned year = 2017;
	double JD = CAADate::DateToJD(year, 5, 2, true);

	cout.precision(15);
	cout << fixed;

	CAAEllipticalObjectElements elements;
	elements.a = CAAElementsPlanetaryOrbit::MercurySemimajorAxis(JD);
	elements.w = CAAElementsPlanetaryOrbit::MercuryLongitudePerihelion(JD);
	elements.omega = CAAElementsPlanetaryOrbit::MercuryLongitudeAscendingNode(JD);
	
	elements.e = CAAElementsPlanetaryOrbit::MercuryEccentricity(JD);
	elements.i = CAAElementsPlanetaryOrbit::MercuryInclination(JD);
	elements.JDEquinox = CAAEquinoxesAndSolstices::NorthwardEquinox(year, true);
	long k = CAAPlanetPerihelionAphelion::MercuryK(year);
	elements.T = CAAPlanetPerihelionAphelion::MercuryPerihelion(k);

	CAAEllipticalObjectDetails details = CAAElliptical::Calculate(JD, elements, true);
	cout << "Ellongation:" << details.Elongation << ",Phase:" << details.PhaseAngle << endl;

	return 0;
}

void printSolarEclipse(const CAASolarEclipseDetails & details) {
	cout.precision(15);
	cout << fixed;

	cout << "{Flags:" << details.Flags
		<< ", gamma:" << details.gamma
		<< ", GreatestMagnitude:" << details.GreatestMagnitude
		<< ", F:" << details.F
		<< ", u:" << details.u
		<< ", TimeOfMaximumEclipse:" << details.TimeOfMaximumEclipse << "}"
		<< endl;
}

void printLunarEclipse(const CAALunarEclipseDetails & details)
{
	cout.precision(15);
	cout << fixed;

	cout << "{bEclipse:" << details.bEclipse
		<< ", JdOfMaximumEclipse:" << details.TimeOfMaximumEclipse
		<< ", F:" << details.F
		<< ", u:" << details.u
		<< ", gamma:" << details.gamma
		<< ", PenumbralRadii:" << details.PenumbralRadii
		<< ", UmbralRadii:" << details.UmbralRadii
		<< ", PenumbralMagnitude:" << details.PenumbralMagnitude
		<< ", UmbralMagnitude:" << details.UmbralMagnitude
		<< ", PartialPhaseSemiDuration:" << details.PartialPhaseSemiDuration
		<< ", TotalPhaseSemiDuration:" << details.TotalPhaseSemiDuration
		<< ", PartialPhasePenumbraSemiDuration:" << details.PartialPhasePenumbraSemiDuration
		<< "}"
		<< endl;
}