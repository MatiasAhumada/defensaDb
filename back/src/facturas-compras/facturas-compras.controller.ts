import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FacturasComprasService } from './facturas-compras.service';
import { CreateFacturasCompraDto } from './dto/create-facturas-compra.dto';
import { UpdateFacturasCompraDto } from './dto/update-facturas-compra.dto';

@Controller('facturas-compras')
export class FacturasComprasController {
  constructor(private readonly facturasComprasService: FacturasComprasService) {}

  @Post()
  create(@Body() createFacturasCompraDto: CreateFacturasCompraDto) {
    return this.facturasComprasService.create(createFacturasCompraDto);
  }

  @Get()
  findAll() {
    return this.facturasComprasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facturasComprasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacturasCompraDto: UpdateFacturasCompraDto) {
    return this.facturasComprasService.update(+id, updateFacturasCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facturasComprasService.remove(+id);
  }
}
