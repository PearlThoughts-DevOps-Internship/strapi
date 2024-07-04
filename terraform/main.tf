data "aws_vpc" "default" {
  default = true
 }

data "aws_subnets" "default" {   # using default vpc 
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }

  # Optional: Specify an exact availability zone
  # filter {
  #   name   = "availability-zone"
  #   values = ["us-east-1"]  # Adjust as necessary
  # }
}

data "aws_subnet" "first" {
  id = element(data.aws_subnets.default.ids, 0)
}

resource "aws_security_group" "strapi_sg" {
  vpc_id = data.aws_vpc.default.id

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
    Name = "strapi-sg"
  }
}

resource "aws_instance" "vyank_strapi_docker" {
  ami                    = "ami-04a81a99f5ec58529"
  instance_type          = "t2.medium"
  subnet_id              = data.aws_subnet.first.id
  vpc_security_group_ids = [aws_security_group.strapi_sg.id]
  key_name               = "task3"


  tags = {
    Name = "vyank-strapi-docker"
  }
}
