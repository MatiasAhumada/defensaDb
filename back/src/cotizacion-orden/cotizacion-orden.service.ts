import { Injectable } from '@nestjs/common';
import { CreateCotizacionOrdenDto } from './dto/create-cotizacion-orden.dto';
import { UpdateCotizacionOrdenDto } from './dto/update-cotizacion-orden.dto';

@Injectable()
export class CotizacionOrdenService {
  create(createCotizacionOrdenDto: CreateCotizacionOrdenDto) {
    return 'This action adds a new cotizacionOrden';
  }

  findAll() {
    return `This action returns all cotizacionOrden`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cotizacionOrden`;
  }

  update(id: number, updateCotizacionOrdenDto: UpdateCotizacionOrdenDto) {
    return `This action updates a #${id} cotizacionOrden`;
  }

  remove(id: number) {
    return `This action removes a #${id} cotizacionOrden`;
  }
}
