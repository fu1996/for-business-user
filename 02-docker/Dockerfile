FROM nginx
COPY . /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html
EXPOSE 80
WORKDIR /usr/local/nginx
CMD ["nginx","-g","daemon off;"]