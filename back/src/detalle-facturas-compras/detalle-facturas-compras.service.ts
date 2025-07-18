import { Injectable } from '@nestjs/common';
import { CreateDetalleFacturasCompraDto } from './dto/create-detalle-facturas-compra.dto';
import { UpdateDetalleFacturasCompraDto } from './dto/update-detalle-facturas-compra.dto';

@Injectable()
export class DetalleFacturasComprasService {
  create(createDetalleFacturasCompraDto: CreateDetalleFacturasCompraDto) {
    return 'This action adds a new detalleFacturasCompra';
  }

  findAll() {
    return `This action returns all detalleFacturasCompras`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalleFacturasCompra`;
  }

  update(id: number, updateDetalleFacturasCompraDto: UpdateDetalleFacturasCompraDto) {
    return `This action updates a #${id} detalleFacturasCompra`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalleFacturasCompra`;
  }
}
