import { Injectable } from '@nestjs/common';
import { CreateGrupoFamiliareDto } from './dto/create-grupo-familiare.dto';
import { UpdateGrupoFamiliareDto } from './dto/update-grupo-familiare.dto';

@Injectable()
export class GrupoFamiliaresService {
  create(createGrupoFamiliareDto: CreateGrupoFamiliareDto) {
    return 'This action adds a new grupoFamiliare';
  }

  findAll() {
    return `This action returns all grupoFamiliares`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grupoFamiliare`;
  }

  update(id: number, updateGrupoFamiliareDto: UpdateGrupoFamiliareDto) {
    return `This action updates a #${id} grupoFamiliare`;
  }

  remove(id: number) {
    return `This action removes a #${id} grupoFamiliare`;
  }
}
