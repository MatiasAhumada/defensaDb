import { Module } from '@nestjs/common';
import { LiquidacionesSueldoService } from './liquidaciones-sueldo.service';
import { LiquidacionesSueldoController } from './liquidaciones-sueldo.controller';

@Module({
  controllers: [LiquidacionesSueldoController],
  providers: [LiquidacionesSueldoService],
})
export class LiquidacionesSueldoModule {}
