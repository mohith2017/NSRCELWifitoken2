import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TokenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-token',
  templateUrl: 'token.html',
})
export class TokenPage {
  name1:any;
  token1:any;
  public token2 = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TokenPage');
    const personRef: firebase.database.Reference = firebase.database().ref(`/nsrcel-wifi-c4af7/`);
  personRef.on('value', personSnapshot => {
    token2 = personSnapshot.val();
  });
  }

}
