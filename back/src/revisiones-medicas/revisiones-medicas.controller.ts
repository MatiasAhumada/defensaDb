import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RevisionesMedicasService } from './revisiones-medicas.service';
import { CreateRevisionesMedicaDto } from './dto/create-revisiones-medica.dto';
import { UpdateRevisionesMedicaDto } from './dto/update-revisiones-medica.dto';

@Controller('revisiones-medicas')
export class RevisionesMedicasController {
  constructor(private readonly revisionesMedicasService: RevisionesMedicasService) {}

  @Post()
  create(@Body() createRevisionesMedicaDto: CreateRevisionesMedicaDto) {
    return this.revisionesMedicasService.create(createRevisionesMedicaDto);
  }

  @Get()
  findAll() {
    return this.revisionesMedicasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.revisionesMedicasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRevisionesMedicaDto: UpdateRevisionesMedicaDto) {
    return this.revisionesMedicasService.update(+id, updateRevisionesMedicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.revisionesMedicasService.remove(+id);
  }
}
