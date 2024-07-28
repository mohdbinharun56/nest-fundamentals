import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';

// Module serves the foundational building block of a nest.js application.
@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
