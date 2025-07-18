import { Injectable } from '@nestjs/common';
import { CreateLiquidacionesSueldoDto } from './dto/create-liquidaciones-sueldo.dto';
import { UpdateLiquidacionesSueldoDto } from './dto/update-liquidaciones-sueldo.dto';

@Injectable()
export class LiquidacionesSueldoService {
  create(createLiquidacionesSueldoDto: CreateLiquidacionesSueldoDto) {
    return 'This action adds a new liquidacionesSueldo';
  }

  findAll() {
    return `This action returns all liquidacionesSueldo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} liquidacionesSueldo`;
  }

  update(id: number, updateLiquidacionesSueldoDto: UpdateLiquidacionesSueldoDto) {
    return `This action updates a #${id} liquidacionesSueldo`;
  }

  remove(id: number) {
    return `This action removes a #${id} liquidacionesSueldo`;
  }
}
