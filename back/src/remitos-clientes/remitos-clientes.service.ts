import { Injectable } from '@nestjs/common';
import { CreateRemitosClienteDto } from './dto/create-remitos-cliente.dto';
import { UpdateRemitosClienteDto } from './dto/update-remitos-cliente.dto';

@Injectable()
export class RemitosClientesService {
  create(createRemitosClienteDto: CreateRemitosClienteDto) {
    return 'This action adds a new remitosCliente';
  }

  findAll() {
    return `This action returns all remitosClientes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} remitosCliente`;
  }

  update(id: number, updateRemitosClienteDto: UpdateRemitosClienteDto) {
    return `This action updates a #${id} remitosCliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} remitosCliente`;
  }
}
