import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from '../pokemon';

@Component({
  selector: 'ps-poke-tile',
  templateUrl: './ps-poke-tile.component.html',
  styleUrls: ['./ps-poke-tile.component.scss']
})
export class PsPokeTileComponent {
  @Input() pokemon: Pokemon;
}
