import { Module } from '@nestjs/common';
import { GrupoFamiliaresService } from './grupo-familiares.service';
import { GrupoFamiliaresController } from './grupo-familiares.controller';

@Module({
  controllers: [GrupoFamiliaresController],
  providers: [GrupoFamiliaresService],
})
export class GrupoFamiliaresModule {}
