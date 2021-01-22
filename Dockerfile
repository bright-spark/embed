FROM bitnami/nginx

COPY .docker/nginx.conf /opt/bitnami/nginx/conf/nginx.conf
COPY .docker/start.sh .
COPY .docker/replaceEnvVars.sh .
COPY build/ /usr/share/nginx/html

USER 0

RUN chmod +x replaceEnvVars.sh

CMD [ "./start.sh" ]
