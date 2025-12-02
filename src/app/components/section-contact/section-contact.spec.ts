import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContact } from './section-contact';

describe('SectionContact', () => {
  let component: SectionContact;
  let fixture: ComponentFixture<SectionContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
