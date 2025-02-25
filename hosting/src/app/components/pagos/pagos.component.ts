import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule, } from '@angular/forms';
  import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,addDoc } from 'firebase/firestore/lite';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
@Component({
  selector: 'app-pagos',
  // standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagosComponent implements OnInit {
    private userService = inject(UsersService);
  // usuarios$: Observable<IUser[]>;

  ngOnInit(): void {
    console.log(this.userService.GetUsers());
      // get categories from service, I expecct an observable I can async to
  }

}
