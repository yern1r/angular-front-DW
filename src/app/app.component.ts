import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {first, Subject, takeUntil, timer} from 'rxjs';
import { DestroyableComponent } from './shared/components/destroyable/destroyable.component';
import { AuthService } from './core/auth/sign-up-modal/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  extends DestroyableComponent implements OnInit, OnDestroy{
  public moduleIsLoading!: boolean;
  public pageIsPreloading!: boolean;
  public pageIsLoaded!: boolean;
  private readonly userIdleSub$: Subject<void>;
  private readonly pagePreloadingTime: number;
  private readonly userSessionDuration: number;
  private isPlatformBrowser?: boolean;
  private readonly maintenance: boolean;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID)
    private platformId: Object,
    private router: Router,
    private matDialog: MatDialog,
    public authService: AuthService) 
    {
    // translate.setDefaultLang('en');
    // translate.use('en');
    super();
    this.userIdleSub$ = new Subject<void>();
    this.pagePreloadingTime = 2000;
    this.userSessionDuration = 900;
    this.maintenance = false;
    this.setPageLoadFlag(false);
    this.setPagePreloadFlag(false);
    this.setModuleLoadFlag(false);
    this.authService = authService;
  }
  ngOnInit(): void {

  }

  private setPageLoadFlag(flag: boolean): void {
    this.pageIsLoaded = flag;
  }

  private setPagePreloadFlag(flag: boolean): void {
    this.pageIsPreloading = flag;
  }

  private setModuleLoadFlag(flag: boolean): void {
    this.moduleIsLoading = flag;
  }
  private setPagePreloadCountdown(): void {
    this.setPagePreloadFlag(true);
    timer(this.pagePreloadingTime)
      .pipe(
        first(),
        takeUntil(this.destroyed$)
      )
      .subscribe(
        () => {
          this.setPagePreloadFlag(false);
        }
      );
  }
  get authServicee(): AuthService {
    return this.authService;
  }
}
