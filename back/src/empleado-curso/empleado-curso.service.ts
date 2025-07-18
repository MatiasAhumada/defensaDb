import { Injectable } from '@nestjs/common';
import { CreateEmpleadoCursoDto } from './dto/create-empleado-curso.dto';
import { UpdateEmpleadoCursoDto } from './dto/update-empleado-curso.dto';

@Injectable()
export class EmpleadoCursoService {
  create(createEmpleadoCursoDto: CreateEmpleadoCursoDto) {
    return 'This action adds a new empleadoCurso';
  }

  findAll() {
    return `This action returns all empleadoCurso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empleadoCurso`;
  }

  update(id: number, updateEmpleadoCursoDto: UpdateEmpleadoCursoDto) {
    return `This action updates a #${id} empleadoCurso`;
  }

  remove(id: number) {
    return `This action removes a #${id} empleadoCurso`;
  }
}
