/*
Module : AAMars.cpp
Purpose: Implementation for the algorithms which obtain the heliocentric position of Mars
Created: PJN / 29-12-2003
History: PJN / 18-03-2012 1. All global "g_*" tables are now const. Thanks to Roger Dahl for reporting this 
                          issue when compiling AA+ on ARM.
         PJN / 04-08-2013 1. Fixed a transcription error in the second coefficient used to calculate the B2 
                          term for the ecliptic latitude of Mars. Thanks to Isaac Clark for reporting this 
                          issue.
                          2. Fixed a transcription error in the third coefficient used to calculate the B2 
                          term for the ecliptic latitude of Mars. Thanks to Isaac Clark for reporting this 
                          issue. 
                          3. Spot tests indicate that these two changes only affected the the ecliptic 
                          latitude in the eight decimal place.
                          4. Updated copyright details
         PJN / 16-09-2015 1. CAAMars::EclipticLongitude, EclipticLatitude & RadiusVector now include a
                          "bool bHighPrecision" parameter which if set to true means the code uses the full
                          VSOP87 theory rather than the truncated theory as presented in Meeus's book.

Copyright (c) 2003 - 2017 by PJ Naughter (Web: www.naughter.com, Email: pjna@naughter.com)

All rights reserved.

Copyright / Usage Details:

You are allowed to include the source code in any product (commercial, shareware, freeware or otherwise) 
when your product is released in binary form. You are allowed to modify the source code in any way you want 
except you cannot modify the copyright details at the top of each module. If you want to distribute source 
code with your application, then you are only allowed to distribute versions released by the author. This is 
to maintain a single distribution point for the source code. 

*/


//////////////////////// Includes /////////////////////////////////////////////

#include "stdafx.h"
#include "AAMars.h"
#include "AACoordinateTransformation.h"
#include "AAVSOP87D_MAR.h"
#include <cmath>
using namespace std;

///////////////////////////// Implementation //////////////////////////////////

double CAAMars::EclipticLongitude(double JD, bool bHighPrecision)
{
    return CAACoordinateTransformation::MapTo0To360Range(CAACoordinateTransformation::RadiansToDegrees(CAAVSOP87D_Mars::L(JD)));

}

double CAAMars::EclipticLatitude(double JD, bool bHighPrecision)
{
    return CAACoordinateTransformation::MapToMinus90To90Range(CAACoordinateTransformation::RadiansToDegrees(CAAVSOP87D_Mars::B(JD)));

}

double CAAMars::RadiusVector(double JD, bool bHighPrecision)
{
    return CAAVSOP87D_Mars::R(JD);
}
