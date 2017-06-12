import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonnerComponent } from './clonner.component';

describe('ClonnerComponent', () => {
  let component: ClonnerComponent;
  let fixture: ComponentFixture<ClonnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClonnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClonnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
