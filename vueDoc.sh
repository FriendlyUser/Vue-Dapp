#!/bin/bash 

#path=docs/components
path=docs
mkdir -p $path
vuedoc.md src/components/* --output $path
echo "Done writing vue components with vuedoc."
echo "----------------------"
cd $path

for filename in *.md; do
    echo "Working on $filename"
    name=$(echo "$filename" | cut -f 1 -d '.')
    echo "$name"
    echo "Using file $filename"
    echo "----------------------"
    baseFileName=$(basename $filename)

    echo "Adding docusarus headers"
    echo "----------------------"
    sed -i '1s/^/---\n/' "$name.md"
    sed -i '1s/^/title: ${TitleReplace} \n/' "$name.md"
    sed -i '1s/^/id: ${nameNone} \n/' "$name.md"
    sed -i '1s/^/---\n/' "$name.md"
    
    
    # Replace the garbage with Actually content
    sed -i -e 's/${TitleReplace}/'${name}'/g' "$name.md"
    sed -i -e 's/${nameNone}/'${baseFileName}'/g' "$name.md"
done