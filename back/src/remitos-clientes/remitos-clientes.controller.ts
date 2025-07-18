import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RemitosClientesService } from './remitos-clientes.service';
import { CreateRemitosClienteDto } from './dto/create-remitos-cliente.dto';
import { UpdateRemitosClienteDto } from './dto/update-remitos-cliente.dto';

@Controller('remitos-clientes')
export class RemitosClientesController {
  constructor(private readonly remitosClientesService: RemitosClientesService) {}

  @Post()
  create(@Body() createRemitosClienteDto: CreateRemitosClienteDto) {
    return this.remitosClientesService.create(createRemitosClienteDto);
  }

  @Get()
  findAll() {
    return this.remitosClientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.remitosClientesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRemitosClienteDto: UpdateRemitosClienteDto) {
    return this.remitosClientesService.update(+id, updateRemitosClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.remitosClientesService.remove(+id);
  }
}
