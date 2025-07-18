import { Module } from '@nestjs/common';
import { EmpleadoCursoService } from './empleado-curso.service';
import { EmpleadoCursoController } from './empleado-curso.controller';

@Module({
  controllers: [EmpleadoCursoController],
  providers: [EmpleadoCursoService],
})
export class EmpleadoCursoModule {}
