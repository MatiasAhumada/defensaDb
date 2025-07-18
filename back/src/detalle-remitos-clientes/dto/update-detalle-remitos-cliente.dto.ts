import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalleRemitosClienteDto } from './create-detalle-remitos-cliente.dto';

export class UpdateDetalleRemitosClienteDto extends PartialType(CreateDetalleRemitosClienteDto) {}
