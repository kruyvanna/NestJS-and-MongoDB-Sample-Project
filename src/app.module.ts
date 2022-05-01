import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
