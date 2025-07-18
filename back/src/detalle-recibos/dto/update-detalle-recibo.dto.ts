import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalleReciboDto } from './create-detalle-recibo.dto';

export class UpdateDetalleReciboDto extends PartialType(CreateDetalleReciboDto) {}
