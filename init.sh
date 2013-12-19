#!/bin/sh

echo "Initializing structure..."
mkdir ./app
mkdir ./app/img
mkdir ./app/css
mkdir ./app/js
mkdir ./app/js/vendor

echo "Copying files..."
cp ./template/.editorconfig ./.editorconfig
cp ./template/.gitignore ./.gitignore
cp ./template/.jshintrc ./.jshintrc
cp ./template/Gruntfile.js ./Gruntfile.js
cp ./template/app/humans.txt ./app/humans.txt
cp ./template/app/index.html ./app/index.html
cp ./template/package.json ./package.json
cp ./template/app/robots.txt ./app/robots.txt
cp ./template/app/css/style.css ./app/css/style.css
cp ./template/app/css/normalize.css ./app/css/normalize.css
cp ./template/app/js/main.js ./app/js/main.js
cp ./template/app/js/vendor/jquery-1.10.2.min.js ./app/js/vendor/jquery-1.10.2.min.js
cp ./template/app/js/vendor/modernizr-2.6.2.min.js ./app/js/vendor/modernizr-2.6.2.min.js

echo "Removing stuff you don't want..."
rm -rf .git
rm -rf template
rm README.md
rm README_pt-br.md
rm init.sh
rm init.bat

echo "Done! ✔"
