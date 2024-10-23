import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) {}

  getPersonals(): Observable<any[]> {
    return this.firestore.collection('personals').valueChanges();
  }

  getUserData(userId: string): Observable<any> {
    return this.firestore.collection('users').doc(userId).valueChanges();
  }

}
