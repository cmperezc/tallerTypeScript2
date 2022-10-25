export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    imagen: string;
  
    constructor(id: number, name: string,channel: string,seasons: number,description: string,link: string,imagen: string) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.link = link;
      this.imagen = imagen;
    }
  }