import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrupoFamiliaresService } from './grupo-familiares.service';
import { CreateGrupoFamiliareDto } from './dto/create-grupo-familiare.dto';
import { UpdateGrupoFamiliareDto } from './dto/update-grupo-familiare.dto';

@Controller('grupo-familiares')
export class GrupoFamiliaresController {
  constructor(private readonly grupoFamiliaresService: GrupoFamiliaresService) {}

  @Post()
  create(@Body() createGrupoFamiliareDto: CreateGrupoFamiliareDto) {
    return this.grupoFamiliaresService.create(createGrupoFamiliareDto);
  }

  @Get()
  findAll() {
    return this.grupoFamiliaresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grupoFamiliaresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrupoFamiliareDto: UpdateGrupoFamiliareDto) {
    return this.grupoFamiliaresService.update(+id, updateGrupoFamiliareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grupoFamiliaresService.remove(+id);
  }
}
