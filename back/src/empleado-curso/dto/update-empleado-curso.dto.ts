import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpleadoCursoDto } from './create-empleado-curso.dto';

export class UpdateEmpleadoCursoDto extends PartialType(CreateEmpleadoCursoDto) {}
