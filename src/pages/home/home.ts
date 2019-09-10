import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NavigationPage } from '../navigation/navigation';
import { SearchbarsPage } from '../searchbars/searchbars';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit() {
    console.log(this.navParams.data);
  }

  navigation() {
    this.navCtrl.push(NavigationPage)
  }

  searchbars() {
    this.navCtrl.push(SearchbarsPage)
  }

  modal() {
    this.navCtrl.push(ModalPage)
  }

}
