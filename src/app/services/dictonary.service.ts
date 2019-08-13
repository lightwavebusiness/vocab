import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  baseUrl = ''; 

  words = [];

  constructor(private http: HttpClient, private storage: Storage) {
    //get words from local storage
    this.getStorage();
  }


  async getStorage() {
    this.words = await this.storage.get("Word");
    if(this.words === null) this.words = []
   // console.log(this.words)
  }

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
    return this.words.map(
      word => { console.log(word); 
        return word; }
    )
  }


  addWord(word_, description_, sentence_)
  {
    console.log("Dictionary Service - Add Word: ", word_, description_, sentence_)

    if(this.words.filter((word) => {word.word === word_})) {
      return false;
    }


    this.words.push({word: word_, description: description_, sentence: sentence_})

    this.storage.set("Word", this.words)
    return true;
    //console.log(this.words)
  }

  async getWord(findWord: string) {
    await this.getStorage()
    let word = this.words.filter((word) => { console.log(word.word); return (word.word === findWord)})[0];
    return word
  }



}