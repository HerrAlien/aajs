#include <iostream>
#include "AA+.h"

using namespace std;

void printSolarEclipse(const CAASolarEclipseDetails & details);
void printLunarEclipse(const CAALunarEclipseDetails & details);
void printGallileanSatellite(const CAAGalileanMoonDetail& moon);
void printGallileanSatellites(const CAAGalileanMoonsDetails& moon);
void printSaturnSatellites(const CAASaturnMoonsDetails & details);
void printSaturnSatellite(const CAASaturnMoonDetail& moon);
void printRiseTransitSet(const CAARiseTransitSetDetails & rts);

#define UNREFERENCED_PARAMETER

int main()
{

    const double JD = CAADate::DateToJD(1988, 3, 20, true);
    const auto yesterday = CAAElliptical::Calculate(JD - 1, CAAElliptical::VENUS, true);
    const auto today = CAAElliptical::Calculate(JD , CAAElliptical::VENUS, true);
    const auto tomorrow = CAAElliptical::Calculate(JD + 1, CAAElliptical::VENUS, true);

    const auto rts = CAARiseTransitSet::Calculate(JD,
        yesterday.ApparentGeocentricRA ,
        yesterday.ApparentGeocentricDeclination,
        today.ApparentGeocentricRA ,
        today.ApparentGeocentricDeclination,
        tomorrow.ApparentGeocentricRA ,
        tomorrow.ApparentGeocentricDeclination,
        71.0833,
        42.3333,
        -0.5667);

    cout.precision(15);
    cout << fixed;
    printRiseTransitSet(rts);

	return 0;
}

void printRiseTransitSet(const CAARiseTransitSetDetails & rts)
{
    cout << "{" << "bRiseValid:" << rts.bRiseValid << ","
        << "Rise:" << rts.Rise << ","
        << "bTransitValid:" << rts.bTransitValid << ","
        << "bTransitAboveHorizon:" << rts.bTransitAboveHorizon << ","
        << "Transit:" << rts.Transit << ","
        << "bSetValid:" << rts.bSetValid << ","
        << "Set:" << rts.Set << "}";
}


void printSaturnSatellites(const CAASaturnMoonsDetails & details)
{
	cout << 1 << ":" << endl;
	printSaturnSatellite(details.Satellite1);
	cout << 2 << ":" << endl;
	printSaturnSatellite(details.Satellite2);
	cout << 3 << ":" << endl;
	printSaturnSatellite(details.Satellite3);
	cout << 4 << ":" << endl;
	printSaturnSatellite(details.Satellite4);
	cout << 5 << ":" << endl;
	printSaturnSatellite(details.Satellite5);
	cout << 6 << ":" << endl;
	printSaturnSatellite(details.Satellite6);
}


void printGallileanSatellites(const CAAGalileanMoonsDetails& details)
{
    cout << 1 << ":" << endl;
    printGallileanSatellite(details.Satellite1);
    cout << 2 << ":" << endl;
    printGallileanSatellite(details.Satellite2);
    cout << 3 << ":" << endl;
    printGallileanSatellite(details.Satellite3);
    cout << 4 << ":" << endl;
    printGallileanSatellite(details.Satellite4);
}

void printSaturnSatellite(const CAASaturnMoonDetail& moon)
{
	cout.precision(15);
	cout << fixed;
	cout
		<< "moon.TrueRectangularCoordinates.X: " << moon.TrueRectangularCoordinates.X << endl
		<< "moon.TrueRectangularCoordinates.Y: " << moon.TrueRectangularCoordinates.Y << endl
		<< "moon.TrueRectangularCoordinates.Z: " << moon.TrueRectangularCoordinates.Z << endl
		<< "moon.ApparentRectangularCoordinates.X: " << moon.ApparentRectangularCoordinates.X << endl
		<< "moon.ApparentRectangularCoordinates.Y: " << moon.ApparentRectangularCoordinates.Y << endl
		<< "moon.ApparentRectangularCoordinates.Z: " << moon.ApparentRectangularCoordinates.Z << endl
		<< "moon.bInTransit: " << moon.bInTransit << endl
		<< "moon.bInOccultation: " << moon.bInOccultation << endl
		<< "moon.bInEclipse: " << moon.bInEclipse << endl
		<< "moon.bInShadowTransit: " << moon.bInShadowTransit << endl;
}


void printGallileanSatellite(const CAAGalileanMoonDetail& moon)
{
    cout.precision(15);
    cout << fixed;
    cout
        << "moon.MeanLongitude: " << moon.MeanLongitude << endl
        << "moon.TrueLongitude: " << moon.TrueLongitude << endl
        << "moon.TropicalLongitude: " << moon.TropicalLongitude << endl
        << "moon.EquatorialLatitude: " << moon.EquatorialLatitude << endl
        << "moon.r: " << moon.r << endl
        << "moon.TrueRectangularCoordinates.X: " << moon.TrueRectangularCoordinates.X << endl
        << "moon.TrueRectangularCoordinates.Y: " << moon.TrueRectangularCoordinates.Y << endl
        << "moon.TrueRectangularCoordinates.Z: " << moon.TrueRectangularCoordinates.Z << endl
        << "moon.ApparentRectangularCoordinates.X: " << moon.ApparentRectangularCoordinates.X << endl
        << "moon.ApparentRectangularCoordinates.Y: " << moon.ApparentRectangularCoordinates.Y << endl
        << "moon.ApparentRectangularCoordinates.Z: " << moon.ApparentRectangularCoordinates.Z << endl
        << "moon.EquatorialLatitude: " << moon.EquatorialLatitude << endl
        << "moon.bInTransit: " << moon.bInTransit << endl
        << "moon.bInOccultation: " << moon.bInOccultation << endl
        << "moon.bInEclipse: " << moon.bInEclipse << endl
        << "moon.bInShadowTransit: " << moon.bInShadowTransit << endl;
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