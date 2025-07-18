import { PartialType } from '@nestjs/mapped-types';
import { CreateGrupoFamiliareDto } from './create-grupo-familiare.dto';

export class UpdateGrupoFamiliareDto extends PartialType(CreateGrupoFamiliareDto) {}
