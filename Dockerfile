FROM nginx:bookworm

COPY . /usr/share/nginx/html

EXPOSE 80
