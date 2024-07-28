import { Injectable } from "@nestjs/common";

@Injectable()
export class SongsService{
    // local DB
    // local array
    private readonly songs= []; 

    create(song){
        // save the song in the DB
        this.songs.push(song);
        return this.songs;
    }

    findAll(){
        // fetch the song from the DB
        return this.songs;
    }
}