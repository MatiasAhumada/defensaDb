import { PartialType } from '@nestjs/mapped-types';
import { CreateLiquidacionesSueldoDto } from './create-liquidaciones-sueldo.dto';

export class UpdateLiquidacionesSueldoDto extends PartialType(CreateLiquidacionesSueldoDto) {}
