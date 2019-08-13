import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { WordService } from '../services/dictonary.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  word: any;
 
  slideOpts = {
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    }
  };
  storage: any;
 
  constructor(private wordService: WordService, private route: ActivatedRoute) { }

 
   ngOnInit() {
    console.log("ng-word")
    let word = this.route.snapshot.paramMap.get('Word');
    this.word = this.wordService.getWord(word);
    console.log(this.word);

  }
  
}
