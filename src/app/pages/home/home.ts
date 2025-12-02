import { Component } from '@angular/core';
import { SectionProjet } from '../../components/section-projet/section-projet';
import { SectionAlternance } from '../../components/section-alternance/section-alternance';
import { SectionContact } from '../../components/section-contact/section-contact';
import { SectionSkills } from '../../components/section-skills/section-skills';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SectionProjet, SectionAlternance, SectionContact, SectionSkills],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
