import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClientesService {
  
  constructor(private prisma: PrismaService) {}

  async create(createClienteDto: CreateClienteDto) {
    // Hashear la contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash(createClienteDto.password, 10); // El segundo argumento es el número de rondas de hashing
    
    // Crear el cliente con la contraseña hasheada
    return this.prisma.cliente.create({
      data: {
        ...createClienteDto,
        password: hashedPassword, // Almacena la contraseña hasheada en lugar de la contraseña en texto plano
      },
    });
  }

  findAll() {
    return this.prisma.cliente.findMany();
  }

  findOne(id: string) {
    return this.prisma.cliente.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateClienteDto: UpdateClienteDto) {
     // Hashear la contraseña antes de almacenarla
     const hashedPassword = await bcrypt.hash(updateClienteDto.password, 10); // El segundo argumento es el número de rondas de hashing

     // Actualiza el cliente con la contraseña hasheada
    return this.prisma.cliente.update({
      where: { id },
      data: {
        ...updateClienteDto,
        password: hashedPassword, // Almacena la contraseña hasheada en lugar de la contraseña en texto plano
      },
    });
  }

  remove(id: string) {
    return this.prisma.cliente.delete({
      where: { id },
    });
  }
}
