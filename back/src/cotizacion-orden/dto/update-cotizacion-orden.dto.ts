import { PartialType } from '@nestjs/mapped-types';
import { CreateCotizacionOrdenDto } from './create-cotizacion-orden.dto';

export class UpdateCotizacionOrdenDto extends PartialType(CreateCotizacionOrdenDto) {}
