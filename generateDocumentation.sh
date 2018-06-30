#!/bin/bash 
cd contracts

for filename in *.sol; do
    echo "$filename"
    name=$(echo "$filename" | cut -f 1 -d '.')
    echo "$name"
    solmd $filename --dest "../docs/$name.md"
    #echo '---\nid: $name\ntitle: Contract $name\n---' | cat - "../docs/$name.md" > temp && mv temp 
    sed -i '1s/^/---\n/' "../docs/$name.md"
    sed -i '1s/^/title: Contract ${name} \n/' "../docs/$name.md"
    sed -i '1s/^/id: ${nameNone} \n/' "../docs/$name.md"
    sed -i '1s/^/---\n/' "../docs/$name.md"
    # Replace the garbage with Actually content
    
    sed -i -e 's/${name}/'${filename}'/g' "../docs/$name.md"
    sed -i -e 's/${nameNone}/'${name}'/g' "../docs/$name.md"
done
cd ../
#python solcdog.py -g ../contracts/Users.sol -o Users.sol

