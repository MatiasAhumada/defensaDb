import { Injectable } from '@nestjs/common';
import { CreateRevisionesMedicaDto } from './dto/create-revisiones-medica.dto';
import { UpdateRevisionesMedicaDto } from './dto/update-revisiones-medica.dto';

@Injectable()
export class RevisionesMedicasService {
  create(createRevisionesMedicaDto: CreateRevisionesMedicaDto) {
    return 'This action adds a new revisionesMedica';
  }

  findAll() {
    return `This action returns all revisionesMedicas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} revisionesMedica`;
  }

  update(id: number, updateRevisionesMedicaDto: UpdateRevisionesMedicaDto) {
    return `This action updates a #${id} revisionesMedica`;
  }

  remove(id: number) {
    return `This action removes a #${id} revisionesMedica`;
  }
}
