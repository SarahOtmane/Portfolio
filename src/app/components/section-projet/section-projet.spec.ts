import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjet } from './section-projet';

describe('SectionProjet', () => {
  let component: SectionProjet;
  let fixture: ComponentFixture<SectionProjet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionProjet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionProjet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
