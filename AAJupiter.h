/*
Module : AAJupiter.h
Purpose: Implementation for the algorithms which obtain the heliocentric position of Uranus
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

#ifndef __AAJUPITER_H__
#define __AAJUPITER_H__

#ifndef AAPLUS_EXT_class [[cheerp::jsexport]] 
#define AAPLUS_EXT_class [[cheerp::jsexport]] 
#endif //#ifndef AAPLUS_EXT_class [[cheerp::jsexport]] 


/////////////////////// class [[cheerp::jsexport]]  [[cheerp::jsexport]] es ///////////////////////////////////////////////

class [[cheerp::jsexport]]  [[cheerp::jsexport]]  AAPLUS_EXT_class [[cheerp::jsexport]]  CAAJupiter
{
public:
//Static methods
  static double EclipticLongitude(double JD, bool bHighPrecision);
  static double EclipticLatitude(double JD, bool bHighPrecision);
  static double RadiusVector(double JD, bool bHighPrecision);
};


#endif //#ifndef __AAJUPITER_H__
