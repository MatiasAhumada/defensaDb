import { Module } from '@nestjs/common';
import { TipoDepartamentosService } from './tipo-departamentos.service';
import { TipoDepartamentosController } from './tipo-departamentos.controller';

@Module({
  controllers: [TipoDepartamentosController],
  providers: [TipoDepartamentosService],
})
export class TipoDepartamentosModule {}
