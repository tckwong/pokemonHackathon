#!/usr/bin/bash
#Replaced basicbash with 1st shell variable
FILENAME=$1;
mkdir "$FILENAME";
cd "$FILENAME";
touch index.html;
echo "Creating a new project";
mkdir css;
cd css;
touch style.css;
cd ..;
mkdir js;
cd js;
touch app.js;
cd ..;
echo 'All done!';
