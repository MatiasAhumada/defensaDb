import { PartialType } from '@nestjs/mapped-types';
import { CreateCodigosPostaleDto } from './create-codigos-postale.dto';

export class UpdateCodigosPostaleDto extends PartialType(CreateCodigosPostaleDto) {}
