

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
        }
        
    };

    return aajs;
})();
