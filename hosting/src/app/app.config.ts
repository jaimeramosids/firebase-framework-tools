import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { UsersService } from './components/services/users.service';

const fbApp = () => initializeApp({
  apiKey: "AIzaSyApQ2CvLYurrdbpyDB0th5a2kEemeCfuaM",
  authDomain: "erp-jartech-79c06.firebaseapp.com",
  projectId: "erp-jartech-79c06",
  storageBucket: "erp-jartech-79c06.firebasestorage.app",
  messagingSenderId: "584883144290",
  appId: "1:584883144290:web:3b1c1cbc0938bf3753733b"
});
const firebaseProviders = [
  provideFirebaseApp(fbApp),
  provideFirestore(() => getFirestore()),
];
export const appConfig: ApplicationConfig = {
  providers: [firebaseProviders,UsersService,provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

