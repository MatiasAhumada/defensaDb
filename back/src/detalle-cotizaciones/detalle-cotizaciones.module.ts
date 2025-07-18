import { Module } from '@nestjs/common';
import { DetalleCotizacionesService } from './detalle-cotizaciones.service';
import { DetalleCotizacionesController } from './detalle-cotizaciones.controller';

@Module({
  controllers: [DetalleCotizacionesController],
  providers: [DetalleCotizacionesService],
})
export class DetalleCotizacionesModule {}
