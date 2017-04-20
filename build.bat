setlocal enabledelayedexpansion
set A=

for /F %%G in ('dir /b AA*.cpp') do SET A="!A! %%G"

set FILES=%A:"=%

em++ --pre-js build/pre.js --post-js build/post.js -s LINKABLE=1 -s EXPORT_ALL=1 -s USE_CLOSURE_COMPILER=1 -s NO_FILESYSTEM=1 %FILES% %*