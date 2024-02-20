import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidatorHintComponent } from './form-validator-hint.component';

describe('FormValidatorHintComponent', () => {
  let component: FormValidatorHintComponent;
  let fixture: ComponentFixture<FormValidatorHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValidatorHintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormValidatorHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
