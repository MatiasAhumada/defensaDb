import { Module } from '@nestjs/common';
import { DetalleFacturasComprasService } from './detalle-facturas-compras.service';
import { DetalleFacturasComprasController } from './detalle-facturas-compras.controller';

@Module({
  controllers: [DetalleFacturasComprasController],
  providers: [DetalleFacturasComprasService],
})
export class DetalleFacturasComprasModule {}
