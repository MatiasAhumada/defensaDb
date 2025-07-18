import { Injectable } from '@nestjs/common';
import { CreateEmpleadoDepartamentoHistorialDto } from './dto/create-empleado-departamento-historial.dto';
import { UpdateEmpleadoDepartamentoHistorialDto } from './dto/update-empleado-departamento-historial.dto';

@Injectable()
export class EmpleadoDepartamentoHistorialService {
  create(createEmpleadoDepartamentoHistorialDto: CreateEmpleadoDepartamentoHistorialDto) {
    return 'This action adds a new empleadoDepartamentoHistorial';
  }

  findAll() {
    return `This action returns all empleadoDepartamentoHistorial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empleadoDepartamentoHistorial`;
  }

  update(id: number, updateEmpleadoDepartamentoHistorialDto: UpdateEmpleadoDepartamentoHistorialDto) {
    return `This action updates a #${id} empleadoDepartamentoHistorial`;
  }

  remove(id: number) {
    return `This action removes a #${id} empleadoDepartamentoHistorial`;
  }
}
