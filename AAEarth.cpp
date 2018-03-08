/*
Module : AAEarth.cpp
Purpose: Implementation for the algorithms which calculate the position of Earth
Created: PJN / 29-12-2003
History: PJN / 03-10-2009 1. Fixed a copy and paste gremlin in the CAAEarth::EclipticLatitude method where it incorrectly
                          used B2, B3 & B4 coefficient terms for Venus. Due to how this bug occurred, the magnitude of the 
                          error from it would increase as the date deviated from the year 2000. Thanks to Isaac Salzman 
                          for reporting this bug.   
         PJN / 18-03-2012 1. All global "g_*" tables are now const. Thanks to Roger Dahl for reporting this 
                          issue when compiling AA+ on ARM.
         PJN / 04-08-2013 1. Fixed a transcription error in the twenty first coefficient used to calculate
                          the L0 term for the ecliptic longitude of Earth. Thanks to Isaac Clark for
                          reporting this issue. 
                          2. Fixed a transcription error in the sixteenth coefficient used to calculate the L1 term for 
                          the ecliptic longitude of Earth. Thanks to Isaac Clark for reporting this issue. 
                          3. Spot tests indicate that these two changes only affected the the ecliptic longitude in the 
                          eight decimal place.
                          4. Updated copyright details
         PJN / 16-09-2015 1. CAAEarth::EclipticLongitude, EclipticLatitude, RadiusVector, EclipticLongitudeJ2000 & 
                          EclipticLatitudeJ2000 now include a "bool bHighPrecision" parameter which if set to true means 
                          the code uses the full VSOP87 theory rather than the truncated theory as presented in Meeus's 
                          book.

Copyright (c) 2003 - 2017 by PJ Naughter (Web: www.naughter.com, Email: pjna@naughter.com)

All rights reserved.

Copyright / Usage Details:

You are allowed to include the source code in any product (commercial, shareware, freeware or otherwise) 
when your product is released in binary form. You are allowed to modify the source code in any way you want 
except you cannot modify the copyright details at the top of each module. If you want to distribute source 
code with your application, then you are only allowed to distribute versions released by the author. This is 
to maintain a single distribution point for the source code. 

*/


///////////////////////////// Includes ////////////////////////////////////////

#include "stdafx.h"
#include "AAEarth.h"
#include "AACoordinateTransformation.h"
#include "AAVSOP87D_EAR.h"
#include "AAVSOP87B_EAR.h"
#include <cmath>
using namespace std;

//////////////////////////////// Implementation ///////////////////////////////

double CAAEarth::EclipticLongitude(double JD, bool bHighPrecision)
{
    return CAACoordinateTransformation::MapTo0To360Range(CAACoordinateTransformation::RadiansToDegrees(CAAVSOP87D_Earth::L(JD)));
}

double CAAEarth::EclipticLatitude(double JD, bool bHighPrecision)
{
    return CAACoordinateTransformation::MapToMinus90To90Range(CAACoordinateTransformation::RadiansToDegrees(CAAVSOP87D_Earth::B(JD)));
}

double CAAEarth::RadiusVector(double JD, bool bHighPrecision)
{
    return CAAVSOP87D_Earth::R(JD);
}


double CAAEarth::EclipticLongitudeJ2000(double JD, bool bHighPrecision)
{
    return CAACoordinateTransformation::MapTo0To360Range(CAACoordinateTransformation::RadiansToDegrees(CAAVSOP87B_Earth::L(JD)));
}

double CAAEarth::EclipticLatitudeJ2000(double JD, bool bHighPrecision)
{
    return CAACoordinateTransformation::MapToMinus90To90Range(CAACoordinateTransformation::RadiansToDegrees(CAAVSOP87B_Earth::B(JD)));
}

double CAAEarth::SunMeanAnomaly(double JD)
{
  double T = (JD - 2451545) / 36525;
  double Tsquared = T*T;
  double Tcubed = Tsquared*T;
  return CAACoordinateTransformation::MapTo0To360Range(357.5291092 + 35999.0502909*T - 0.0001536*Tsquared + Tcubed/24490000);
}

double CAAEarth::Eccentricity(double JD)
{
  double T = (JD - 2451545) / 36525;
  double Tsquared = T*T;
  return 1 - 0.002516*T - 0.0000074*Tsquared;
}
