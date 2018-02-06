#!/bin/bash
# test all the examples
echo "🏗 building all examples for production"

for d in ./examples/*/ ; do 
  (
    cd "$d" && echo "👷‍♀️ building $PWD" && yarn build
  )
done
