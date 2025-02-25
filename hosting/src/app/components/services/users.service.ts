import { Injectable, inject } from '@angular/core';
import {  collection,  Firestore,} from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { IUser, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService  {
   private db = inject(Firestore);

    GetUsers():  Observable<IUser[]> {
      return collectionData(collection(this.db, 'users')).pipe(
        map((response: any) => {
            // map the returnd docs into your ICategory
            // i am not including this part here
            return User.NewInstances(response);
        })
    );
    }
}
