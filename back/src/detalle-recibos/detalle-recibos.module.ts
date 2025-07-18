import { Module } from '@nestjs/common';
import { DetalleRecibosService } from './detalle-recibos.service';
import { DetalleRecibosController } from './detalle-recibos.controller';

@Module({
  controllers: [DetalleRecibosController],
  providers: [DetalleRecibosService],
})
export class DetalleRecibosModule {}
