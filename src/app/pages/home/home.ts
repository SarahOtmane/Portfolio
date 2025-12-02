import { Component } from '@angular/core';
import { SectionProjet } from '../../components/section-projet/section-projet';
import { SectionAlternance } from '../../components/section-alternance/section-alternance';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SectionProjet, SectionAlternance],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
