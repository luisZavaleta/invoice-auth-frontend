docker build -t auth-frontend-app:latest  .
docker run --network factura-login-network -p 3002:3000 --name auth-frontend-app auth-frontend-app:latest
