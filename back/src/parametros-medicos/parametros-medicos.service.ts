import { Injectable } from '@nestjs/common';
import { CreateParametrosMedicoDto } from './dto/create-parametros-medico.dto';
import { UpdateParametrosMedicoDto } from './dto/update-parametros-medico.dto';

@Injectable()
export class ParametrosMedicosService {
  create(createParametrosMedicoDto: CreateParametrosMedicoDto) {
    return 'This action adds a new parametrosMedico';
  }

  findAll() {
    return `This action returns all parametrosMedicos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parametrosMedico`;
  }

  update(id: number, updateParametrosMedicoDto: UpdateParametrosMedicoDto) {
    return `This action updates a #${id} parametrosMedico`;
  }

  remove(id: number) {
    return `This action removes a #${id} parametrosMedico`;
  }
}
