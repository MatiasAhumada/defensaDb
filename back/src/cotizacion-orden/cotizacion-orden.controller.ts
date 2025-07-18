import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CotizacionOrdenService } from './cotizacion-orden.service';
import { CreateCotizacionOrdenDto } from './dto/create-cotizacion-orden.dto';
import { UpdateCotizacionOrdenDto } from './dto/update-cotizacion-orden.dto';

@Controller('cotizacion-orden')
export class CotizacionOrdenController {
  constructor(private readonly cotizacionOrdenService: CotizacionOrdenService) {}

  @Post()
  create(@Body() createCotizacionOrdenDto: CreateCotizacionOrdenDto) {
    return this.cotizacionOrdenService.create(createCotizacionOrdenDto);
  }

  @Get()
  findAll() {
    return this.cotizacionOrdenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cotizacionOrdenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCotizacionOrdenDto: UpdateCotizacionOrdenDto) {
    return this.cotizacionOrdenService.update(+id, updateCotizacionOrdenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cotizacionOrdenService.remove(+id);
  }
}
