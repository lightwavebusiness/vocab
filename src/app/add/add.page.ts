import { Component, OnInit } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { WordService } from '../services/dictonary.service';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  public addForm: FormGroup

  constructor(
  private storage: IonicStorageModule,
  private wordService: WordService,
  private formBuilder: FormBuilder,
  private router: Router
  ) { 
    this.addForm = formBuilder.group({
    word: ['', Validators.compose([Validators.required])],
    description: ['', Validators.compose([Validators.required])],
    sentence: ['', Validators.compose([Validators.required])]
     })
  }

  ngOnInit() {
  }

  AddWord() {
    console.log("Adding Word")
    console.log(this.addForm.value.word)

    this.wordService.addWord(
      this.addForm.value.word, 
      this.addForm.value.description,
      this.addForm.value.sentence)
    this.router.navigateByUrl('/home');
  }

}
