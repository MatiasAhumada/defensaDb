import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdenComprasService } from './orden-compras.service';
import { CreateOrdenCompraDto } from './dto/create-orden-compra.dto';
import { UpdateOrdenCompraDto } from './dto/update-orden-compra.dto';

@Controller('orden-compras')
export class OrdenComprasController {
  constructor(private readonly ordenComprasService: OrdenComprasService) {}

  @Post()
  create(@Body() createOrdenCompraDto: CreateOrdenCompraDto) {
    return this.ordenComprasService.create(createOrdenCompraDto);
  }

  @Get()
  findAll() {
    return this.ordenComprasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordenComprasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdenCompraDto: UpdateOrdenCompraDto) {
    return this.ordenComprasService.update(+id, updateOrdenCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordenComprasService.remove(+id);
  }
}
