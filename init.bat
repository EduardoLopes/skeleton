REM @echo off
echo "Initializing structure..."
mkdir .\app
mkdir .\app\img
mkdir .\app\css
mkdir .\app\js
mkdir .\app\js\vendor

echo "Copying files..."
copy .\template\.editorconfig .\.editorconfig
copy .\template\.gitignore .\.gitignore
copy .\template\.jshintrc .\.jshintrc
copy .\template\Gruntfile.js .\Gruntfile.js
copy .\template\app\humans.txt .\app\humans.txt
copy .\template\app\index.html .\app\index.html
copy .\template\package.json .\package.json
copy .\template\app\robots.txt .\app\robots.txt
copy .\template\app\css\style.css .\app\css\style.css
copy .\template\app\css\normalize.css .\app\css\normalize.css
copy .\template\app\js\main.js .\app\js\main.js
copy .\template\app\js\vendor\jquery-1.10.2.min.js .\app\js\vendor\jquery-1.10.2.min.js
copy .\template\app\js\vendor\modernizr-2.6.2.min.js .\app\js\vendor\modernizr-2.6.2.min.js

echo "Removing stuff you don't want..."
del /S /F /Q .git
del /S /F /Q template
del README.md
del README_pt-br.md
del init.sh
del init.bat

echo "Done! ✔"