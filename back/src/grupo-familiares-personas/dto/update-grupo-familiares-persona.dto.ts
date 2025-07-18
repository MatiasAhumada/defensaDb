import { PartialType } from '@nestjs/mapped-types';
import { CreateGrupoFamiliaresPersonaDto } from './create-grupo-familiares-persona.dto';

export class UpdateGrupoFamiliaresPersonaDto extends PartialType(CreateGrupoFamiliaresPersonaDto) {}
