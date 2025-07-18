import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParametrosMedicosService } from './parametros-medicos.service';
import { CreateParametrosMedicoDto } from './dto/create-parametros-medico.dto';
import { UpdateParametrosMedicoDto } from './dto/update-parametros-medico.dto';

@Controller('parametros-medicos')
export class ParametrosMedicosController {
  constructor(private readonly parametrosMedicosService: ParametrosMedicosService) {}

  @Post()
  create(@Body() createParametrosMedicoDto: CreateParametrosMedicoDto) {
    return this.parametrosMedicosService.create(createParametrosMedicoDto);
  }

  @Get()
  findAll() {
    return this.parametrosMedicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parametrosMedicosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParametrosMedicoDto: UpdateParametrosMedicoDto) {
    return this.parametrosMedicosService.update(+id, updateParametrosMedicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parametrosMedicosService.remove(+id);
  }
}
