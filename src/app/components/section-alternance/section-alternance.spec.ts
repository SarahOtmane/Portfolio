import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAlternance } from './section-alternance';

describe('SectionAlternance', () => {
  let component: SectionAlternance;
  let fixture: ComponentFixture<SectionAlternance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionAlternance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionAlternance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
