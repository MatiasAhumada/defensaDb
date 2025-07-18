import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalleFacturasCompraDto } from './create-detalle-facturas-compra.dto';

export class UpdateDetalleFacturasCompraDto extends PartialType(CreateDetalleFacturasCompraDto) {}
