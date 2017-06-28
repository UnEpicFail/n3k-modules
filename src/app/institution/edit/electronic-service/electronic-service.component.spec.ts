import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicServiceComponent } from './electronic-service.component';

describe('ElectronicServiceComponent', () => {
  let component: ElectronicServiceComponent;
  let fixture: ComponentFixture<ElectronicServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
