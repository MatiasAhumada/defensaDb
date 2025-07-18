import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Sucursal } from './sucursale.entity';
import { TipoDepartamento } from './tipo-departamento.entity';

@Entity('departamentos')
export class Departamento {
  @PrimaryGeneratedColumn({ name: 'departamento_id' })
  departamentoId: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @ManyToOne(() => Sucursal, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'sucursal_id' })
  sucursal: Sucursal;

  @ManyToOne(() => TipoDepartamento, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'tipo_departamento_id' })
  tipoDepartamento: TipoDepartamento;
}

