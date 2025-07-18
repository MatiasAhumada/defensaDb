import { Module } from '@nestjs/common';
import { CodigosPostalesService } from './codigos-postales.service';
import { CodigosPostalesController } from './codigos-postales.controller';

@Module({
  controllers: [CodigosPostalesController],
  providers: [CodigosPostalesService],
})
export class CodigosPostalesModule {}
