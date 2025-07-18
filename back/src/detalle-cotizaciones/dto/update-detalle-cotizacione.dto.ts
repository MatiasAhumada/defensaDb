import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalleCotizacioneDto } from './create-detalle-cotizacione.dto';

export class UpdateDetalleCotizacioneDto extends PartialType(CreateDetalleCotizacioneDto) {}
