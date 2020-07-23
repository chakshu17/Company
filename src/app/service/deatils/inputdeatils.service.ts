import { Injectable } from '@angular/core';
import { Inputdeatils } from '../../interface/inputdetails/inputdeatils';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class InputdeatilsService {
  constructor(private db: AngularFirestore) {}
  adddeatils(data: Inputdeatils) {
    this.db
      .collection('InputDeatils')
      .add(data)
      .then((re) => {
        console.log('success');
      })
      .catch((re) => {
        console.log(re.error);
      });
  }
}
