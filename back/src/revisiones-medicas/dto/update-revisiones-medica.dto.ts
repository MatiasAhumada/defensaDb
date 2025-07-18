import { PartialType } from '@nestjs/mapped-types';
import { CreateRevisionesMedicaDto } from './create-revisiones-medica.dto';

export class UpdateRevisionesMedicaDto extends PartialType(CreateRevisionesMedicaDto) {}
