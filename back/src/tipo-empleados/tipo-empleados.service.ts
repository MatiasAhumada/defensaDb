import { Injectable } from '@nestjs/common';
import { CreateTipoEmpleadoDto } from './dto/create-tipo-empleado.dto';
import { UpdateTipoEmpleadoDto } from './dto/update-tipo-empleado.dto';

@Injectable()
export class TipoEmpleadosService {
  create(createTipoEmpleadoDto: CreateTipoEmpleadoDto) {
    return 'This action adds a new tipoEmpleado';
  }

  findAll() {
    return `This action returns all tipoEmpleados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoEmpleado`;
  }

  update(id: number, updateTipoEmpleadoDto: UpdateTipoEmpleadoDto) {
    return `This action updates a #${id} tipoEmpleado`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoEmpleado`;
  }
}
