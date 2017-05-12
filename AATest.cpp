#include "stdafx.h"
#define _USE_MATH_DEFINES
#include "AA+.h"
#include <cstdio>
#include <cmath>
#include <memory.h>
#include <iostream>

using namespace std;

int main() {

	double JD = CAADate::DateToJD(2017, 1, 3, true);
	auto details = CAAPhysicalSun::Calculate(JD, true);

	std::cout << "2017, 1, 3: " << details.L0 << std::endl;

	JD = CAADate::DateToJD(2017, 3, 6, true);
	details = CAAPhysicalSun::Calculate(JD, true);
	std::cout << "2017, 3, 6: " << details.L0 << std::endl;

	JD = CAADate::DateToJD(2017, 4, 3, true);
	details = CAAPhysicalSun::Calculate(JD, true);
	std::cout << "2017, 4, 3: " << details.L0 << std::endl;

	JD = CAADate::DateToJD(2017, 9, 9, true);
	details = CAAPhysicalSun::Calculate(JD, true);
	std::cout << "2017, 9, 9: " << details.L0 << std::endl;

	return 0;
}