comandos usados para desplegar la web usando una vm de azure

Para conectarse a la VM (desde tu terminal local):
ssh -i /ruta/a/tu/clave.pem usuario@ip_publica

Para actualizar el sistema y las dependencias:
sudo apt update && sudo apt upgrade

Para instalar Node.js, npm, Apache y PM2:
sudo apt install nodejs npm apache2
sudo npm install -g pm2

Para crear el directorio y dar permisos:
sudo mkdir -p /var/www/html/hotel
sudo chown -R jese:jese /var/www/html/hotel

Para copiar los archivos (desde tu terminal local):
scp -r -i /ruta/a/tu/clave.pem ./ usuario@ip_publica:/var/www/html/hotel/

Para instalar las dependencias del proyecto:
cd /var/www/html/hotel
npm install

Para generar la versión de producción:
npm run build

Para editar el archivo de configuración de Apache:
sudo nano /etc/apache2/sites-available/hotelaiondra.edu.conf

<VirtualHost *:80>
    ServerName hotelaiondra.edu
    ServerAlias www.hotelaiondra.edu
    DocumentRoot /var/www/html/hotel/public

    ProxyPreserveHost On
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

Para habilitar los módulos de Apache:
sudo a2ensite hotelaiondra.edu.conf
sudo a2enmod proxy proxy_http

Para reiniciar y verificar Apache:
sudo systemctl restart apache2
sudo systemctl status apache2.service

Para iniciar la aplicación Next.js con PM2:
pm2 start npm --name "hotel-alondra-nextjs" -- run start


