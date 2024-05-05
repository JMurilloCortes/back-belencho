import { Module } from '@nestjs/common';
import { ClientesModule } from './clientes/clientes.module';
import { ProductosModule } from './productos/productos.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [ClientesModule, ProductosModule, CategoriasModule],
})
export class AppModule {}
