import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecibosService } from './recibos.service';
import { CreateReciboDto } from './dto/create-recibo.dto';
import { UpdateReciboDto } from './dto/update-recibo.dto';

@Controller('recibos')
export class RecibosController {
  constructor(private readonly recibosService: RecibosService) {}

  @Post()
  create(@Body() createReciboDto: CreateReciboDto) {
    return this.recibosService.create(createReciboDto);
  }

  @Get()
  findAll() {
    return this.recibosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recibosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReciboDto: UpdateReciboDto) {
    return this.recibosService.update(+id, updateReciboDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recibosService.remove(+id);
  }
}
