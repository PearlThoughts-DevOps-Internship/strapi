variable "private_key_path" {
  description = "Path to your SSH private key"
  type        = string
  default     = "C:\\Users\\HP\\Downloads\\Virajkey.pem"
}

variable "aws_region" {
  description = "AWS region where resources will be deployed"
  type        = string
  default     = "us-east-1"
}