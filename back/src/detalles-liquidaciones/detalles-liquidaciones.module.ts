import { Module } from '@nestjs/common';
import { DetallesLiquidacionesService } from './detalles-liquidaciones.service';
import { DetallesLiquidacionesController } from './detalles-liquidaciones.controller';

@Module({
  controllers: [DetallesLiquidacionesController],
  providers: [DetallesLiquidacionesService],
})
export class DetallesLiquidacionesModule {}
