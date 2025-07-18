import { Module } from '@nestjs/common';
import { DetalleRemitosClientesService } from './detalle-remitos-clientes.service';
import { DetalleRemitosClientesController } from './detalle-remitos-clientes.controller';

@Module({
  controllers: [DetalleRemitosClientesController],
  providers: [DetalleRemitosClientesService],
})
export class DetalleRemitosClientesModule {}
