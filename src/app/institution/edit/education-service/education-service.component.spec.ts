import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationServiceComponent } from './education-service.component';

describe('EducationServiceComponent', () => {
  let component: EducationServiceComponent;
  let fixture: ComponentFixture<EducationServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
