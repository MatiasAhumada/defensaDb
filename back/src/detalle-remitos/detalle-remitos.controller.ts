import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleRemitosService } from './detalle-remitos.service';
import { CreateDetalleRemitoDto } from './dto/create-detalle-remito.dto';
import { UpdateDetalleRemitoDto } from './dto/update-detalle-remito.dto';

@Controller('detalle-remitos')
export class DetalleRemitosController {
  constructor(private readonly detalleRemitosService: DetalleRemitosService) {}

  @Post()
  create(@Body() createDetalleRemitoDto: CreateDetalleRemitoDto) {
    return this.detalleRemitosService.create(createDetalleRemitoDto);
  }

  @Get()
  findAll() {
    return this.detalleRemitosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleRemitosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetalleRemitoDto: UpdateDetalleRemitoDto) {
    return this.detalleRemitosService.update(+id, updateDetalleRemitoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleRemitosService.remove(+id);
  }
}
