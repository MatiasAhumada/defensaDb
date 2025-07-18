import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeOrmConfig from './config/configOrm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaisesModule } from './paises/paises.module';
import { ProvinciasModule } from './provincias/provincias.module';
import { CiudadesModule } from './ciudades/ciudades.module';
import { CodigosPostalesModule } from './codigos-postales/codigos-postales.module';
import { DireccionesModule } from './direcciones/direcciones.module';
import { TipoDepartamentosModule } from './tipo-departamentos/tipo-departamentos.module';
import { SucursalesModule } from './sucursales/sucursales.module';
import { DepartamentosModule } from './departamentos/departamentos.module';
import { TipoEmpleadosModule } from './tipo-empleados/tipo-empleados.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { ClientesModule } from './clientes/clientes.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { RubrosModule } from './rubros/rubros.module';
import { CategoriaProductosModule } from './categoria-productos/categoria-productos.module';
import { ProductosModule } from './productos/productos.module';
import { ProductoProveedorModule } from './producto-proveedor/producto-proveedor.module';
import { RankingsModule } from './rankings/rankings.module';
import { AlmacenesModule } from './almacenes/almacenes.module';
import { StocksModule } from './stocks/stocks.module';
import { OrdenComprasModule } from './orden-compras/orden-compras.module';
import { DetalleOrdenComprasModule } from './detalle-orden-compras/detalle-orden-compras.module';
import { RemitosModule } from './remitos/remitos.module';
import { DetalleRemitosModule } from './detalle-remitos/detalle-remitos.module';
import { FacturasComprasModule } from './facturas-compras/facturas-compras.module';
import { DetalleFacturasComprasModule } from './detalle-facturas-compras/detalle-facturas-compras.module';
import { CotizacionesModule } from './cotizaciones/cotizaciones.module';
import { DetalleCotizacionesModule } from './detalle-cotizaciones/detalle-cotizaciones.module';
import { CotizacionOrdenModule } from './cotizacion-orden/cotizacion-orden.module';
import { FacturasModule } from './facturas/facturas.module';
import { DetalleFacturasModule } from './detalle-facturas/detalle-facturas.module';
import { RemitosClientesModule } from './remitos-clientes/remitos-clientes.module';
import { DetalleRemitosClientesModule } from './detalle-remitos-clientes/detalle-remitos-clientes.module';
import { RecibosModule } from './recibos/recibos.module';
import { DetalleRecibosModule } from './detalle-recibos/detalle-recibos.module';
import { MediosPagosModule } from './medios-pagos/medios-pagos.module';
import { PagosModule } from './pagos/pagos.module';
import { PersonasModule } from './personas/personas.module';
import { GrupoFamiliaresModule } from './grupo-familiares/grupo-familiares.module';
import { GrupoFamiliaresPersonasModule } from './grupo-familiares-personas/grupo-familiares-personas.module';
import { EmpleadoDepartamentoHistorialModule } from './empleado-departamento-historial/empleado-departamento-historial.module';
import { CursosModule } from './cursos/cursos.module';
import { EmpleadoCursoModule } from './empleado-curso/empleado-curso.module';
import { DiagnosticosModule } from './diagnosticos/diagnosticos.module';
import { AccidentesLaboralesModule } from './accidentes-laborales/accidentes-laborales.module';
import { TratamientosModule } from './tratamientos/tratamientos.module';
import { RevisionesMedicasModule } from './revisiones-medicas/revisiones-medicas.module';
import { ParametrosMedicosModule } from './parametros-medicos/parametros-medicos.module';
import { ConceptosModule } from './conceptos/conceptos.module';
import { LiquidacionesSueldoModule } from './liquidaciones-sueldo/liquidaciones-sueldo.module';
import { DetallesLiquidacionesModule } from './detalles-liquidaciones/detalles-liquidaciones.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const config = configService.get('typeorm');
        return {
          ...config,
          namingStrategy:
            new (require('typeorm-naming-strategies').SnakeNamingStrategy)(),
        };
      },
    }),
    PaisesModule,
    ProvinciasModule,
    CiudadesModule,
    CodigosPostalesModule,
    DireccionesModule,
    TipoDepartamentosModule,
    SucursalesModule,
    DepartamentosModule,
    TipoEmpleadosModule,
    EmpleadosModule,
    ClientesModule,
    ProveedoresModule,
    RubrosModule,
    CategoriaProductosModule,
    ProductosModule,
    ProductoProveedorModule,
    RankingsModule,
    AlmacenesModule,
    StocksModule,
    OrdenComprasModule,
    DetalleOrdenComprasModule,
    RemitosModule,
    DetalleRemitosModule,
    FacturasComprasModule,
    DetalleFacturasComprasModule,
    CotizacionesModule,
    DetalleCotizacionesModule,
    CotizacionOrdenModule,
    FacturasModule,
    DetalleFacturasModule,
    RemitosClientesModule,
    DetalleRemitosClientesModule,
    RecibosModule,
    DetalleRecibosModule,
    MediosPagosModule,
    PagosModule,
    PersonasModule,
    GrupoFamiliaresModule,
    GrupoFamiliaresPersonasModule,
    EmpleadoDepartamentoHistorialModule,
    CursosModule,
    EmpleadoCursoModule,
    DiagnosticosModule,
    AccidentesLaboralesModule,
    TratamientosModule,
    RevisionesMedicasModule,
    ParametrosMedicosModule,
    ConceptosModule,
    LiquidacionesSueldoModule,
    DetallesLiquidacionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
