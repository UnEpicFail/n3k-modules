import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationContractDocumentComponent } from './education-contract-document.component';

describe('DocumentComponent', () => {
  let component: EducationContractDocumentComponent;
  let fixture: ComponentFixture<EducationContractDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationContractDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationContractDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
