terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.54.1"
    }
  }
}

provider "aws" {
  region = var.region
}

resource "tls_private_key" "strapi_ec2" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

resource "aws_instance" "strapi_instance" {
  ami             = var.ami
  instance_type   = "t2.micro"
  key_name        = "strapi_ec2_keys"
  security_groups = [aws_security_group.strapi_ec2_sg.name]

  tags = {
    Name = "Paramesh-Strapi-Instance"
  }

  user_data = <<EOF
#!/bin/bash

sudo apt-get update
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs npm

sudo npm install pm2 -g

if [ ! -d /srv/strapi ]; then
  sudo git clone https://github.com/Parameswaran17/strapi.git /srv/strapi
fi

sudo chmod +x /srv/strapi/generate_env_variables.sh  # Specify exact file

cd /srv/strapi
sudo ./generate_env_variables.sh
EOF

}

resource "aws_security_group" "strapi_ec2_sg" {
  name        = "strapi-security-group2"
  description = "Security group for Strapi EC2 instance"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 1337
    to_port     = 1337
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "Strapi Security Group"
  }
}
