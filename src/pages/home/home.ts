import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Guest1Page } from '../guest1/guest1';
import { TokenPage } from '../token/token';
// import { Toast, ToastController } from 'ionic-angular';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
// value2: string ="";
// value1: number;
//private toastCtrl: ToastController;

  constructor (public navCtrl: NavController){}

/*  constructor(public navCtrl: NavController) {
    //this.value = (document.getElementById("text") as HTMLInputElement).value;

  }*/

//   presentToast()
//   {
//     //console.log(this.toastCtrl);
//     console.log(this.toastCtrl);
//
//   let toast = this.toastCtrl.create({
//     message: 'Please fill all fields with right info',
//     duration: 3000,
//     position: 'bottom'
//   });
//   toast.onDidDismiss(() => {
//     console.log('Dismissed');
//   });
//   toast.present();
//   console.log('Here');
// }



  onbuttonselected()
  {
  // if(((this.value1)<=1000000000)||(this.value2.length==0))
  //     {this.presentToast();
  //       }
  //
  //   else
  //   {}
      this.navCtrl.push(TokenPage);
  }



  ontextselected()
  {
    this.navCtrl.push(Guest1Page);
  }
}
