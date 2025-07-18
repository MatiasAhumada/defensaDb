import { Module } from '@nestjs/common';
import { ParametrosMedicosService } from './parametros-medicos.service';
import { ParametrosMedicosController } from './parametros-medicos.controller';

@Module({
  controllers: [ParametrosMedicosController],
  providers: [ParametrosMedicosService],
})
export class ParametrosMedicosModule {}
