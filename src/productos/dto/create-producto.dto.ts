export class CreateProductoDto {
  nombre: string;
  precio: number;
  descripcion: string;
  stock: number;
  imagenes: string[];
  categoriaId: number;
}
