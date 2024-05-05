import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
  
  @IsString()
  @IsNotEmpty()
  apellido: string;
  
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;
  
  @IsString()
  @IsNotEmpty()
  password: string;
  
  @IsString()
  @IsNotEmpty()
  telefono: string;
  
  @IsString()
  @IsNotEmpty()
  direccion: string;
}
