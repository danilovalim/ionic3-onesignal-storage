import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GlobalProvider } from '../../providers/global/global';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
data:any;
token:any;
status:any;
  constructor(private oneSignal: OneSignal, private global: GlobalProvider, private storage: Storage, public navCtrl: NavController) {

  }

  Save(){
    this.storage.set('data', "algum texto");
  }

  Get(){
    this.storage.get('data').then((val) => {
      this.data = val;
    });
  }

  GetToken(){
    this.oneSignal.getIds().
    then((data)=>{
      this.token = data.userId;
    })
  }

  ChangeStatus(){
   

   this.oneSignal.getIds().then((data)=>{
    if(data.pushToken == ''){
      this.oneSignal.setSubscription(true);
      this.status = 'Ativado' 
    }
    else{
      this.oneSignal.setSubscription(false);
      this.status = 'Desativado' 
    }
   });
  }

  Clear(){
    this.status = '';
    this.token = '';
    this.data = '';
  }

}
