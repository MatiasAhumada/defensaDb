import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoEmpleadosService } from './tipo-empleados.service';
import { CreateTipoEmpleadoDto } from './dto/create-tipo-empleado.dto';
import { UpdateTipoEmpleadoDto } from './dto/update-tipo-empleado.dto';

@Controller('tipo-empleados')
export class TipoEmpleadosController {
  constructor(private readonly tipoEmpleadosService: TipoEmpleadosService) {}

  @Post()
  create(@Body() createTipoEmpleadoDto: CreateTipoEmpleadoDto) {
    return this.tipoEmpleadosService.create(createTipoEmpleadoDto);
  }

  @Get()
  findAll() {
    return this.tipoEmpleadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoEmpleadosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoEmpleadoDto: UpdateTipoEmpleadoDto) {
    return this.tipoEmpleadosService.update(+id, updateTipoEmpleadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoEmpleadosService.remove(+id);
  }
}
