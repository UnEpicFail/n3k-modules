import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { N3kSelectComponent } from './n3k-select.component';

describe('N3kSelectComponent', () => {
  let component: N3kSelectComponent;
  let fixture: ComponentFixture<N3kSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ N3kSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(N3kSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
