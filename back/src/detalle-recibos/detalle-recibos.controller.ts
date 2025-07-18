import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleRecibosService } from './detalle-recibos.service';
import { CreateDetalleReciboDto } from './dto/create-detalle-recibo.dto';
import { UpdateDetalleReciboDto } from './dto/update-detalle-recibo.dto';

@Controller('detalle-recibos')
export class DetalleRecibosController {
  constructor(private readonly detalleRecibosService: DetalleRecibosService) {}

  @Post()
  create(@Body() createDetalleReciboDto: CreateDetalleReciboDto) {
    return this.detalleRecibosService.create(createDetalleReciboDto);
  }

  @Get()
  findAll() {
    return this.detalleRecibosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleRecibosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetalleReciboDto: UpdateDetalleReciboDto) {
    return this.detalleRecibosService.update(+id, updateDetalleReciboDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleRecibosService.remove(+id);
  }
}
