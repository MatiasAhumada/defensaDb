import { Module } from '@nestjs/common';
import { RevisionesMedicasService } from './revisiones-medicas.service';
import { RevisionesMedicasController } from './revisiones-medicas.controller';

@Module({
  controllers: [RevisionesMedicasController],
  providers: [RevisionesMedicasService],
})
export class RevisionesMedicasModule {}
