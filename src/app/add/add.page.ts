import { Component, OnInit } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { WordService } from '../services/dictonary.service';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


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
  private router: Router,
  private alert: AlertController,
 ) 
  { 
    this.addForm = formBuilder.group({
    word: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    description: ['', Validators.compose([Validators.required])],
    sentence: ['', Validators.compose([Validators.required])]
     })
  }

  ngOnInit() {
  }

  async AddWord() {
    console.log("Adding Word")
    console.log(this.addForm.value.word)

    if(this.wordService.addWord(
      this.addForm.value.word, 
      this.addForm.value.description,
      this.addForm.value.sentence)) {
        this.router.navigateByUrl('/home');
    } else {
        const alert = await this.alert.create({
          header: '!Alert!',
          subHeader: 'A Double Request To Add The Same Word Been Made',
          message: 'Boi!! Same word again?.',
          buttons: ['OK']
        });
    
        await alert.present();
      }

  }

}
