resource "aws_instance" "ec2-node-server2" {
  ami                    = "ami-05e00961530ae1b55" 
  instance_type          = "t3a.small"
  vpc_security_group_ids = [aws_security_group.HelloSG.id]
  subnet_id              = "subnet-0d45f137e4b451d4d"
  key_name               = "nandhu159"
  associate_public_ip_address = true


  tags = {
    Name = "Anand-terraform-new"
  }

  provisioner "remote-exec" { # keep this block inside resource block and save hours of time on the internet
    inline = [
      "sudo apt-get update",
      "curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -",

      "sudo apt install -y nodejs",
      "sudo npm install -g yarn",
      "sudo apt-get install git -y",
      "sudo npm install -g pm2 ",
      "git clone --single-branch --branch anand https://github.com/PearlThoughts-DevOps-Internship/strapi.git",
      "cd strapi/",
      "git pull",
      "npm install",
      "npm run build",
      "pm2 restart strapi || pm2 start npm --name strapi -- run start"

    ]

    connection {
      type = "ssh"
      user = "ubuntu"
      private_key = var.ssh_private_key
      host        = self.public_ip
    }
  }



}


