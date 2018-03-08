/*
Module : AAUranus.cpp
Purpose: Implementation for the algorithms which obtain the heliocentric position of Uranus
Created: PJN / 29-12-2003
History: PJN / 18-03-2012 1. All global "g_*" tables are now const. Thanks to Roger Dahl for reporting this 
                          issue when compiling AA+ on ARM.
         PJN / 16-09-2015 1. CAAUranus::EclipticLongitude, EclipticLatitude & RadiusVector now include a
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


////////////////////////////////// Includes ///////////////////////////////////

#include "stdafx.h"
#include "AAUranus.h"
#include "AACoordinateTransformation.h"
#include "AAVSOP87D_URA.h"
#include <cmath>
using namespace std;

/////////////////////////////// Implementation ////////////////////////////////

double CAAUranus::EclipticLongitude(double JD, bool bHighPrecision)
{
    return CAACoordinateTransformation::MapTo0To360Range(CAACoordinateTransformation::RadiansToDegrees(CAAVSOP87D_Uranus::L(JD)));
}

double CAAUranus::EclipticLatitude(double JD, bool bHighPrecision)
{
    return CAACoordinateTransformation::MapToMinus90To90Range(CAACoordinateTransformation::RadiansToDegrees(CAAVSOP87D_Uranus::B(JD)));
}

double CAAUranus::RadiusVector(double JD, bool bHighPrecision)
{
    return CAAVSOP87D_Uranus::R(JD);
}
