rem aajs - JavaScript port of the aa+ C++ implementation for the algorithms as 
rem presented in the book "Astronomical Algorithms" by Jean Meeus. 

rem Copyright 2017 Herr_Alien <alexandru.garofide@gmail.com>

rem This program is free software: you can redistribute it and/or modify it under 
rem the terms of the GNU Affero General Public License as published by the 
rem Free Software Foundation, either version 3 of the License, or (at your option)
rem any later version.

rem This program is distributed in the hope that it will be useful, but WITHOUT ANY 
rem WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
rem PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

rem You should have received a copy of the GNU Affero General Public License along
rem with this program. If not, see <https://www.gnu.org/licenses/agpl.html>.

setlocal enabledelayedexpansion
set A=

for /F %%G in ('dir /b AA*.cpp') do SET A="!A! %%G"

set FILES=%A:"=%

set FILES_NOTEST=%FILES:AATest.cpp=%

em++ --pre-js "%~dp0\pre.js" --post-js "%~dp0\post.js" -s LINKABLE=1 -s EXPORT_ALL=1 -s NO_FILESYSTEM=1 %FILES_NOTEST% %*