import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoDepartamentoDto } from './create-tipo-departamento.dto';

export class UpdateTipoDepartamentoDto extends PartialType(CreateTipoDepartamentoDto) {}
