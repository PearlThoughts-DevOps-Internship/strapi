variable "region" {
  type = string
  default = "us-west-2"
}
variable "instance_type" {
  type = string
}
variable "MAHESHR_HOST" {
  type = string
  sensitive = true
}
variable "number" {
  type = string
  default = "1.0"
}
variable "MAHESHR_PORT" {
  type = number
  sensitive = true
}
variable "MAHESHR_APP_KEYS" {
  type = string
  sensitive = true
}
variable "MAHESHR_API_TOKEN_SALT" {
  type = string
  sensitive = true
}
variable "MAHESHR_ADMIN_JWT_SECRET" {
  type = string
  sensitive = true
}
variable "MAHESHR_TRANSFER_TOKEN_SALT" {
  type = string
  sensitive = true
}
variable "MAHESHR_DATABASE_CLIENT" {
  type = string
  sensitive = true
}
variable "MAHESHR_DATABASE_FILENAME" {
  type = string
  sensitive = true
}
variable "MAHESHR_JWT_SECRET" {
  type = string
  sensitive = true
}



















