import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Direccion } from './direcciones.entity';

@Entity('sucursales')
export class Sucursal {
  @PrimaryGeneratedColumn({ name: 'sucursal_id' })
  sucursal_id: number;

  @Column({ type: 'varchar', length: 150, nullable: false })
  nombre: string;

  @ManyToOne(() => Direccion, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'direccion_id' })
  direccion: Direccion;
}

