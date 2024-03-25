import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { customer } from './entity/customer.entity';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { uploadedFilesModule } from './uploadFiles/uploadFile.module';
import { localfile } from './uploadFiles/localFile.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'TMDT',
      entities: [customer, localfile],
      synchronize: false,
    }),
    CustomerModule,
    uploadedFilesModule,
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
