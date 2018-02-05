/*
Module : AAVSOP87.h
Purpose: Implementation for the algorithms for VSOP87
Created: PJN / 29-08-2015
History: PJN / 29-08-2015 1. Initial public release.

Copyright (c) 2015 - 2018 by PJ Naughter (Web: www.naughter.com, Email: pjna@naughter.com)

All rights reserved.

Copyright / Usage Details:

You are allowed to include the source code in any product (commercial, shareware, freeware or otherwise)
when your product is released in binary form. You are allowed to modify the source code in any way you want
except you cannot modify the copyright details at the top of each module. If you want to distribute source
code with your application, then you are only allowed to distribute versions released by the author. This is
to maintain a single distribution point for the source code.

*/


////////////////////////////// Macros / Defines ///////////////////////////////

#if _MSC_VER > 1000
#pragma once
#endif //#if _MSC_VER > 1000

#ifndef __AAVSOP87_H__
#define __AAVSOP87_H__

#ifndef AAPLUS_EXT_CLASS
#define AAPLUS_EXT_CLASS
#endif //#ifndef AAPLUS_EXT_CLASS


////////////////////////////// Classes ////////////////////////////////////////

struct VSOP87Coefficient
{
  double A;
  double B;
  double C;
};

struct VSOP87Coefficient2
{
  const VSOP87Coefficient* pCoefficients;
  int                      nCoefficientsSize;
};

class AAPLUS_EXT_CLASS CVSOP87
{
public:
//Static methods
  static double Calculate(double JD, const VSOP87Coefficient2* pTable, int nTableSize, bool bAngle);
  static double Calculate_Dash(double JD, const VSOP87Coefficient2* pTable, int nTableSize);
};


#endif //#ifndef __AAVSOP87_H__
