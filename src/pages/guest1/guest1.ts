import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TokenPage } from '../token/token';
/**
 * Generated class for the Guest1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guest1',
  templateUrl: 'guest1.html',
})
export class Guest1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Guest1Page');
  }

  verify()
  {
    this.navCtrl.push(TokenPage);
  }

}
