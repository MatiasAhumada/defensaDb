import { Module } from '@nestjs/common';
import { CategoriaProductosService } from './categoria-productos.service';
import { CategoriaProductosController } from './categoria-productos.controller';

@Module({
  controllers: [CategoriaProductosController],
  providers: [CategoriaProductosService],
})
export class CategoriaProductosModule {}
