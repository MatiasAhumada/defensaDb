import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoDepartamentosService } from './tipo-departamentos.service';
import { CreateTipoDepartamentoDto } from './dto/create-tipo-departamento.dto';
import { UpdateTipoDepartamentoDto } from './dto/update-tipo-departamento.dto';

@Controller('tipo-departamentos')
export class TipoDepartamentosController {
  constructor(private readonly tipoDepartamentosService: TipoDepartamentosService) {}

  @Post()
  create(@Body() createTipoDepartamentoDto: CreateTipoDepartamentoDto) {
    return this.tipoDepartamentosService.create(createTipoDepartamentoDto);
  }

  @Get()
  findAll() {
    return this.tipoDepartamentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoDepartamentosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoDepartamentoDto: UpdateTipoDepartamentoDto) {
    return this.tipoDepartamentosService.update(+id, updateTipoDepartamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoDepartamentosService.remove(+id);
  }
}
