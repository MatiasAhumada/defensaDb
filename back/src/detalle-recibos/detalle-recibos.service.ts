import { Injectable } from '@nestjs/common';
import { CreateDetalleReciboDto } from './dto/create-detalle-recibo.dto';
import { UpdateDetalleReciboDto } from './dto/update-detalle-recibo.dto';

@Injectable()
export class DetalleRecibosService {
  create(createDetalleReciboDto: CreateDetalleReciboDto) {
    return 'This action adds a new detalleRecibo';
  }

  findAll() {
    return `This action returns all detalleRecibos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalleRecibo`;
  }

  update(id: number, updateDetalleReciboDto: UpdateDetalleReciboDto) {
    return `This action updates a #${id} detalleRecibo`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalleRecibo`;
  }
}
