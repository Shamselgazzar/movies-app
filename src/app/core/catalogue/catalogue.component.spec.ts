import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { CatalogueComponent } from './catalogue.component';
import { TmdbService } from '../../services/tmdb.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';


describe('CatalogueComponent', () => {
  let component: CatalogueComponent;
  let fixture: ComponentFixture<CatalogueComponent>;
  let tmdbService: TmdbService;


  const mock = {
    results:[
      {
        id: 1,
        title: "Spirited Away",
        overview: "This is a mock movie overview 1.",
        release_date: "2001-07-20",
        poster_path: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      },
      {
        id: 2,
        title: "Spirited Away 2",
        overview: "This is a mock movie overview 2.",
        release_date: "2023-09-12",
        poster_path: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      },
    ],
    length: 1,
  };
  

  const activatedRouteStub = {
    queryParams: of({ category: 'topRated' })
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogueComponent],
      imports: [HttpClientModule, MatProgressSpinnerModule, RouterTestingModule ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub
          
        },
        {
          provide : TmdbService,
          // useValue : 'mock'
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(CatalogueComponent);
    component = fixture.debugElement.componentInstance;
    tmdbService = TestBed.inject(TmdbService);
    spyOn(tmdbService, 'getMovies').and.returnValue(of(mock));
    component.isLoading = false;
  });

  afterEach(() => {
    activatedRouteStub.queryParams = of({ category: 'topRated' });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it(`should have as title 'catalogue'`, (() => {
    expect(component.title).toEqual('catalogue');
  }));


  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    
    expect(compiled.querySelector('h6').textContent).toContain('Welcome');
 });

 
 it('should set filter and fetch movies when queryParams change', () => {
    const queryParams = { category: 'testCategory' };
    activatedRouteStub.queryParams = of(queryParams);

    console.log('Before ngOnInit');
    expect(component.filter).toBe(undefined);
    
    component.ngOnInit();
    console.log('After ngOnInit');
    expect(component.filter).toBe('testCategory');
    
  });



  it('should initialize movies correctly', (() => {
    component.ngOnInit();
    expect(component.movies.length).toEqual(2);

  }));

  
  it('should load movies into the DOM', (() => {

    fixture.detectChanges();
    const movieElements = fixture.debugElement.queryAll(By.css('.card'));

    console.log(component.filter);
    console.log(component.movies);
    expect(movieElements.length).toBe(2);

  }));
  
});
