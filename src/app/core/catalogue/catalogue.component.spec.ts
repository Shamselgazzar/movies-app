// import { ComponentFixture, TestBed, fakeAsync, tick, flushMicrotasks } from '@angular/core/testing';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { HttpClientModule } from '@angular/common/http';
// import { RouterTestingModule } from '@angular/router/testing';
// import { By } from '@angular/platform-browser';

// import { CatalogueComponent } from './catalogue.component';
// import { TmdbService } from '../../services/tmdb.service';
// import { ActivatedRoute } from '@angular/router';


// describe('CatalogueComponent', () => {
//   let component: CatalogueComponent;
//   let fixture: ComponentFixture<CatalogueComponent>;
//   let tmdbService: TmdbService;

//   // const testMovies = [
//   //   { id: 1, title: 'Movie 1', overview: 'Overview 1' },
//   //   { id: 2, title: 'Movie 2', overview: 'Overview 2' },
//   // ];

//   beforeEach(() => {
//     const mock = spyOn(tmdbService, 'getMovies').and.returnValue(Promise.resolve({results:testMovies}));
//     TestBed.configureTestingModule({
//       declarations: [CatalogueComponent],
//       imports: [HttpClientModule, MatProgressSpinnerModule, RouterTestingModule ],
//       providers: [
//         ActivatedRoute,
//         {
//           provide: TmdbService,
//           useValue: mock,
//         },
//       ],
//     });
//     fixture = TestBed.createComponent(CatalogueComponent);
//     component = fixture.debugElement.componentInstance;
//     tmdbService = TestBed.inject(TmdbService);
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should initialize movies correctly', () => {
    
//     fixture.whenStable().then(()=>{
//       expect(component.movies).toEqual(testMovies);
//     })
    
//   });

//   it('should load movies into the DOM', () => {
//     fixture.detectChanges(); 
//     const movieElements = fixture.debugElement.queryAll(By.css('.movie-item'));
//     fixture.whenStable().then(()=>{
//       expect(movieElements.length).toBe(testMovies.length);
//       })
    
//     });
  
//   });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { CatalogueComponent } from './catalogue.component';
import { TmdbService } from '../../services/tmdb.service';
import { ActivatedRoute } from '@angular/router';


describe('CatalogueComponent', () => {
  let component: CatalogueComponent;
  let fixture: ComponentFixture<CatalogueComponent>;
  let tmdbService: TmdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogueComponent],
      imports: [HttpClientModule, MatProgressSpinnerModule, RouterTestingModule ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            // mock value for ActivatedRoute
            snapshot: {
              paramMap: {
                get: () => 'popular'
              }
            }
          }
        },
        TmdbService,
      ],
    });
    fixture = TestBed.createComponent(CatalogueComponent);
    component = fixture.debugElement.componentInstance;
    tmdbService = TestBed.inject(TmdbService);
    // use spyOn to mock the getMovies method and call through
    spyOn(tmdbService, 'getMovies').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize movies correctly', (done) => {
    // call fixture.detectChanges() only once
    fixture.detectChanges();
    // use expect statements directly after detectChanges()
    expect(component.movies).toEqual([]);
    // use subscribe to wait for the observable to emit
    tmdbService.getMovies().subscribe(() => {
      expect(component.movies.length).toBeGreaterThan(0);
      // call done when the test is finished
      done();
    });
  });

  it('should load movies into the DOM', (done) => {
    // call fixture.detectChanges() only once
    fixture.detectChanges(); 
    // use subscribe to wait for the observable to emit
    tmdbService.getMovies().subscribe(() => {
      // use detectChanges again to update the view
      fixture.detectChanges();
      // use expect statements directly after detectChanges()
      const movieElements = fixture.debugElement.queryAll(By.css('.movie-item'));
      expect(movieElements.length).toBe(component.movies.length);
      // call done when the test is finished
      done();
    });
    
  });
  
});
