import { Injectable } from '@nestjs/common';
import { CreateTipoDepartamentoDto } from './dto/create-tipo-departamento.dto';
import { UpdateTipoDepartamentoDto } from './dto/update-tipo-departamento.dto';

@Injectable()
export class TipoDepartamentosService {
  create(createTipoDepartamentoDto: CreateTipoDepartamentoDto) {
    return 'This action adds a new tipoDepartamento';
  }

  findAll() {
    return `This action returns all tipoDepartamentos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoDepartamento`;
  }

  update(id: number, updateTipoDepartamentoDto: UpdateTipoDepartamentoDto) {
    return `This action updates a #${id} tipoDepartamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoDepartamento`;
  }
}
