/* aajs - JavaScript port of the aa+ C++ implementation 
(http://www.naughter.com/aa.html)  for the algorithms as presented in the book
"Astronomical Algorithms" by Jean Meeus. 

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
            },
            
            DayOfYear : function (JD, year, bGregorianCalendar) {
                return __ZN7CAADate9DayOfYearEdlb(JD, year, bGregorianCalendar);
            },
            
            DaysInMonth : function (Month, bLeapYear) {
                return __ZN7CAADate11DaysInMonthElb (Month, bLeapYear);
            }
        },
        
        Diameters : {
            SunSemidiameterA : function (distanceAU) {
                return __ZN12CAADiameters16SunSemidiameterAEd (distanceAU);
            },
            MercurySemidiameterA : function (distanceAU) {
                return __ZN12CAADiameters20MercurySemidiameterAEd (distanceAU);
            },
            VenusSemidiameterA : function (distanceAU) {
                return __ZN12CAADiameters18VenusSemidiameterAEd (distanceAU);
            },
            MarsSemidiameterA : function (distanceAU) {
                return __ZN12CAADiameters17MarsSemidiameterAEd (distanceAU);
            },
            JupiterEquatorialSemidiameterA : function (distanceAU) {
                return __ZN12CAADiameters30JupiterEquatorialSemidiameterAEd (distanceAU);
            },
            JupiterPolarSemidiameterA : function (distanceAU) {
                return __ZN12CAADiameters25JupiterPolarSemidiameterAEd (distanceAU);
            },
            SaturnEquatorialSemidiameterA : function (distanceAU) {
                return __ZN12CAADiameters29SaturnEquatorialSemidiameterAEd (distanceAU);
            },
            SaturnPolarSemidiameterA : function (distanceAU) {
                return __ZN12CAADiameters24SaturnPolarSemidiameterAEd (distanceAU);
            },
            ApparentSaturnPolarSemidiameterA : function (Delta, B) {
                return __ZN12CAADiameters32ApparentSaturnPolarSemidiameterAEdd (Delta, B);
            },
            UranusSemidiameterA : function (distanceAU) {
                return __ZN12CAADiameters19UranusSemidiameterAEd (distanceAU);
            },
            NeptuneSemidiameterA : function (distanceAU) {
                return __ZN12CAADiameters20NeptuneSemidiameterAEd (distanceAU);
            },
            MercurySemidiameterB : function (distanceAU) {
                return __ZN12CAADiameters20MercurySemidiameterBEd (distanceAU);
            },
            VenusSemidiameterB : function (distanceAU) {
                return __ZN12CAADiameters18VenusSemidiameterBEd (distanceAU);
            },
            MarsSemidiameterB : function (distanceAU) {
                return __ZN12CAADiameters17MarsSemidiameterBEd (distanceAU);
            },
            JupiterEquatorialSemidiameterB : function (distanceAU) {
                return __ZN12CAADiameters30JupiterEquatorialSemidiameterBEd (distanceAU);
            },
            JupiterPolarSemidiameterB : function (distanceAU) {
                return __ZN12CAADiameters25JupiterPolarSemidiameterBEd (distanceAU);
            },
            SaturnEquatorialSemidiameterB : function (distanceAU) {
                return __ZN12CAADiameters29SaturnEquatorialSemidiameterBEd (distanceAU);
            },
            SaturnPolarSemidiameterB : function (distanceAU) {
                return __ZN12CAADiameters24SaturnPolarSemidiameterBEd (distanceAU);
            },
            ApparentSaturnPolarSemidiameterB : function (Delta, B) {
                return __ZN12CAADiameters32ApparentSaturnPolarSemidiameterBEdd (Delta, B);
            },
            UranusSemidiameterB : function (distanceAU) {
                return __ZN12CAADiameters19UranusSemidiameterBEd (distanceAU);
            },
            NeptuneSemidiameterB : function (distanceAU) {
                return __ZN12CAADiameters20NeptuneSemidiameterBEd (distanceAU);
            },
            GeocentricMoonSemidiameter : function (distance) {
                return __ZN12CAADiameters26GeocentricMoonSemidiameterEd (distance);
            },
            TopocentricMoonSemidiameter : function (distanceDelta, delta, longitude, latitide, height){
                return __ZN12CAADiameters27TopocentricMoonSemidiameterEddddd(distanceDelta, delta, longitude, latitide, height)
            },
            // this one is weird
            AsteroidDiameter : function (H, A) {
                return __ZN12CAADiameters16AsteroidDiameterEdd (H, A);
            },
            ApparentAsteroidDiameter : function (distance, size) {
                return __ZN12CAADiameters24ApparentAsteroidDiameterEdd (distance, size);
            }
        },
        
        DynamicalTime : {
            DeltaT : function (JD) { return __ZN16CAADynamicalTime6DeltaTEd (JD); },
            CumulativeLeapSeconds : function (JD) { 
                    return  __ZN16CAADynamicalTime21CumulativeLeapSecondsEd (JD); 
            },
            TT2UTC : function (JD) { return __ZN16CAADynamicalTime6TT2UTCEd(JD); },
            UTC2TT : function (JD) { return __ZN16CAADynamicalTime6UTC2TTEd(JD); },
            TT2TAI : function (JD) { return __ZN16CAADynamicalTime6TT2TAIEd(JD); },
            TAI2TT : function (JD) { return __ZN16CAADynamicalTime6TAI2TTEd(JD); },
            TT2UT1 : function (JD) { return __ZN16CAADynamicalTime6TT2UT1Ed(JD); },
            UT12TT : function (JD) { return __ZN16CAADynamicalTime6UT12TTEd(JD); },
            UT1MinusUTC : function (JD) { return __ZN16CAADynamicalTime11UT1MinusUTCEd(JD); }
        },
        
        Earth : {
            EclipticLongitude : function (jd, highPrecision) {
                return __ZN8CAAEarth17EclipticLongitudeEdb (jd, highPrecision);
            },
            EclipticLatitude : function (jd, highPrecision) {
                return __ZN8CAAEarth16EclipticLatitudeEdb (jd, highPrecision);
            },
            RadiusVector : function (jd, highPrecision) {
                return __ZN8CAAEarth12RadiusVectorEdb (jd, highPrecision);
            },
            SunMeanAnomaly : function (jd) {
                return __ZN8CAAEarth14SunMeanAnomalyEd (jd);
            },
            Eccentricity : function (jd) {
                return __ZN8CAAEarth12EccentricityEd (jd);
            },
            EclipticLongitudeJ2000 : function (jd, highPrecision) {
                return __ZN8CAAEarth22EclipticLongitudeJ2000Edb (jd, highPrecision);
            },
            EclipticLatitudeJ2000 : function (jd, highPrecision) {
                return __ZN8CAAEarth21EclipticLatitudeJ2000Edb (jd, highPrecision);
            }
        },
        Easter : {
            Calculate : function (year, gregorian) {
                __ZN9CAAEaster9CalculateElb(0, year, gregorian);
                return  {"month" : HEAP32[0], "day" : HEAP32[1]};
            }
        },
        Eclipses : {
            CalculateSolar : function (k) {
                __ZN11CAAEclipses14CalculateSolarEd (0, k);
                return {"flags" : HEAP32[0], "gamma" : HEAPF64[4], "GreatestMagnitude" : HEAPF64[5], "F" : HEAPF64[2], "u" : HEAPF64[3], "JdOfMaimumEclipse" : HEAPF64[1],
                "isTotal" : (HEAP32[0] & 0x01) > 0, "isAnnular" : (HEAP32[0] & 0x02) > 0, "isAnnularTotal" : (HEAP32[0] & 0x04) > 0, "isCentral" : (HEAP32[0] & 0x08) > 0,
                "isPartial" : (HEAP32[0] & 0x10) > 0, "isNonCentral" : (HEAP32[0] & 0x20) > 0 };
            },
            
            CalculateLunar : function (k) {
                __ZN11CAAEclipses14CalculateLunarEd(0, k);
                return {"bEclipse" : HEAP32[0] > 0, "JdOfMaximumEclipse": HEAPF64[1], "F" : HEAPF64[2], "u" : HEAPF64[3], "gamma" : HEAPF64[4], "PenumbralRadii" : HEAPF64[5],
                "UmbralRadii" : HEAPF64[6], "PenumbralMagnitude" : HEAPF64[7], "UmbralMagnitude" : HEAPF64[8],
                "PartialPhaseSemiDuration" : HEAPF64[9], "TotalPhaseSemiDuration" : HEAPF64[10],
                "PartialPhasePenumbraSemiDuration" : HEAPF64[11]};
            }
        },
        EclipticalElements : {
            Calculate : function ( i0,  w0,  omega0,  JD0,  JD) {
                __ZN21CAAEclipticalElements9CalculateEddddd (0, i0,  w0,  omega0,  JD0,  JD);
                return {"i" : HEAPF64[0], "w" : HEAPF64[1], "omega" : HEAPF64[2]};
            },
            FK4B1950ToFK5J2000 : function ( i0,  w0,  omega0) {
                __ZN21CAAEclipticalElements18FK4B1950ToFK5J2000Eddd (0, i0,  w0,  omega0);
                return {"i" : HEAPF64[0], "w" : HEAPF64[1], "omega" : HEAPF64[2]};
            }
        },
        // tested above
        
        ElementsPlanetaryOrbit : {
            MercuryMeanLongitude: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit20MercuryMeanLongitudeEd(JD);
            },
            MercurySemimajorAxis: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit20MercurySemimajorAxisEd(JD);
            },
            MercuryEccentricity: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit19MercuryEccentricityEd(JD);
            },
            MercuryInclination: function (JD) {
                return __ZN25CAAElementsPlanetaryOrbit18MercuryInclinationEd (JD);
            },
            MercuryLongitudeAscendingNode: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit29MercuryLongitudeAscendingNodeEd (JD);
            },
            MercuryLongitudePerihelion: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit26MercuryLongitudePerihelionEd (JD);
            },

            VenusMeanLongitude: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit18VenusMeanLongitudeEd (JD);
            },
            VenusSemimajorAxis: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit18VenusSemimajorAxisEd (JD);
            },
            VenusEccentricity: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit17VenusEccentricityEd (JD);
            },
            VenusInclination: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit16VenusInclinationEd (JD);
            },
            VenusLongitudeAscendingNode: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit27VenusLongitudeAscendingNodeEd (JD);
            },
            VenusLongitudePerihelion: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit24VenusLongitudePerihelionEd (JD);
            },

            EarthMeanLongitude: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit18EarthMeanLongitudeEd (JD);
            },
            EarthSemimajorAxis: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit18EarthSemimajorAxisEd (JD);
            },
            EarthEccentricity: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit17EarthEccentricityEd (JD);
            },
            EarthInclination: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit16EarthInclinationEd (JD);
            },
            EarthLongitudePerihelion: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit24EarthLongitudePerihelionEd(JD);
            },

            MarsMeanLongitude: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit17MarsMeanLongitudeEd(JD);
            },
            MarsSemimajorAxis: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit17MarsSemimajorAxisEd(JD);
            },
            MarsEccentricity: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit16MarsEccentricityEd(JD);
            },
            MarsInclination: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit15MarsInclinationEd(JD);
            },
            MarsLongitudeAscendingNode: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit26MarsLongitudeAscendingNodeEd(JD);
            },
            MarsLongitudePerihelion: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit23MarsLongitudePerihelionEd(JD);
            },

            JupiterMeanLongitude: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit20JupiterMeanLongitudeEd (JD);
            },
            JupiterSemimajorAxis: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit20JupiterSemimajorAxisEd(JD);
            },
            JupiterEccentricity: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit19JupiterEccentricityEd (JD);
            },
            JupiterInclination: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit18JupiterInclinationEd(JD);
            },
            JupiterLongitudeAscendingNode: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit29JupiterLongitudeAscendingNodeEd(JD);
            },
            JupiterLongitudePerihelion: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit26JupiterLongitudePerihelionEd (JD);
            },

            SaturnMeanLongitude: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit19SaturnMeanLongitudeEd (JD);
            },
            SaturnSemimajorAxis: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit19SaturnSemimajorAxisEd (JD);
            },
            SaturnEccentricity: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit18SaturnEccentricityEd (JD);
            },
            SaturnInclination: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit17SaturnInclinationEd (JD);
            },
            SaturnLongitudeAscendingNode: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit28SaturnLongitudeAscendingNodeEd (JD);
            },
            SaturnLongitudePerihelion: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit25SaturnLongitudePerihelionEd(JD);
            },

            UranusMeanLongitude: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit19UranusMeanLongitudeEd(JD);
            },
            UranusSemimajorAxis: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit19UranusSemimajorAxisEd(JD);
            },
            UranusEccentricity: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit18UranusEccentricityEd(JD);
            },
            UranusInclination: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit17UranusInclinationEd(JD);
            },
            UranusLongitudeAscendingNode: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit28UranusLongitudeAscendingNodeEd(JD);
            },
            UranusLongitudePerihelion: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit25UranusLongitudePerihelionEd(JD);
            },

            NeptuneMeanLongitude: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit20NeptuneMeanLongitudeEd(JD);
            },
            NeptuneSemimajorAxis: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit20NeptuneSemimajorAxisEd(JD);
            },
            NeptuneEccentricity: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit19NeptuneEccentricityEd(JD);
            },
            NeptuneInclination: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit18NeptuneInclinationEd (JD);
            },
            NeptuneLongitudeAscendingNode: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit29NeptuneLongitudeAscendingNodeEd(JD);
            },
            NeptuneLongitudePerihelion: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit26NeptuneLongitudePerihelionEd (JD);
            },

            MercuryMeanLongitudeJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit25MercuryMeanLongitudeJ2000Ed(JD);
            },
            MercuryInclinationJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit23MercuryInclinationJ2000Ed(JD);
            },
            MercuryLongitudeAscendingNodeJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit34MercuryLongitudeAscendingNodeJ2000Ed(JD);
            },
            MercuryLongitudePerihelionJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit31MercuryLongitudePerihelionJ2000Ed(JD);
            },

            VenusMeanLongitudeJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit23VenusMeanLongitudeJ2000Ed(JD);
            },
            VenusInclinationJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit21VenusInclinationJ2000Ed(JD);
            },
            VenusLongitudeAscendingNodeJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit32VenusLongitudeAscendingNodeJ2000Ed(JD);
            },
            VenusLongitudePerihelionJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit29VenusLongitudePerihelionJ2000Ed(JD);
            },

            EarthMeanLongitudeJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit23EarthMeanLongitudeJ2000Ed(JD);
            },
            EarthInclinationJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit21EarthInclinationJ2000Ed(JD);
            },
            EarthLongitudeAscendingNodeJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit32EarthLongitudeAscendingNodeJ2000Ed(JD);
            },
            EarthLongitudePerihelionJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit29EarthLongitudePerihelionJ2000Ed(JD);
            },

            MarsMeanLongitudeJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit22MarsMeanLongitudeJ2000Ed(JD);
            },
            MarsInclinationJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit20MarsInclinationJ2000Ed(JD);
            },
            MarsLongitudeAscendingNodeJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit31MarsLongitudeAscendingNodeJ2000Ed(JD);
            },
            MarsLongitudePerihelionJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit28MarsLongitudePerihelionJ2000Ed(JD);
            },

            JupiterMeanLongitudeJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit25JupiterMeanLongitudeJ2000Ed(JD);
            },
            JupiterInclinationJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit23JupiterInclinationJ2000Ed(JD);
            },
            JupiterLongitudeAscendingNodeJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit34JupiterLongitudeAscendingNodeJ2000Ed(JD);
            },
            JupiterLongitudePerihelionJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit31JupiterLongitudePerihelionJ2000Ed(JD);
            },

            SaturnMeanLongitudeJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit24SaturnMeanLongitudeJ2000Ed(JD);
            },
            SaturnInclinationJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit22SaturnInclinationJ2000Ed(JD);
            },
            SaturnLongitudeAscendingNodeJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit33SaturnLongitudeAscendingNodeJ2000Ed(JD);
            },
            SaturnLongitudePerihelionJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit30SaturnLongitudePerihelionJ2000Ed(JD);
            },

            UranusMeanLongitudeJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit24UranusMeanLongitudeJ2000Ed(JD);
            },
            UranusInclinationJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit22UranusInclinationJ2000Ed(JD);
            },
            UranusLongitudeAscendingNodeJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit33UranusLongitudeAscendingNodeJ2000Ed(JD);
            },
            UranusLongitudePerihelionJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit30UranusLongitudePerihelionJ2000Ed(JD);
            },

            NeptuneMeanLongitudeJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit25NeptuneMeanLongitudeJ2000Ed(JD);
            },
            NeptuneInclinationJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit23NeptuneInclinationJ2000Ed(JD);
            },
            NeptuneLongitudeAscendingNodeJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit34NeptuneLongitudeAscendingNodeJ2000Ed(JD);
            },
            NeptuneLongitudePerihelionJ2000: function (JD) { 
                return __ZN25CAAElementsPlanetaryOrbit31NeptuneLongitudePerihelionJ2000Ed(JD);
            }
        },
        
        Sun : {
            // Position.
             GeometricEclipticLongitude: function (JD,  bHighPrecision) { 
                return __ZN6CAASun26GeometricEclipticLongitudeEdb(JD,  bHighPrecision);
             },
             GeometricEclipticLatitude: function (JD,  bHighPrecision) { 
                return __ZN6CAASun25GeometricEclipticLatitudeEdb (JD,  bHighPrecision);
             },
             GeometricEclipticLongitudeJ2000: function (JD,  bHighPrecision) { 
                return __ZN6CAASun31GeometricEclipticLongitudeJ2000Edb(JD,  bHighPrecision);
             },
             GeometricEclipticLatitudeJ2000: function (JD,  bHighPrecision) { 
                return __ZN6CAASun30GeometricEclipticLatitudeJ2000Edb(JD,  bHighPrecision);
             },
             GeometricFK5EclipticLongitude: function (JD,  bHighPrecision) { 
                return __ZN6CAASun29GeometricFK5EclipticLongitudeEdb(JD,  bHighPrecision);
             },
             GeometricFK5EclipticLatitude: function (JD,  bHighPrecision) { 
                return __ZN6CAASun28GeometricFK5EclipticLatitudeEdb(JD,  bHighPrecision);
             },
             ApparentEclipticLongitude: function (JD,  bHighPrecision) { 
                return __ZN6CAASun25ApparentEclipticLongitudeEdb(JD,  bHighPrecision);
             },
             ApparentEclipticLatitude: function (JD,  bHighPrecision) { 
                return __ZN6CAASun24ApparentEclipticLatitudeEdb(JD,  bHighPrecision);
             },
             
             EquatorialRectangularCoordinatesMeanEquinox: function (JD,  bHighPrecision) { 
                __ZN6CAASun43EquatorialRectangularCoordinatesMeanEquinoxEdb(0, JD,  bHighPrecision);
                return { "X" : HEAPF64[0], "Y" : HEAPF64[1], "Z" : HEAPF64[2] };
             },
             EclipticRectangularCoordinatesJ2000: function (JD,  bHighPrecision) { 
                __ZN6CAASun35EclipticRectangularCoordinatesJ2000Edb(0, JD,  bHighPrecision);
                return { "X" : HEAPF64[0], "Y" : HEAPF64[1], "Z" : HEAPF64[2] };
             },
             EquatorialRectangularCoordinatesJ2000: function (JD,  bHighPrecision) { 
                __ZN6CAASun37EquatorialRectangularCoordinatesJ2000Edb(0, JD,  bHighPrecision);
                return { "X" : HEAPF64[0], "Y" : HEAPF64[1], "Z" : HEAPF64[2] };
             },
             EquatorialRectangularCoordinatesB1950: function (JD,  bHighPrecision) { 
                __ZN6CAASun37EquatorialRectangularCoordinatesB1950Edb(0, JD,  bHighPrecision);
                return { "X" : HEAPF64[0], "Y" : HEAPF64[1], "Z" : HEAPF64[2] };
             },
             EquatorialRectangularCoordinatesAnyEquinox: function (JD,  JDEquinox,  bHighPrecision) { 
                __ZN6CAASun42EquatorialRectangularCoordinatesAnyEquinoxEddb(0, JD,  JDEquinox, bHighPrecision);
                return { "X" : HEAPF64[0], "Y" : HEAPF64[1], "Z" : HEAPF64[2] };
             },
                          
             // Physical.
             CalculatePhysicalDetails : function (JD,  bHighPrecision) { 
                __ZN14CAAPhysicalSun9CalculateEdb(0, JD,  bHighPrecision);
                return { "P" : HEAPF64[0], "B0" : HEAPF64[1], "L0" : HEAPF64[2] };
             },
             TimeOfStartOfRotation : function (C) { 
                return __ZN14CAAPhysicalSun21TimeOfStartOfRotationEl(C);
             }
        },
 
        Nutation : {
            TrueObliquityOfEcliptic : function (JD) {
                return __ZN11CAANutation23TrueObliquityOfEclipticEd (JD);
            },
            InLongitude : function (JD) {
                return __ZN11CAANutation19NutationInLongitudeEd(JD);
            },
            InObliquity : function (JD) {
                return __ZN11CAANutation19NutationInObliquityEd(JD);
            },
            MeanObliquityOfEcliptic : function (JD) {
                return __ZN11CAANutation23MeanObliquityOfEclipticEd(JD);
            },
            InRightAscension : function (ra, dec, obliquity, nutationInLongitude, nutationInObliquity) {
                return __ZN11CAANutation24NutationInRightAscensionEddddd (ra, dec, obliquity, nutationInLongitude, nutationInObliquity);
            },
            InDeclination : function (ra, obliquity, nutationInLongitude, nutationInObliquity) {
                return __ZN11CAANutation21NutationInDeclinationEdddd (ra, obliquity, nutationInLongitude, nutationInObliquity);
            }
        },
 
        Elliptical : {
            DistanceToLightTime : function (distance) {
                return __ZN13CAAElliptical19DistanceToLightTimeEd(distance);
            },
           
            CalculatePlanetaryDetails :  function (jd, ellipticalObject, bHighPrecision) {
                __ZN13CAAElliptical9CalculateEdNS_16EllipticalObjectEb(0, jd, ellipticalObject, bHighPrecision);
                return {"ApparentGeocentricLongitude" : HEAPF64[0], "ApparentGeocentricLatitude" : HEAPF64[1], "ApparentGeocentricDistance" : HEAPF64[2],
                "ApparentLightTime" : HEAPF64[3], "ApparentGeocentricRA" : HEAPF64[4], "ApparentGeocentricDeclination" : HEAPF64[5]};
            }/*,
            SemiMajorAxisFromPerihelionDistance : function (q, e) {
                ;
            },
            MeanMotionFromSemiMajorAxis : function (a) {
                ;
            },
            CalculateObjectDetails (jd, ellipticalObjectElements, bHighPrecision) {
                ;
            },
            InstantaneousVelocity: function (r, e) {
                ;
            },
            VelocityAtPerihelion : function (e, a) {
                ;
            },
            VelocityAtAphelion : function (e, a) {
                ;
            },
            LengthOfEllipse : function (e, a) {
                ;
            },
            CometMagnitude : function (g, delta, k, r) {
                ;
            },
            MinorPlanetMagnitude : function (H, delta, G, r, PhaseAngle) {
                ;
            }
            */
        }

    };
})();


(function(AAJS) {
     // normed, in degrees
    AAJS['Date']['JD2ST'] = function (JD) {
        var nonNormedLST = 280.46061837 + 360.98564736629 * (JD - 2451545);
        return nonNormedLST - 360 * Math.floor (nonNormedLST / 360);
    };
            
    // ST in hours and fraction of hours
    AAJS['Date']['ST2NextJD'] = function (st, startOfDayJD) {
        var accurracy = 1 / (24 * 3600);
        var errorFraction = 0.95 * 1 / 24;
        var jd = startOfDayJD;
        var error = AAJS.Date.JD2ST(jd) / 15 - st;
                    
        while (Math.abs(error) > accurracy) {
            if (error > 0) {
                error -= 24;
            }

            jd += Math.abs(error) * errorFraction;
            error = AAJS.Date.JD2ST(jd) / 15 - st;
            }
        return jd;
    };
            
    AAJS['Date']['JD2Date'] = function (JD) {
        var y = 4716, v = 3, j = 1401, u = 5, m = 2, s = 153, n = 12, w = 2, r = 4, B = 274277,  p = 1461, C = -38;
        var f = JD + j + Math.floor((Math.floor((4 * JD + B) / 146097) * 3) / 4) + C;
        var e = r * f + v;
        var g = Math.floor((e % p) / r);
        var h = u * g + w;
        var M = (Math.floor(h / s) + m) % n + 1;
        return {"D" : Math.floor((h % s) / u) + 1, "M" : M,
                "Y" : Math.floor(e / p) - y + Math.floor((n + m - M) / n) };
    };
    
    AAJS['Sun']['EquatorialCoordinates'] = function (JD, bHighPrecision) {
        var Epsilon = AAJS.Nutation.TrueObliquityOfEcliptic(JD);
        return AAJS.CoordinateTransformation.Ecliptic2Equatorial(AAJS.Sun.ApparentEclipticLongitude(JD, bHighPrecision), AAJS.Sun.ApparentEclipticLatitude(JD, bHighPrecision), Epsilon);
    };
             
    AAJS['Sun']['Diameter'] = function (JD, bHighPrecision) {
        var coords = AAJS.Sun.EclipticRectangularCoordinatesJ2000(JD, true);
        var r = Math.sqrt (coords.X * coords.X + coords.Y * coords.Y + coords.Z * coords.Z);
        return 2 * AAJS.Diameters.SunSemidiameterA (r);
    };
    
    AAJS['Numerical'] = {
            RoundTo1Decimal : function (n) {
                return Math.round (n * 10) / 10;
            },

            RoundTo2Decimals : function (n) {
                return Math.round (n * 100) / 100;
            },

            RoundTo3Decimals : function (n) {
                return Math.round (n * 1000) / 1000;
            },
            
            ToSexagesimal : function (numericalValue) {
                var isNegative  = numericalValue < 0;
                numericalValue = Math.abs(numericalValue);
                var r = numericalValue;
                var M = Math.floor(r);
                r = (r - M) * 60;
                var m = Math.floor (r);
                r = (r - m) * 60;
                var s = AAJS.Numerical.RoundTo2Decimals(r);
                if (isNegative)
                    M = -M;
                return {"Ord3" : M, "Ord2" : m, "Ord1" : s};
            }
        };

})(AAJS);

