import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Lista } from "../entities/lista.entity";
import { ListaService } from "../services/lista.service";


@Controller('/lista')
export class ListaController{
    constructor(
        private readonly listaService: ListaService
    ){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findall():Promise<Lista[]>{
    return this.listaService.findall()
    }
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Lista>{
    return this.listaService.FindById(id)
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body()lista: Lista): Promise<Lista>{
    return this.listaService.create(lista)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body()lista: Lista): Promise<Lista>{
     return this.listaService.update(lista)   
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.listaService.delete(id)
    }


}