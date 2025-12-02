import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSkills } from './section-skills';

describe('SectionSkills', () => {
  let component: SectionSkills;
  let fixture: ComponentFixture<SectionSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSkills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
