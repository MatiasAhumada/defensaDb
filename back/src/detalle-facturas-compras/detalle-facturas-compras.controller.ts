import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleFacturasComprasService } from './detalle-facturas-compras.service';
import { CreateDetalleFacturasCompraDto } from './dto/create-detalle-facturas-compra.dto';
import { UpdateDetalleFacturasCompraDto } from './dto/update-detalle-facturas-compra.dto';

@Controller('detalle-facturas-compras')
export class DetalleFacturasComprasController {
  constructor(private readonly detalleFacturasComprasService: DetalleFacturasComprasService) {}

  @Post()
  create(@Body() createDetalleFacturasCompraDto: CreateDetalleFacturasCompraDto) {
    return this.detalleFacturasComprasService.create(createDetalleFacturasCompraDto);
  }

  @Get()
  findAll() {
    return this.detalleFacturasComprasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleFacturasComprasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetalleFacturasCompraDto: UpdateDetalleFacturasCompraDto) {
    return this.detalleFacturasComprasService.update(+id, updateDetalleFacturasCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleFacturasComprasService.remove(+id);
  }
}
