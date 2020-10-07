#!/usr/bin/env sh

VERSION=""

generateProduction() {
  echo "[ Generating production files ]"
  echo " - Creating deploy files"
	ng	b --prod
}

createDeployFiles() {
  echo "[ Creating deploy files ]"
  echo " - Composer file"
  cp deploy/composer.json dist/portal/composer.json
  echo " - Renaming main file"
  mv dist/portal/index.html dist/portal/home.html
  echo " - New index file"
  cp deploy/index.php dist/portal/index.php
}

getVersion() {
  echo "[ Generating version number ]"
  VERSION=$( cat deploy/version.txt )
  echo " - New version: $VERSION"
}

compressFiles() {
  echo "[ Compressing files ]"
  echo " - Compressing file"
  cd dist/portal
  tar -czf ../../frontend-$VERSION.tar.gz *
  cd ../..
}

generateProduction
createDeployFiles
getVersion
compressFiles
