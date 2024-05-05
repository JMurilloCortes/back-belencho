import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { Rol } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
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
  
  @IsNotEmpty()
  rol: Rol
}
