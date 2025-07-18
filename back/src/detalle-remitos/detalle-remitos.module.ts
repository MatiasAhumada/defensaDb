import { Module } from '@nestjs/common';
import { DetalleRemitosService } from './detalle-remitos.service';
import { DetalleRemitosController } from './detalle-remitos.controller';

@Module({
  controllers: [DetalleRemitosController],
  providers: [DetalleRemitosService],
})
export class DetalleRemitosModule {}
