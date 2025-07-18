import { Injectable } from '@nestjs/common';
import { CreateFacturasCompraDto } from './dto/create-facturas-compra.dto';
import { UpdateFacturasCompraDto } from './dto/update-facturas-compra.dto';

@Injectable()
export class FacturasComprasService {
  create(createFacturasCompraDto: CreateFacturasCompraDto) {
    return 'This action adds a new facturasCompra';
  }

  findAll() {
    return `This action returns all facturasCompras`;
  }

  findOne(id: number) {
    return `This action returns a #${id} facturasCompra`;
  }

  update(id: number, updateFacturasCompraDto: UpdateFacturasCompraDto) {
    return `This action updates a #${id} facturasCompra`;
  }

  remove(id: number) {
    return `This action removes a #${id} facturasCompra`;
  }
}
