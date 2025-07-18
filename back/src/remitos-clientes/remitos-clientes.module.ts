import { Module } from '@nestjs/common';
import { RemitosClientesService } from './remitos-clientes.service';
import { RemitosClientesController } from './remitos-clientes.controller';

@Module({
  controllers: [RemitosClientesController],
  providers: [RemitosClientesService],
})
export class RemitosClientesModule {}
