/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { FgappsModule } from './fgapps/fgapps.module';
import { EtudiantsModule } from './etudiants/etudiants.module';
import { MatieresModule } from './matieres/matieres.module';
import { PiecesJustificativesModule } from './pieces-justificatives/pieces-justificatives.module';
import { ProfesseursModule } from './professeurs/professeurs.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ParcoursModule } from './parcours/parcours.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService : ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [join(process.cwd(),'dist/**/*.entity.js')],
        //do not use synchronize : true in real project
        synchronize : true,
      })
    }),
    FgappsModule,
    EtudiantsModule,
    MatieresModule,
    PiecesJustificativesModule,
    ProfesseursModule,
    NotificationsModule,
    ParcoursModule,
    RolesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
