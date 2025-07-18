import { PartialType } from '@nestjs/mapped-types';
import { CreateFacturasCompraDto } from './create-facturas-compra.dto';

export class UpdateFacturasCompraDto extends PartialType(CreateFacturasCompraDto) {}
