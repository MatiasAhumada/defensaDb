import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Ciudad } from './ciudades.entity';
import { Provincia } from './provincias.entity';
import { Pais } from './paises.entity';
import { CodigoPostal } from './codigos-postales.entity';

@Entity('direcciones')
export class Direccion {
  @PrimaryGeneratedColumn({ name: 'direccion_id' })
  direccionId: number;

  @Column({ name: 'calle', type: 'varchar', length: 100, nullable: false })
  calle: string;

  @Column({ name: 'numero', type: 'varchar', length: 10, nullable: false })
  numero: string;

  @Column({ name: 'piso', type: 'varchar', length: 10, nullable: true })
  piso?: string;

  @Column({ name: 'depto', type: 'varchar', length: 10, nullable: true })
  depto?: string;

  @ManyToOne(() => Ciudad, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'ciudad_id' })
  ciudad: Ciudad;

  @ManyToOne(() => Provincia, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'provincia_id' })
  provincia: Provincia;

  @ManyToOne(() => Pais, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'pais_id' })
  pais: Pais;

  @ManyToOne(() => CodigoPostal, { nullable: true, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'codigo_postal_id' })
  codigoPostal?: CodigoPostal;
}

