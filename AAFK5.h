/*
Module : AAFK5.h
Purpose: Implementation for the algorithms to convert to the FK5 standard reference frame
Created: PJN / 29-12-2003

Copyright (c) 2003 - 2017 by PJ Naughter (Web: www.naughter.com, Email: pjna@naughter.com)

All rights reserved.

Copyright / Usage Details:

You are allowed to include the source code in any product (commercial, shareware, freeware or otherwise) 
when your product is released in binary form. You are allowed to modify the source code in any way you want 
except you cannot modify the copyright details at the top of each module. If you want to distribute source 
code with your application, then you are only allowed to distribute versions released by the author. This is 
to maintain a single distribution point for the source code. 

*/


/////////////////////// Macros / Defines //////////////////////////////////////

#if _MSC_VER > 1000
#pragma once
#endif //#if _MSC_VER > 1000

#ifndef __AAFK5_H__
#define __AAFK5_H__

#ifndef AAPLUS_EXT_class [[cheerp::jsexport]] 
#define AAPLUS_EXT_class [[cheerp::jsexport]] 
#endif //#ifndef AAPLUS_EXT_class [[cheerp::jsexport]] 


/////////////////////// Includes //////////////////////////////////////////////

#include "AA3DCoordinate.h"


/////////////////////// class [[cheerp::jsexport]]  [[cheerp::jsexport]] es ///////////////////////////////////////////////

class [[cheerp::jsexport]]  [[cheerp::jsexport]]  AAPLUS_EXT_class [[cheerp::jsexport]]  CAAFK5
{
public:
//Static methods
  static double          CorrectionInLongitude(double Longitude, double Latitude, double JD);
  static double          CorrectionInLatitude(double Longitude, double JD);
  static CAA3DCoordinate ConvertVSOPToFK5J2000(const CAA3DCoordinate& value);
  static CAA3DCoordinate ConvertVSOPToFK5B1950(const CAA3DCoordinate& value);
  static CAA3DCoordinate ConvertVSOPToFK5AnyEquinox(const CAA3DCoordinate& value, double JDEquinox);
};


#endif //#ifndef __AAFK5_H__
