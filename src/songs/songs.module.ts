import { Module } from "@nestjs/common";
import { SongsController } from "./songs.controller";
import { SongsService } from "./songs.service";

@Module({
    imports: [],
    providers: [SongsService],
    controllers: [SongsController],
    exports: []
})

export class SongsModule{}