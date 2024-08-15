#!/bin/bash

# Actualizar sistema
sudo apt-get update

# Instalacion de dependencias

# Lista de paquetes necesarios
packages=(
  "libicu-dev"
  "libboost-regex-dev"
  "libboost-system-dev"
  "libboost-thread-dev"
  "libboost-program-options-dev"
  "libboost-filesystem1.74.0"
  "zlib1g-dev"
)

# Actualizar repositorios
sudo apt-get update

# Verificar e instalar paquetes
for package in "${packages[@]}"; do
  if ! dpkg -l | grep -q "^ii  $package"; then
    echo "Instalando $package..."
    sudo apt-get install -y $package
  else
    echo "$package ya está instalado."
  fi
done


# Verificacion manual de dependencias
dpkg -l | grep libicu-dev
dpkg -l | grep libboost-regex-dev
dpkg -l | grep libboost-system-dev
dpkg -l | grep libboost-thread-dev
dpkg -l | grep libboost-program-options-dev
dpkg -l | grep zlib1g-dev


# Descargar freeling 4.2.1 para Ubuntu 22.04.2 LTS
wget https://github.com/TALP-UPC/FreeLing/releases/download/4.2/freeling-4.2.1-jammy-amd64.deb

# Instalar freeling
sudo dpkg -i freeling-4.2.1-jammy-amd64.deb
