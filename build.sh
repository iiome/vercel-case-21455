#!/bin/bash

mkdir -p dist

pushd .
cd build
curl https://www.sqlitetutorial.net/wp-content/uploads/2018/03/chinook.zip -o chinook.zip
unzip -o chinook.zip
cp chinook.db ../dist/chinook.sqlite
popd

