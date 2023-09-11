import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CatalogueComponent } from './catalogue.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TmdbService } from './tmdb.service';

import { By } from '@angular/platform-browser';

describe('CatalogueComponent', () => {
  let component: CatalogueComponent;
  let fixture: ComponentFixture<CatalogueComponent>;
  let tmdbService: TmdbService;

  const testMovies = [
    { id: 1, title: 'Movie 1', overview: 'Overview 1' },
    { id: 2, title: 'Movie 2', overview: 'Overview 2' },
  ];

  beforeEach(() => {
    const mock = {
      getTopRatedMovies: jasmine.createSpy('getTopRatedMovies').and.returnValue(Promise.resolve({results:testMovies}))
    }
    TestBed.configureTestingModule({
      declarations: [CatalogueComponent],
      imports: [HttpClientModule, MatProgressSpinnerModule],
      providers: [
        {
          provide: TmdbService,
          useValue: mock,
        },
      ],
    });
    fixture = TestBed.createComponent(CatalogueComponent);
    component = fixture.debugElement.componentInstance;
    tmdbService = TestBed.inject(TmdbService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize movies correctly', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(component.movies).toEqual(testMovies);
    })
    
  }));

  it('should load movies into the DOM', () => {
    fixture.detectChanges(); 
    const movieElements = fixture.debugElement.queryAll(By.css('.movie-item'));
    fixture.whenStable().then(()=>{
      expect(movieElements.length).toBe(testMovies.length);
      })
    
    });
  
  });

  

