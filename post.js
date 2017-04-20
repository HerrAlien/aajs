

    aajs['Easter'] = {
        Calculate : function (year, gregorian) {
                        __ZN9CAAEaster9CalculateElb(0, year, gregorian);
                        return  {"month" : HEAP32[0], "day" : HEAP32[1]};
                    }
    };
    
    aajs['Aberration'] = {
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
    };
    
    aajs['AngularSeparation'] = {
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
    };

    return aajs;
})();
