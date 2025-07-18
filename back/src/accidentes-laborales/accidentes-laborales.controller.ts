import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccidentesLaboralesService } from './accidentes-laborales.service';
import { CreateAccidentesLaboraleDto } from './dto/create-accidentes-laborale.dto';
import { UpdateAccidentesLaboraleDto } from './dto/update-accidentes-laborale.dto';

@Controller('accidentes-laborales')
export class AccidentesLaboralesController {
  constructor(private readonly accidentesLaboralesService: AccidentesLaboralesService) {}

  @Post()
  create(@Body() createAccidentesLaboraleDto: CreateAccidentesLaboraleDto) {
    return this.accidentesLaboralesService.create(createAccidentesLaboraleDto);
  }

  @Get()
  findAll() {
    return this.accidentesLaboralesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accidentesLaboralesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccidentesLaboraleDto: UpdateAccidentesLaboraleDto) {
    return this.accidentesLaboralesService.update(+id, updateAccidentesLaboraleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accidentesLaboralesService.remove(+id);
  }
}
