import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('songs') // 'songs' is the path prefix 
export class SongsController{
    @Post()
    create(){
        return "create a new song endoints";
    }

    @Get()
    findAll(){
        return "Find all the songs";
    }

    @Get(':id')
    findOne(){
        return "fetch song based on id";
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