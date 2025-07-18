import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleCotizacionesService } from './detalle-cotizaciones.service';
import { CreateDetalleCotizacioneDto } from './dto/create-detalle-cotizacione.dto';
import { UpdateDetalleCotizacioneDto } from './dto/update-detalle-cotizacione.dto';

@Controller('detalle-cotizaciones')
export class DetalleCotizacionesController {
  constructor(private readonly detalleCotizacionesService: DetalleCotizacionesService) {}

  @Post()
  create(@Body() createDetalleCotizacioneDto: CreateDetalleCotizacioneDto) {
    return this.detalleCotizacionesService.create(createDetalleCotizacioneDto);
  }

  @Get()
  findAll() {
    return this.detalleCotizacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleCotizacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetalleCotizacioneDto: UpdateDetalleCotizacioneDto) {
    return this.detalleCotizacionesService.update(+id, updateDetalleCotizacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleCotizacionesService.remove(+id);
  }
}
