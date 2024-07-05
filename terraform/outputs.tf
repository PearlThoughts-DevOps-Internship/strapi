
output "public_ip" {
  value = aws_instance.strapi.public_ip
}

output "instance_ip" {
  value = aws_instance.strapi.public_ip
} 

output "public_dns" {
  value = aws_instance.strapi.public_dns
}

output "ssh_command_dns" {
  value = "ssh -i strapi-key.pem ubuntu@${aws_instance.strapi.public_dns}"
}