import { Injectable } from '@nestjs/common';
import { CreateDetalleRemitosClienteDto } from './dto/create-detalle-remitos-cliente.dto';
import { UpdateDetalleRemitosClienteDto } from './dto/update-detalle-remitos-cliente.dto';

@Injectable()
export class DetalleRemitosClientesService {
  create(createDetalleRemitosClienteDto: CreateDetalleRemitosClienteDto) {
    return 'This action adds a new detalleRemitosCliente';
  }

  findAll() {
    return `This action returns all detalleRemitosClientes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalleRemitosCliente`;
  }

  update(id: number, updateDetalleRemitosClienteDto: UpdateDetalleRemitosClienteDto) {
    return `This action updates a #${id} detalleRemitosCliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalleRemitosCliente`;
  }
}
