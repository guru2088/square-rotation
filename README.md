## Docker Build

    $ docker build -t .

## Docker Tag , Below params needs to be changed according to their requirements

    $ docker tag ${PRO_NAME}:${VER} ${DOCKER_REG}/${PRO_NAME}:${VER}

## Docker Push , Below params needs to be changed according to their requirements

    $ docker push ${DOCKER_REG}/${PRO_NAME}:${VER}

## Deploy in kubernetes

    $ kubectl apply -n ${NAMEPSACE} -f frontend-service.yaml
    $ kubectl apply -n ${NAMEPSACE} -f frontend-deployement.yaml
