import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
  nombre: string;
  precio: number;
  descripcion: string;
  stock: number;
  imagenes: string[];
  categoriaId: number;
}
