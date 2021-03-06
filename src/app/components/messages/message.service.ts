import { Injectable } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Injectable()
export class MessageService {
  public messages: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;

  constructor() {
    // this.messages = this.firebase.database.list('messages');
    // let messages = firebase.database().ref().child('messages/');
  }
 
  sendMessage(message, text) {
      return firebase.database().ref().child('messages/' + message).push({
      message: text,
      displayName: this.displayName,
      email: this.email,
      timestamp: Date.now()
    });
  }
  /*
  sendMessage(text) {
      let message = {
      message: text,
      displayName: this.displayName,
      email: this.email,
      timestamp: Date.now()
    };
    return firebase.database().ref().child('messages/' + message).push();
  }*/
}
