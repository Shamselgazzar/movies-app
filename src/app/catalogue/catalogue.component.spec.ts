import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueComponent } from './catalogue.component';

describe('CatalogueComponent', () => {
  let component: CatalogueComponent;
  let fixture: ComponentFixture<CatalogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogueComponent]
    });
    fixture = TestBed.createComponent(CatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { CatalogueComponent } from './catalogue.component';
// import { TmdbService } from './tmdb.service'; // Import your movie service or mock data service
// import { of } from 'rxjs';

// describe('CatalogueComponent', () => {
//   let component: CatalogueComponent;
//   let fixture: ComponentFixture<CatalogueComponent>;
//   let tmdbService: TmdbService; // Your movie service or mock data service

//   // Mock movie data for testing
//   const mockMovies = [
//     { id: 1, title: 'Movie 1', overview: 'Overview 1' },
//     { id: 2, title: 'Movie 2', overview: 'Overview 2' },
//   ];

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [CatalogueComponent],
//       providers: [
//         {
//           provide: TmdbService, // Provide your movie service or mock data service
//           useValue: {
//             getPopularMovies: () => of(mockMovies), // Mock the getPopularMovies method
//           },
//         },
//       ],
//     });
//     fixture = TestBed.createComponent(CatalogueComponent);
//     component = fixture.componentInstance;
//     tmdbService = TestBed.inject(TmdbService); // Inject the movie service

//     fixture.detectChanges(); // Trigger change detection
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should initialize movies correctly', () => {
//     expect(component.movies).toEqual(mockMovies); // Check if movies are initialized correctly
//   });

//   it('should render movies in the DOM', () => {
//     fixture.detectChanges(); // Trigger change detection
//     const movieElements = fixture.nativeElement.querySelectorAll('.card-title');
//     expect(movieElements.length).toBe(mockMovies.length); // Check if the correct number of movies are rendered

//     // Check if movie titles are rendered correctly
//     movieElements.forEach((movieElement: { textContent: any}, index: number) => {
//       expect(movieElement.textContent).toContain(mockMovies[index].title);
//     });
//   });
// });
