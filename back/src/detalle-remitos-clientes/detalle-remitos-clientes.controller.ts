import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleRemitosClientesService } from './detalle-remitos-clientes.service';
import { CreateDetalleRemitosClienteDto } from './dto/create-detalle-remitos-cliente.dto';
import { UpdateDetalleRemitosClienteDto } from './dto/update-detalle-remitos-cliente.dto';

@Controller('detalle-remitos-clientes')
export class DetalleRemitosClientesController {
  constructor(private readonly detalleRemitosClientesService: DetalleRemitosClientesService) {}

  @Post()
  create(@Body() createDetalleRemitosClienteDto: CreateDetalleRemitosClienteDto) {
    return this.detalleRemitosClientesService.create(createDetalleRemitosClienteDto);
  }

  @Get()
  findAll() {
    return this.detalleRemitosClientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleRemitosClientesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetalleRemitosClienteDto: UpdateDetalleRemitosClienteDto) {
    return this.detalleRemitosClientesService.update(+id, updateDetalleRemitosClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleRemitosClientesService.remove(+id);
  }
}
