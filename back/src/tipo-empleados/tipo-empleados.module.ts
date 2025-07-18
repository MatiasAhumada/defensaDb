import { Module } from '@nestjs/common';
import { TipoEmpleadosService } from './tipo-empleados.service';
import { TipoEmpleadosController } from './tipo-empleados.controller';

@Module({
  controllers: [TipoEmpleadosController],
  providers: [TipoEmpleadosService],
})
export class TipoEmpleadosModule {}
