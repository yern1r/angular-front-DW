import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDialogBesikComponent } from './open-dialog-besik.component';

describe('OpenDialogBesikComponent', () => {
  let component: OpenDialogBesikComponent;
  let fixture: ComponentFixture<OpenDialogBesikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenDialogBesikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenDialogBesikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
