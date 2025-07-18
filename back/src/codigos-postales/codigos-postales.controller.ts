import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CodigosPostalesService } from './codigos-postales.service';
import { CreateCodigosPostaleDto } from './dto/create-codigos-postale.dto';
import { UpdateCodigosPostaleDto } from './dto/update-codigos-postale.dto';

@Controller('codigos-postales')
export class CodigosPostalesController {
  constructor(private readonly codigosPostalesService: CodigosPostalesService) {}

  @Post()
  create(@Body() createCodigosPostaleDto: CreateCodigosPostaleDto) {
    return this.codigosPostalesService.create(createCodigosPostaleDto);
  }

  @Get()
  findAll() {
    return this.codigosPostalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.codigosPostalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCodigosPostaleDto: UpdateCodigosPostaleDto) {
    return this.codigosPostalesService.update(+id, updateCodigosPostaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.codigosPostalesService.remove(+id);
  }
}
