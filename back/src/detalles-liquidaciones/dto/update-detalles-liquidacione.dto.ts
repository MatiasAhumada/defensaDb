import { PartialType } from '@nestjs/mapped-types';
import { CreateDetallesLiquidacioneDto } from './create-detalles-liquidacione.dto';

export class UpdateDetallesLiquidacioneDto extends PartialType(CreateDetallesLiquidacioneDto) {}
