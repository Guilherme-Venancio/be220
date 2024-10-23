import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  imgContent = '../assets/images/download1.png'
  contents = [this.imgContent, this.imgContent, this.imgContent]

  notification: boolean = true

  skeletonPersonals: any[] = ['', '', '']

  personals: any[] = [];
  user: any;

  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.getPersonals().subscribe(data => {
      this.personals = data;
    });

    const userId = '1';
    this.firebaseService.getUserData(userId).subscribe(data => {
      this.user = data;
    });
  }

}
