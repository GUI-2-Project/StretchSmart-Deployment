#!/bin/bash

if [ $# -eq 0 ]
    then
        echo "Requires one argument: 'backend' or 'frontend'"
    else
        docker compose run --rm --build --remove-orphans --service-ports $1
fi
