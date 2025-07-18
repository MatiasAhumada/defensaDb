import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpleadoCursoService } from './empleado-curso.service';
import { CreateEmpleadoCursoDto } from './dto/create-empleado-curso.dto';
import { UpdateEmpleadoCursoDto } from './dto/update-empleado-curso.dto';

@Controller('empleado-curso')
export class EmpleadoCursoController {
  constructor(private readonly empleadoCursoService: EmpleadoCursoService) {}

  @Post()
  create(@Body() createEmpleadoCursoDto: CreateEmpleadoCursoDto) {
    return this.empleadoCursoService.create(createEmpleadoCursoDto);
  }

  @Get()
  findAll() {
    return this.empleadoCursoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empleadoCursoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpleadoCursoDto: UpdateEmpleadoCursoDto) {
    return this.empleadoCursoService.update(+id, updateEmpleadoCursoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empleadoCursoService.remove(+id);
  }
}
