import { PartialType } from '@nestjs/mapped-types';
import { CreateRemitosClienteDto } from './create-remitos-cliente.dto';

export class UpdateRemitosClienteDto extends PartialType(CreateRemitosClienteDto) {}
