import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Lista } from './lista/entities/lista.entity';
import { ListaModule } from './lista/lista.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port:3306,
      password: 'root',
      username: 'root',
      database: 'db_lista',
      entities: [Lista],
      synchronize: true,
    }),
    ListaModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
