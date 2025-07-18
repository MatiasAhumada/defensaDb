import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpleadoDepartamentoHistorialDto } from './create-empleado-departamento-historial.dto';

export class UpdateEmpleadoDepartamentoHistorialDto extends PartialType(CreateEmpleadoDepartamentoHistorialDto) {}
