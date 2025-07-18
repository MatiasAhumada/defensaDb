import { Module } from '@nestjs/common';
import { EmpleadoDepartamentoHistorialService } from './empleado-departamento-historial.service';
import { EmpleadoDepartamentoHistorialController } from './empleado-departamento-historial.controller';

@Module({
  controllers: [EmpleadoDepartamentoHistorialController],
  providers: [EmpleadoDepartamentoHistorialService],
})
export class EmpleadoDepartamentoHistorialModule {}
