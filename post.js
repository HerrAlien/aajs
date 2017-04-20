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
        }
    };
})();
