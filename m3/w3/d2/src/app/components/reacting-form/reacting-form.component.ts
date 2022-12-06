import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-reacting-form',
  templateUrl: './reacting-form.component.html',
  styleUrls: ['./reacting-form.component.scss']
})
export class ReactingFormComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      heroInfo: this.fb.group({
        nome: this.fb.control(null, [Validators.required]),
        alterEgo: this.fb.control('', [Validators.required])
            }),
      superPower: this.fb.array([])
    });
    this.form.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  getErrorsC(name:string, error: string){
    return this.form.get(name)?.errors![error];
  }

  getFormC(name:string){
    return this.form.get(name);
  }

  superPowers(){
    return (this.form.get('superPower') as FormArray).controls;
  }

  aggiungiSuperPower(){
    const control = this.fb.control(null);
    (this.form.get('superPower') as FormArray).push(control);
  }

  submit(){
    console.log(this.form);
    this.form.reset();
  }

}
