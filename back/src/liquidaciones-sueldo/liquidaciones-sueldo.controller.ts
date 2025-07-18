import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LiquidacionesSueldoService } from './liquidaciones-sueldo.service';
import { CreateLiquidacionesSueldoDto } from './dto/create-liquidaciones-sueldo.dto';
import { UpdateLiquidacionesSueldoDto } from './dto/update-liquidaciones-sueldo.dto';

@Controller('liquidaciones-sueldo')
export class LiquidacionesSueldoController {
  constructor(private readonly liquidacionesSueldoService: LiquidacionesSueldoService) {}

  @Post()
  create(@Body() createLiquidacionesSueldoDto: CreateLiquidacionesSueldoDto) {
    return this.liquidacionesSueldoService.create(createLiquidacionesSueldoDto);
  }

  @Get()
  findAll() {
    return this.liquidacionesSueldoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.liquidacionesSueldoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLiquidacionesSueldoDto: UpdateLiquidacionesSueldoDto) {
    return this.liquidacionesSueldoService.update(+id, updateLiquidacionesSueldoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.liquidacionesSueldoService.remove(+id);
  }
}
