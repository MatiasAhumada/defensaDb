import { Module } from '@nestjs/common';
import { GrupoFamiliaresPersonasService } from './grupo-familiares-personas.service';
import { GrupoFamiliaresPersonasController } from './grupo-familiares-personas.controller';

@Module({
  controllers: [GrupoFamiliaresPersonasController],
  providers: [GrupoFamiliaresPersonasService],
})
export class GrupoFamiliaresPersonasModule {}
