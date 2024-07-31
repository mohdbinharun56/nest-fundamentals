import { Body, Controller, Delete, Get, Inject, Post, Put } from "@nestjs/common";
import { SongsService } from "./songs.service";

@Controller('songs') // 'songs' is the path prefix 
export class SongsController{
    constructor(private songsService: SongsService){} // dependency injection of SongService. SongController depends on the SpongService.
    @Post()
    create(){
        const song = [
            {name: "Animal", artists: "Martin"},
            {name: "Adat", artists:"Atif Aaslam"}
        ];
        return this.songsService.create(song);
        // return "create a new song endoints";
    }

    @Get()
    findAll(){
        return this.songsService.findAll();
        //return "Find all the songs";
    }

    @Get(':id')
    findOne(){
        return `fetch song based on id `;
    }

    @Put(':id')
    update(){
        return "update an existing song based on id";
    }

    @Delete(':id')
    delete(){
        return "Delete specific song based on the id";
    }
}