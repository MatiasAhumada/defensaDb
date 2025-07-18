import { Injectable } from '@nestjs/common';
import { CreateDetallesLiquidacioneDto } from './dto/create-detalles-liquidacione.dto';
import { UpdateDetallesLiquidacioneDto } from './dto/update-detalles-liquidacione.dto';

@Injectable()
export class DetallesLiquidacionesService {
  create(createDetallesLiquidacioneDto: CreateDetallesLiquidacioneDto) {
    return 'This action adds a new detallesLiquidacione';
  }

  findAll() {
    return `This action returns all detallesLiquidaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detallesLiquidacione`;
  }

  update(id: number, updateDetallesLiquidacioneDto: UpdateDetallesLiquidacioneDto) {
    return `This action updates a #${id} detallesLiquidacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} detallesLiquidacione`;
  }
}
