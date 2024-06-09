import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDialogSandyqComponent } from './open-dialog-sandyq.component';

describe('OpenDialogSandyqComponent', () => {
  let component: OpenDialogSandyqComponent;
  let fixture: ComponentFixture<OpenDialogSandyqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenDialogSandyqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenDialogSandyqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
