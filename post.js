/* aajs - JavaScript port of the aa+ C++ implementation for the algorithms as 
presented in the book "Astronomical Algorithms" by Jean Meeus. 

Copyright 2017 Herr_Alien <alexandru.garofide@gmail.com>

This program is free software: you can redistribute it and/or modify it under 
the terms of the GNU Affero General Public License as published by the 
Free Software Foundation, either version 3 of the License, or (at your option)
any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY 
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along
with this program. If not, see <https://www.gnu.org/licenses/agpl.html>. */

    return {
        Easter : {
            Calculate : function (year, gregorian) {
                __ZN9CAAEaster9CalculateElb(0, year, gregorian);
                return  {"month" : HEAP32[0], "day" : HEAP32[1]};
            }
        },
        
        Aberration : {
            EarthVelocity : function (JD, bHighPrecision) {
                __ZN13CAAAberration13EarthVelocityEdb(0, JD, bHighPrecision);
                return {"X" : HEAPF64[0], "Y" : HEAPF64[1], "Z" : HEAPF64[2]};
            },
            
            EclipticAberration : function (lambda, beta, JD, bHighPrecision) {
                __ZN13CAAAberration18EclipticAberrationEdddb (0, lambda, beta, JD, bHighPrecision);
                return {"X" : HEAPF64[0], "Y" : HEAPF64[1]};
            },
            
            EquatorialAberration: function (alpha, delta, JD, bHighPrecision) {
                __ZN13CAAAberration20EquatorialAberrationEdddb (0, alpha, delta, JD, bHighPrecision);
                return {"X" : HEAPF64[0], "Y" : HEAPF64[1]};
            }
        },
        
        AngularSeparation : {
            Separation : function (Alpha1, Delta1, Alpha2, Delta2){
                return __ZN20CAAAngularSeparation10SeparationEdddd(Alpha1, Delta1, Alpha2, Delta2);
            },
            PositionAngle : function (Alpha1, Delta1, Alpha2, Delta2){
                return __ZN20CAAAngularSeparation13PositionAngleEdddd(Alpha1, Delta1, Alpha2, Delta2);
            },
            DistanceFromGreatArc : function (Alpha1, Delta1, Alpha2, Delta2, Alpha3, Delta3){
                return __ZN20CAAAngularSeparation20DistanceFromGreatArcEdddddd(Alpha1, Delta1, Alpha2, Delta2, Alpha3, Delta3);
            },
            SmallestCircle : function (Alpha1, Delta1, Alpha2, Delta2, Alpha3, Delta3, bType1){
                return __ZN20CAAAngularSeparation14SmallestCircleEddddddRb(Alpha1, Delta1, Alpha2, Delta2, Alpha3, Delta3, bType1);
            }
        },
        
        BinaryStar : {
            Calculate : function ( t,  P,  T,  e,  a,  i,  omega,  w) {
                __ZN13CAABinaryStar9CalculateEdddddddd(0, t,  P,  T,  e,  a,  i,  omega,  w);
                return { "r" : HEAPF64[0], "Theta" : HEAPF64[1], "Rho": HEAPF64[2] };
            },
            ApparentEccentricity : function (e, i, w) {
                return __ZN13CAABinaryStar20ApparentEccentricityEddd(e, i, w);
            }
        },
        CoordinateTransformation : {
            Equatorial2Ecliptic : function (alpha, delta, epsilon) {
                __ZN27CAACoordinateTransformation19Equatorial2EclipticEddd (0, alpha, delta, epsilon);
                return { "X" : HEAPF64[0], "Y" : HEAPF64[1] };
            },
            
            Ecliptic2Equatorial: function (lambda, beta, epsilon) {
                __ZN27CAACoordinateTransformation19Ecliptic2EquatorialEddd (0, lambda, beta, epsilon);
                return { "X" : HEAPF64[0], "Y" : HEAPF64[1] };
            },
            
            Equatorial2Horizontal : function (localHourAngle, delta, latitude){
                __ZN27CAACoordinateTransformation21Equatorial2HorizontalEddd (0, localHourAngle, delta, latitude);
                return { "X" : HEAPF64[0], "Y" : HEAPF64[1] };
            },
            
            Horizontal2Equatorial : function (az, alt, latitude) {
                __ZN27CAACoordinateTransformation21Horizontal2EquatorialEddd (0, az, alt, latitude);
                return { "X" : HEAPF64[0], "Y" : HEAPF64[1] };
            },
            
            Equatorial2Galactic : function (alpha, delta) {
                __ZN27CAACoordinateTransformation19Equatorial2GalacticEdd (0, alpha, delta);
                return { "X" : HEAPF64[0], "Y" : HEAPF64[1] };
            },
            
            Galactic2Equatorial : function (l, b) {
                __ZN27CAACoordinateTransformation19Galactic2EquatorialEdd (0, l, b);
                return { "X" : HEAPF64[0], "Y" : HEAPF64[1] };
            }
        },
        Date : {
            DateToJD : function (Year, Month, Day, bGregorianCalendar) {
                return __ZN7CAADate8DateToJDElldb (Year, Month, Day, bGregorianCalendar);
            },
            IsLeap : function (Year, bGregorianCalendar) {
                return __ZN7CAADate6IsLeapElb (Year, bGregorianCalendar);
            },
            DayOfYearToDayAndMonth : function (DayOfYear, bLeap) {
                __ZN7CAADate22DayOfYearToDayAndMonthElbRlS0_(DayOfYear, bLeap, 0, 4);
                return { "DayOfMonth" : HEAP32[0], "Month" : HEAP32[1] };
            },
            JulianToGregorian : function (year, month, day) {
                __ZN7CAADate17JulianToGregorianElll(0, year, month, day);
                return {"Year" : HEAP32[0], "Month" : HEAP32[1], "Day" : HEAP32[2]};
            },
            GregorianToJulian : function (year, month, day) {
                __ZN7CAADate17GregorianToJulianElll(0, year, month, day);
                return {"Year" : HEAP32[0], "Month" : HEAP32[1], "Day" : HEAP32[2]};
            },
            INT : function (doubleValue) {
                return __ZN7CAADate3INTEd (doubleValue);
            },

            AfterPapalReform : function (JD_orYear, Month, Day) {
                if (Month === undefined && Day === undefined)
                    return __ZN7CAADate16AfterPapalReformEd(JD_orYear);
                else 
                    return __ZN7CAADate16AfterPapalReformElld(JD_orYear, Month, Day);
            }

        }
    };
})();
