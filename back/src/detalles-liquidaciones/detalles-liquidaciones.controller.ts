import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetallesLiquidacionesService } from './detalles-liquidaciones.service';
import { CreateDetallesLiquidacioneDto } from './dto/create-detalles-liquidacione.dto';
import { UpdateDetallesLiquidacioneDto } from './dto/update-detalles-liquidacione.dto';

@Controller('detalles-liquidaciones')
export class DetallesLiquidacionesController {
  constructor(private readonly detallesLiquidacionesService: DetallesLiquidacionesService) {}

  @Post()
  create(@Body() createDetallesLiquidacioneDto: CreateDetallesLiquidacioneDto) {
    return this.detallesLiquidacionesService.create(createDetallesLiquidacioneDto);
  }

  @Get()
  findAll() {
    return this.detallesLiquidacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detallesLiquidacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetallesLiquidacioneDto: UpdateDetallesLiquidacioneDto) {
    return this.detallesLiquidacionesService.update(+id, updateDetallesLiquidacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detallesLiquidacionesService.remove(+id);
  }
}
