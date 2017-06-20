import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAdministrationFormComponent } from './public-administration-form.component';

describe('PublicAdministrationFormComponent', () => {
  let component: PublicAdministrationFormComponent;
  let fixture: ComponentFixture<PublicAdministrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicAdministrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAdministrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
