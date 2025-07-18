import { Injectable } from '@nestjs/common';
import { CreateDetalleCotizacioneDto } from './dto/create-detalle-cotizacione.dto';
import { UpdateDetalleCotizacioneDto } from './dto/update-detalle-cotizacione.dto';

@Injectable()
export class DetalleCotizacionesService {
  create(createDetalleCotizacioneDto: CreateDetalleCotizacioneDto) {
    return 'This action adds a new detalleCotizacione';
  }

  findAll() {
    return `This action returns all detalleCotizaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalleCotizacione`;
  }

  update(id: number, updateDetalleCotizacioneDto: UpdateDetalleCotizacioneDto) {
    return `This action updates a #${id} detalleCotizacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalleCotizacione`;
  }
}
