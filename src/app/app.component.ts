import { Component } from '@angular/core';

import { PsPokeTilesComponent } from './ps-poke-tiles/ps-poke-tiles.component';
import { PsPokeSortComponent } from './ps-poke-sort/ps-poke-sort.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon Store';
}
