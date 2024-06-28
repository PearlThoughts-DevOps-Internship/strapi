resource "aws_security_group" "sgforstrapi" {
  vpc_id      = aws_vpc.vpcstrapi.id
  description = "This is for strapy application"
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {

    from_port   = 1337
    to_port     = 1337
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "Sg-strapi"
  }

}
data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] 
  depends_on = [ aws_security_group.sgforstrapi ]
}


resource "aws_instance" "ec2forstrapi" {
  ami                         = "data.aws_ami.ubuntu.id"
  availability_zone = "us-west-2a"
  instance_type               = var.instance_type
  vpc_security_group_ids      = [aws_security_group.sgforstrapi.id]
  subnet_id                   = aws_subnet.publicsubnet.id
  key_name                    = var.key_name
  associate_public_ip_address = true
  tags = {
    Name = "ec2forstrapi"
  }
}

resource "null_resource" "example" {

    provisioner "remote-exec" {
      connection {
      type        = "ssh"
      user        = "ubuntu"
      private_key = file("~/.ssh/id_rsa") 
      host        = aws_instance.ec2forstrapi.public_ip
    }
    inline = [
      "sudo apt-get update",
      "curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -",
      "sudo apt-get install -y nodejs",
      "sudo npm install -g pm2",
      "cd /srv",
      "sudo git clone https://github.com/PearlThoughts-DevOps-Internship/strapi",
      "sudo chown -R ubuntu:ubuntu /srv/strapi",
      "sudo chmod -R 755 /srv/strapi",
      "cd /srv/strapi",
      "touch .env",
      "echo 'HOST=${MAHESHR_HOST}' >> .env",
      "echo 'PORT=${MAHESHR_PORT}' >> .env",
      "echo 'APP_KEYS=${MAHESHR_APP_KEYS}' >> .env",
      "echo 'API_TOKEN_SALT=${MAHESHR_API_TOKEN_SALT}' >> .env",
      "echo 'ADMIN_JWT_SECRET=${MAHESHR_ADMIN_JWT_SECRET}' >> .env",
      "echo 'TRANSFER_TOKEN_SALT=${MAHESHR_TRANSFER_TOKEN_SALT}' >> .env",
      "echo 'DATABASE_CLIENT=${MAHESHR_DATABASE_CLIENT}' >> .env",
      "echo 'DATABASE_FILENAME=${MAHESHR_DATABASE_FILENAME}' >> .env",
      "echo 'DATABASE_FILENAME=${MAHESHR_JWT_SECRET}' >> .env",
      "git checkout -f mahesh-prod",
      "git pull origin mahesh-prod",
      "sudo npm install",
      "npm run build",
      "pm2 start npm --name 'strapi' -- start",
      "pm2 restart all"
    ]
}
 depends_on = [
    aws_instance.ec2forstrapi
  ]
  }

