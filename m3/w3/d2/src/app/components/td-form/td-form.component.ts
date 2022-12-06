import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

  @ViewChild('f', { static: true }) form!: NgForm;

  heroForm = {
    heroName: '',
    alterEgo: '',
    superPower: '',
    nemico: '',
    pianeta: '',
    debolezza: ''
  }

  hero = {
    heroName: '',
    alterEgo: '',
    superPower: '',
    nemico: '',
    pianeta: '',
    debolezza: ''
  }

  constructor() { }

  ngOnInit(): void {
    this.form.statusChanges?.subscribe((status) => {
      console.log('stato del form: ', status);
    })
  }

  submit() {
    console.log('Form inviato: ', this.form);
    this.hero.heroName = this.form.value.heroInfo.heroName;
    this.hero.alterEgo = this.form.value.heroInfo.alterEgo;
    this.hero.superPower = this.form.value.heroInfo.superPower;
    this.hero.nemico = this.form.value.heroInfo.nemico;
    this.hero.pianeta = this.form.value.heroInfo.pianeta;
    this.hero.debolezza = this.form.value.heroInfo.debolezza;
    this.form.reset();
  }

}
