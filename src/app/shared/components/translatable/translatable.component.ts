import {Component, OnInit} from '@angular/core';
import {DestroyableComponent} from '../destroyable/destroyable.component';
import {castToLanguage, Language} from '../../models/translation.model';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {takeUntil} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  template: ''
})
export class TranslatableComponent
  extends DestroyableComponent
  implements OnInit {
  public language?: Language;

  constructor(
    protected translateService?: TranslateService
  ) {
    super();
  }

  public ngOnInit(): void {
    this.initTranslations();
  }

  protected initTranslations(): void {
    if (this.translateService) {
      this.setLanguage();
      this.setTranslationMaps();
      this.onLanguageChange()
        .pipe(
          takeUntil(this.destroyed$)
        )
        .subscribe(
          (event: LangChangeEvent) => {
            this.setLanguage(event.lang);
            this.languageChangeCallback();
          }
        );
    }
  }

  protected onLanguageChange(): Observable<LangChangeEvent> {
    return this.translateService.onLangChange;
  }

  protected setLanguage(language?: Language | string): void {
    if (this.translateService) {
      this.language = castToLanguage(
        language
        || this.translateService.currentLang
        || this.translateService.getDefaultLang()
      );
    }
  }

  protected setTranslationMaps(): void {}

  protected languageChangeCallback(): void {}
}
