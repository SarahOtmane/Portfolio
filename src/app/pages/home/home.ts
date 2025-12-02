import { Component } from '@angular/core';
import { SectionProjet } from '../../components/section-projet/section-projet';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SectionProjet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
