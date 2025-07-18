import { config as dotenvConfig } from 'dotenv';
import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Pais } from 'src/entities/paises.entity';
import { Provincia } from 'src/entities/provincias.entity';
import { Ciudad } from 'src/entities/ciudades.entity';
import { CodigoPostal } from 'src/entities/codigos-postales.entity';
import { Direccion } from 'src/entities/direcciones.entity';
import { TipoDepartamento } from 'src/entities/tipo-departamento.entity';
import { Sucursal } from 'src/entities/sucursale.entity';
import { Departamento } from 'src/entities/departamento.entity';
import { TipoEmpleado } from 'src/entities/tipo-empleado.entity';

dotenvConfig({ path: '.env' });

const db_config: DataSourceOptions = {
  type: 'mysql', // CAMBIADO de postgres a mysql
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false, // mantener false en producción
  dropSchema: false,
  logging: false,
  entities: [
    Pais,
    Provincia,
    Ciudad,
    CodigoPostal,
    Direccion,
    TipoDepartamento,
    Sucursal,
    Departamento,
    TipoEmpleado,
    //Empleados,
    //Clientes,
    //Proveedores,
    //Rubros,
    //CategoriaProductos,
    //Productos,
    //ProductoProveedor,
    //Rankings,
    //Almacenes,
    //Stocks,
    //OrdenCompras,
    //DetalleOrdenCompras,
    //Remitos,
    //DetalleRemitos,
    //FacturasCompras,
    //DetalleFacturasCompras,
    //Cotizaciones,
    //DetalleCotizaciones,
    //CotizacionOrden,
    //Facturas,
    //DetalleFacturas,
    //RemitosClientes,
    //DetalleRemitosClientes,
    //Recibos,
    //DetalleRecibos,
    //MediosPagos,
    //Pagos,
    //Personas,
    //GrupoFamiliares,
    //GrupoFamiliaresPersonas,
    //EmpleadoDepartamentoHistorial,
    //Cursos,
    //EmpleadoCurso,
    //Diagnosticos,
    //AccidentesLaborales,
    //Tratamientos,
    //RevisionesMedicas,
    //ParametrosMedicos,
    //Conceptos,
    //LiquidacionesSueldo,
    //DetallesLiquidaciones
  ],
  migrationsRun: true,
  migrations: ['dist/migrations/*.{js,ts}'],
};

export default registerAs('typeorm', () => db_config);
export const connectionSource = new DataSource(db_config);
