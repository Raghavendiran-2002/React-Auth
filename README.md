sudo docker build -t react:v1 .

udo docker run -d --name reactAuth --restart unless-stopped -p 80:3000 react:v1
