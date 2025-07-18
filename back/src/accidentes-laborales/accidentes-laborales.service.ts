import { Injectable } from '@nestjs/common';
import { CreateAccidentesLaboraleDto } from './dto/create-accidentes-laborale.dto';
import { UpdateAccidentesLaboraleDto } from './dto/update-accidentes-laborale.dto';

@Injectable()
export class AccidentesLaboralesService {
  create(createAccidentesLaboraleDto: CreateAccidentesLaboraleDto) {
    return 'This action adds a new accidentesLaborale';
  }

  findAll() {
    return `This action returns all accidentesLaborales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accidentesLaborale`;
  }

  update(id: number, updateAccidentesLaboraleDto: UpdateAccidentesLaboraleDto) {
    return `This action updates a #${id} accidentesLaborale`;
  }

  remove(id: number) {
    return `This action removes a #${id} accidentesLaborale`;
  }
}
