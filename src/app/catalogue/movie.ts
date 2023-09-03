export class Movie {
    constructor(
        public movieName:string,
        public author: string,
        public releaseDate: Date,
        public details: string,
        public imageLink: string
    )
    {
        this.imageLink = 'https://image.tmdb.org/t/p/w500/'+this.imageLink;
    }

}
