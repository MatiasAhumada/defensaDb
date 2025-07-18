import { Module } from '@nestjs/common';
import { FacturasComprasService } from './facturas-compras.service';
import { FacturasComprasController } from './facturas-compras.controller';

@Module({
  controllers: [FacturasComprasController],
  providers: [FacturasComprasService],
})
export class FacturasComprasModule {}
