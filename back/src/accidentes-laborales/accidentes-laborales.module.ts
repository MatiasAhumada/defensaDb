import { Module } from '@nestjs/common';
import { AccidentesLaboralesService } from './accidentes-laborales.service';
import { AccidentesLaboralesController } from './accidentes-laborales.controller';

@Module({
  controllers: [AccidentesLaboralesController],
  providers: [AccidentesLaboralesService],
})
export class AccidentesLaboralesModule {}
