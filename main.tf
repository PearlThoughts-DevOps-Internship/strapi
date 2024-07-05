provider "aws" {
  region = "us-west-2"  # Replace with your desired region
}

data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"]  # Canonical

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }
}

resource "aws_key_pair" "viraj_key" {
  key_name   = "Virajkey"
  public_key = file("C:\\Users\\HP\\Downloads\\Virajkey.pem.pub")
}

resource "aws_security_group" "sg_for_task3" {
  name        = "SG_FOR_Task3"
  description = "Security group for Task 3"

  ingress {
    description = "SSH access"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP access"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS access"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Strapi access"
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
}

# New instance named "Vineet's server"
resource "aws_instance" "vineet_server" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.small"  # Adjust instance type as needed
  key_name      = aws_key_pair.viraj_key.key_name
  security_groups = [aws_security_group.sg_for_task3.name]

  tags = {
    Name = "VineetServer"
  }

  user_data = <<-EOF
              #!/bin/bash
              sudo apt-get update
              # Remove the conflicting packages
              sudo apt-get remove -y libnode-dev libnode72
              # Install Node.js and npm
              curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
              sudo apt-get install -y nodejs
              sudo npm install -g pm2
              # Create the /srv/strapi directory
              sudo mkdir -p /srv/strapi
              sudo chown -R ubuntu:ubuntu /srv/strapi
              # Clone the repository
              git clone https://github.com/Pramod858/simple-strapi /srv/strapi
              cd /srv/strapi
              chmod +x generate_env_var.sh
              ./generate_env_var.sh
              npm install
              npm run build
              # Start the Strapi application using pm2
              pm2 start npm --name "strapi" -- start
              EOF

  connection {
    type        = "ssh"
    user        = "ubuntu"
    private_key = file("C:\\Users\\HP\\Downloads\\Virajkey.pem")
    host        = self.public_ip
  }
}

