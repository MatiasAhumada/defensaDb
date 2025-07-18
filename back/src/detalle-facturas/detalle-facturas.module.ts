import { Module } from '@nestjs/common';
import { DetalleFacturasService } from './detalle-facturas.service';
import { DetalleFacturasController } from './detalle-facturas.controller';

@Module({
  controllers: [DetalleFacturasController],
  providers: [DetalleFacturasService],
})
export class DetalleFacturasModule {}
