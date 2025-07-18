import { PartialType } from '@nestjs/mapped-types';
import { CreateAccidentesLaboraleDto } from './create-accidentes-laborale.dto';

export class UpdateAccidentesLaboraleDto extends PartialType(CreateAccidentesLaboraleDto) {}
