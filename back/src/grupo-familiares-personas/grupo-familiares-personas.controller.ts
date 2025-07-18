import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrupoFamiliaresPersonasService } from './grupo-familiares-personas.service';
import { CreateGrupoFamiliaresPersonaDto } from './dto/create-grupo-familiares-persona.dto';
import { UpdateGrupoFamiliaresPersonaDto } from './dto/update-grupo-familiares-persona.dto';

@Controller('grupo-familiares-personas')
export class GrupoFamiliaresPersonasController {
  constructor(private readonly grupoFamiliaresPersonasService: GrupoFamiliaresPersonasService) {}

  @Post()
  create(@Body() createGrupoFamiliaresPersonaDto: CreateGrupoFamiliaresPersonaDto) {
    return this.grupoFamiliaresPersonasService.create(createGrupoFamiliaresPersonaDto);
  }

  @Get()
  findAll() {
    return this.grupoFamiliaresPersonasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grupoFamiliaresPersonasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrupoFamiliaresPersonaDto: UpdateGrupoFamiliaresPersonaDto) {
    return this.grupoFamiliaresPersonasService.update(+id, updateGrupoFamiliaresPersonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grupoFamiliaresPersonasService.remove(+id);
  }
}
