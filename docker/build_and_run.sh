#!/bin/bash

if [ $# -eq 0 ]
    then
        echo "Requires one argument: 'backend' or 'frontend'"
    else
        docker compose run --build $1
fi
