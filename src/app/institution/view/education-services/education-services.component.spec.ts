import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalServicesComponent } from './educational-services.component';

describe('EducationalServicesComponent', () => {
  let component: EducationalServicesComponent;
  let fixture: ComponentFixture<EducationalServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationalServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
