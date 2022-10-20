import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ListaController } from "./controllers/lista.controller";
import { Lista } from "./entities/lista.entity";
import { ListaService } from "./services/lista.service";


@Module({
imports: [TypeOrmModule.forFeature([Lista])],
providers: [ListaService],
controllers: [ListaController],
exports: [TypeOrmModule],


})
export class ListaModule{}