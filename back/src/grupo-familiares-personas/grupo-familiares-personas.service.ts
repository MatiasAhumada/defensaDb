import { Injectable } from '@nestjs/common';
import { CreateGrupoFamiliaresPersonaDto } from './dto/create-grupo-familiares-persona.dto';
import { UpdateGrupoFamiliaresPersonaDto } from './dto/update-grupo-familiares-persona.dto';

@Injectable()
export class GrupoFamiliaresPersonasService {
  create(createGrupoFamiliaresPersonaDto: CreateGrupoFamiliaresPersonaDto) {
    return 'This action adds a new grupoFamiliaresPersona';
  }

  findAll() {
    return `This action returns all grupoFamiliaresPersonas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grupoFamiliaresPersona`;
  }

  update(id: number, updateGrupoFamiliaresPersonaDto: UpdateGrupoFamiliaresPersonaDto) {
    return `This action updates a #${id} grupoFamiliaresPersona`;
  }

  remove(id: number) {
    return `This action removes a #${id} grupoFamiliaresPersona`;
  }
}
