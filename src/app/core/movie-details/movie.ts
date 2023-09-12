export class Movie {

    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: Collection | null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    
    constructor(data: any) {
        this.adult = data.adult;
        this.backdrop_path = data.backdrop_path;
        this.belongs_to_collection = data.belongs_to_collection;
        this.budget = data.budget;
        this.genres = data.genres;
        this.homepage = data.homepage;
        this.id = data.id;
        this.imdb_id = data.imdb_id;
        this.original_language = data.original_language;
        this.original_title = data.original_title;
        this.overview = data.overview;
        this.popularity = data.popularity;
        this.poster_path = data.poster_path;
        this.production_companies = data.production_companies;
        this.production_countries = data.production_countries;
        this.release_date = data.release_date;
        this.revenue = data.revenue;
        this.runtime = data.runtime;
        this.spoken_languages = data.spoken_languages;
        this.status = data.status;
        this.tagline = data.tagline;
        this.title = data.title;
        this.video = data.video;
        this.vote_average = data.vote_average;
        this.vote_count = data.vote_count;
    }
}
    
    interface Collection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
    }
    
    interface Genre {
    id: number;
    name: string;
    }
    
    interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
    }
    
    interface ProductionCountry {
    iso_3166_1: string;
    name: string;
    }
    
    interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
    }
    


