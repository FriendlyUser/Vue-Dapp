#!/bin/bash

# used to generate my documentation automatically, note that sidebar.json in docsusarus needs to be updated manually

# Get files to get converted to markdown, note that existing files will be overwritten
for filename in src/*.vue src/*.js src/**/*.vue src/**/*.js ; do
    echo "Using file $filename"
    echo "----------------------"
    baseFileName=$(basename $filename)
    name=${filename//\//\-}  
    #echo "$testName"
    #if [ -e $filename ]
    #then
        # File exists
    #    name=$(echo "$baseFileName" | cut -f 1 -d '.')
    #    name="$name-other"
    #else
    #    name=$(echo "$baseFileName" | cut -f 1 -d '.')
    #fi
    echo "Creating markdown for $name.md"
    echo "----------------------"
    documentation build $filename -f md -o docs/"$name.md"
    echo "Adding docusarus headers"
    echo "----------------------"
    sed -i '1s/^/---\n/' "docs/$name.md"
    sed -i '1s/^/title: ${TitleReplace} \n/' "docs/$name.md"
    sed -i '1s/^/id: ${nameNone} \n/' "docs/$name.md"
    sed -i '1s/^/---\n/' "docs/$name.md"
    
    
    # Replace the garbage with Actually content
    sed -i -e 's/${TitleReplace}/'${baseFileName}'/g' "docs/$name.md"
    sed -i -e 's/${nameNone}/'${name}'/g' "docs/$name.md"
done