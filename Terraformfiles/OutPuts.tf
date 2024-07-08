output "Access_Strapi_Application_At_This_URL" {
  description = "The full URL of the Strapi application"
  value       = "http://${aws_instance.vineet_server.public_ip}:1337/"
}

output "instance_id" {
  description = "The ID of the EC2 instance"
  value       = aws_instance.vineet_server.id
}
