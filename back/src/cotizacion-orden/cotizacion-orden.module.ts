import { Module } from '@nestjs/common';
import { CotizacionOrdenService } from './cotizacion-orden.service';
import { CotizacionOrdenController } from './cotizacion-orden.controller';

@Module({
  controllers: [CotizacionOrdenController],
  providers: [CotizacionOrdenService],
})
export class CotizacionOrdenModule {}
