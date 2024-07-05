terraform {
  backend "s3" {
    bucket  = "ims-conf-bucket"
    region  = "ap-south-1"
    key     = "anand/node-hello-app/terraform.tfstate"
    encrypt = true
  }
  required_version = ">=0.13.0"
  required_providers {
    aws = {
      version = "~> 5.0"
      source  = "hashicorp/aws"
    }
  }
}