import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicServicesComponent } from './electronic-services.component';

describe('ElectronicServicesComponent', () => {
  let component: ElectronicServicesComponent;
  let fixture: ComponentFixture<ElectronicServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
