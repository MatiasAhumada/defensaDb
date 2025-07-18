import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpleadoDepartamentoHistorialService } from './empleado-departamento-historial.service';
import { CreateEmpleadoDepartamentoHistorialDto } from './dto/create-empleado-departamento-historial.dto';
import { UpdateEmpleadoDepartamentoHistorialDto } from './dto/update-empleado-departamento-historial.dto';

@Controller('empleado-departamento-historial')
export class EmpleadoDepartamentoHistorialController {
  constructor(private readonly empleadoDepartamentoHistorialService: EmpleadoDepartamentoHistorialService) {}

  @Post()
  create(@Body() createEmpleadoDepartamentoHistorialDto: CreateEmpleadoDepartamentoHistorialDto) {
    return this.empleadoDepartamentoHistorialService.create(createEmpleadoDepartamentoHistorialDto);
  }

  @Get()
  findAll() {
    return this.empleadoDepartamentoHistorialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empleadoDepartamentoHistorialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpleadoDepartamentoHistorialDto: UpdateEmpleadoDepartamentoHistorialDto) {
    return this.empleadoDepartamentoHistorialService.update(+id, updateEmpleadoDepartamentoHistorialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empleadoDepartamentoHistorialService.remove(+id);
  }
}
