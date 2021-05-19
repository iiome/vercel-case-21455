#!/bin/bash

echo "PWD: $PWD"

mkdir -p ./build/
mkdir -p ./dist/

pushd .
cd build
curl -s https://www.sqlitetutorial.net/wp-content/uploads/2018/03/chinook.zip -o chinook.zip
unzip -o chinook.zip
cp chinook.db ../dist/chinook.sqlite
popd

echo Listing all files

find . | grep -v node_modules
