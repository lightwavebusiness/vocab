import { Component, OnInit } from '@angular/core';
import { WordService } from '../services/dictonary.service';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.page.html',
  styleUrls: ['./flash.page.scss'],
})
export class FlashPage implements OnInit {

  constructor(
    private wordService: WordService
  ) { }

  ngOnInit() {
  }
  

}
