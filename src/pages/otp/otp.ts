import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TokenPage } from '../token/token';
import { HomePage } from '../home/home';
// import * as firebase from 'firebase';
// import { ToastController } from 'ionic-angular';
/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {
   //public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  verificationId: any;
  text:string="";
  text1:string="";
  otp: string="";
  phno: any;
  countryCode: any;
  //appVerifier: any;
// public recaptchaVerifier:firebase.auth.RecaptchaVerifier;
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
   //  lock.on('signin success', function() {
   // console.log('successfully signed in!');
   // this.navCtrl.push(TokenPage);});

  }

  ionViewDidLoad() {
     //this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
// this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    console.log('ionViewDidLoad OtpPage');

  }

/*  OtpScreen() {
  this.countryCode = '+' + this.phno.substring(0, 2);
  this.phno = this.phno.substring(2, 13);
  console.log(this.countryCode, this.phno);
}*/

  //
  // showAlert(text:string)
  // {
  //
  //     const alert = this.alertCtrl.create({
  //       title: text,
  //       buttons: ['OK']
  //     });
  //     alert.present();
  //   }
  //
  //   presentToast()
  //   {
  //     //console.log(this.toastCtrl);
  //     console.log(this.toastCtrl);
  //
  //   let toast = this.toastCtrl.create({
  //     message: 'Wrong OTP!Retry',
  //     duration: 3000,
  //     position: 'bottom'
  //   });
  //   toast.onDidDismiss(() => {
  //     console.log('Dismissed');
  //   });
  //   toast.present();
  //   console.log('Here');
  // }

    // showAlert1() {
    //     const alert = this.alertCtrl.create({
    //       title: 'OTP Wrong!',
    //       buttons: ['OK']
    //     });
    //     alert.present();
    //   }



/*onbuttonselected()
{
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('button1', {
  'size': 'invisible',
  'callback': function(response) {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
});
this.appVerifier = window.recaptchaVerifier;

firebase.auth().signInWithPhoneNumber(this.phno, this.appVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      this.showAlert();
      window.confirmationResult = confirmationResult;
    }).catch(function (error) {
      // Error; SMS not sent
      // ...
      console.log(error);
    });
/*(<any>window).FirebasePlugin.verifyPhoneNumber(this.phno, 60, (credential) =>  {
  this.showAlert();
  console.log(credential);

  this.verificationid = credential.verificationId;
}, (error)=>
   { console.log(error);
});
}*/

/*onotpselected()
{
  this.presentToast("Verifying OTP");
  var signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, this.otp);
  firebase.auth().signInWithCredential(signInCredential).then((info)=>{
    console.log(signInCredential);
    console.log(info);
    this.navCtrl.push(TokenPage);
  },(error)=>{
    this.showAlert("Wrong OTP");
    console.log('Erorr in OTP');
  });
}
/*  confirmationResult.confirm(this.otp).then(function (result) {
  // User signed in successfully.
   this.verificationid = result.user;
   this.navCtrl.push(TokenPage);
  // ...
}).catch(function (error) {
  // User couldn't sign in (bad verification code?)
  // ...
  this.showAlert1();
});
let signinCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationid, this.otp);

  firebase.auth().signInWithCredential(signinCredential).then((info)=> {
      console.log(info);
      this.navCtrl.push(TokenPage);
    }, (error)=> {
      console.log(error);
    });

}*/

/*signIn() { //Step 2 - Pass the mobile number for verification

    //let number1 =this.phno;
    /*(<any>window).FirebasePlugin.verifyPhoneNumber("+919901630263", 60, (credential) =>{
    console.log(credential);
    this.verificationId = credential.verificationId;
    //this.navCtrl.push('OtpPage',{verificationid: verificationId}); //This is STEP 3 - passing verification ID to OTP Page
    }, (error) =>{
      //this.eer = error;
      this.showAlert();
      console.error(error);
    });*/

    /*(<any>window).FirebasePlugin.getVerificationID("+919901630263", (id) => {
          this.showAlert("OTP Sent!");
          console.log("verificationID: " + id);
          this.verificationId = id;
        }, (error) => {
          this.showAlert("Error sending otp");
          console.log("error: " + error);
        });
  }*/
  //
  // sendLoginCode(phoneNumber: number)
  // {
  //   const appVerifier = this.recaptchaVerifier;
  //   const phoneNumberString = "+91" + phoneNumber;
  //
  //   firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
  //     .then( confirmationResult => {
  //       console.log('otp sent');
  //       let prompt = this.alertCtrl.create({
  //   title: 'Enter the Confirmation code',
  //   inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
  //   buttons: [
  //     { text: 'Cancel',
  //       handler: data => { console.log('Cancel clicked'); }
  //     },
  //     { text: 'Confirm',
  //       handler: data => {
  //         confirmationResult.confirm(data.confirmationCode)
  // .then(function (result) {
  //   console.log(result.user);
  //
  //   //console.log('otp right');
  // }).catch(function (error) {
  //   this.presentToast();
  //
  // });
  //       }
  //     }
  //   ]
  // });
  // prompt.present();
  //       // SMS sent. Prompt user to type the code from the message, then sign the
  //       // user in with confirmationResult.confirm(code).
  //   })
  //   .catch(function (error) {
  //     console.error("SMS not sent", error);
  //   });
  //
  //   const unsubscribe = firebase.auth().onAuthStateChanged(user => {
  //        if (user) {
  //          this.navCtrl.push(TokenPage);
  //          unsubscribe();
  //        } else {
  //          this.navCtrl.push(HomePage);
  //          unsubscribe();
  //        }
  //      });
  //
  //
  //
  // }



}
