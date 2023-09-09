import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class LocalizationService {
  language : string = 'en';
  
  constructor(private translate: TranslateService) {}

  switchLanguage() {
    if ( this.language = 'en' ){
      this.language = 'ar'
    }else{
      this.language = 'en'
    }
    this.translate.use(this.language);
    
  }

}
