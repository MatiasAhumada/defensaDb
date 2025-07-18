import { Injectable } from '@nestjs/common';
import { CreateCodigosPostaleDto } from './dto/create-codigos-postale.dto';
import { UpdateCodigosPostaleDto } from './dto/update-codigos-postale.dto';

@Injectable()
export class CodigosPostalesService {
  create(createCodigosPostaleDto: CreateCodigosPostaleDto) {
    return 'This action adds a new codigosPostale';
  }

  findAll() {
    return `This action returns all codigosPostales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} codigosPostale`;
  }

  update(id: number, updateCodigosPostaleDto: UpdateCodigosPostaleDto) {
    return `This action updates a #${id} codigosPostale`;
  }

  remove(id: number) {
    return `This action removes a #${id} codigosPostale`;
  }
}
