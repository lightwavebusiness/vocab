import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  baseUrl = ''; 

  words = []

  constructor(private http: HttpClient) {}

  // getWord(offset = 0) {
  //   return this.http
  //     .get(`${this.baseUrl}/word?offset=${offset}&limit=25`)
  //     .pipe(
  //       map(result => {
  //         return result['results'];
  //       }),
  //       map(word => {
  //         return word.map((word, index) => {
  //           word.wordIndex = offset + index + 1;
  //           return word;
  //         });
  //       })
  //     )}


  getWords() {
    console.log("Current Words: ", this.words)


    return this.words.map(
      word => { console.log(word); 
        return word; }
    )
  }


  addWord(word_, description_, sentence_)
  {
    console.log("Dictionary Service - Add Word: ", word_, description_, sentence_)

    this.words.push({word: word_, description: description_, sentence: sentence_})

    console.log(this.words)
  }




}