import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorMenuComponent } from './anchor-menu.component';

describe('AnchorMenuComponent', () => {
  let component: AnchorMenuComponent;
  let fixture: ComponentFixture<AnchorMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnchorMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
