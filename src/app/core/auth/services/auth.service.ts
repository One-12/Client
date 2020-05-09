import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$: Observable<UserModel>;

  constructor(
    private readonly _angularFireAuth: AngularFireAuth,
    private readonly _angularFireStore: AngularFirestore,
    private readonly _router: Router,
  ) {
    this.user$ = this._angularFireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this._angularFireStore.doc<UserModel>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }),
    );
  }

  public async googleSignIn(): Promise<void> {
    const googleAuthProvider = new auth.GoogleAuthProvider();
    const googleAuthCredentials = await this._angularFireAuth.signInWithPopup(googleAuthProvider);
    await this._updateUserDetails(googleAuthCredentials.user);
  }

  public async signOut(): Promise<void> {
    await this._angularFireAuth.signOut();
    await this._router.navigate(['/']);
  }

  private async _updateUserDetails(firebaseUser: any): Promise<void> {
    const userRef: AngularFirestoreDocument<UserModel> = this._angularFireStore.doc(`users/${firebaseUser.uid}`);

    const data = {
      id: firebaseUser.id,
      emailId: firebaseUser.emailId,
      name: firebaseUser.name,
      userName: firebaseUser.userName,
      token: firebaseUser.token,
    };

    return await userRef.set(data, { merge: true });
  }
}
