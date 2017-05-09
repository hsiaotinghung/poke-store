import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { PsPokeTileComponent } from '../ps-poke-tile/ps-poke-tile.component';

@Component({
  selector: 'ps-poke-tiles',
  templateUrl: './ps-poke-tiles.component.html',
  styleUrls: ['./ps-poke-tiles.component.css']
})
export class PsPokeTilesComponent implements OnDestroy{
  pokemons: Pokemon[];
  subscription: Subscription;
  
  constructor(private pokemonService: PokemonService) {
    this.subscription = this.pokemonService.getSortProperty().subscribe(data => {
      console.log('receive :'+ data);
      this.pokemons = this.pokemonService.getSortedPokemons(data);
    });    
  }

  getPokemons(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }

  ngOnInit() {
    this.getPokemons();
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
