import { PartialType } from '@nestjs/mapped-types';
import { CreateParametrosMedicoDto } from './create-parametros-medico.dto';

export class UpdateParametrosMedicoDto extends PartialType(CreateParametrosMedicoDto) {}
