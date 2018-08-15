import { Component,OnInit } from '@angular/core';
import {ReactiveFormsModule,FormGroup,FormBuilder,FormControl, FormArray} from '@angular/forms'
import {User} from './signup.interface'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'ModelDrivenForms';

  user : FormGroup ;
  userdata :User ;
  ngOnInit(){

    this.user = new FormGroup({
      name : new FormControl('Nishikant'),
      account : new FormGroup({
        email : new FormControl('abc@123.com'),
        address : new FormControl('india')
      }),
      items : new FormArray([this.createItem()])
    })

    this.user.get('name').valueChanges.subscribe(x=>{
debugger
console.log(x)

    })

    
    this.user.get('name').statusChanges.subscribe(x=>{
      debugger
      console.log(x)
          })
  }

  createItem(){

    return new FormGroup({
     id1 : new FormControl(12) ,
     id2 : new FormControl(34),
     result : new FormControl(0)
    })

  }
  OnSubmit(){
    debugger
    this.userdata = this.user.value
    console.log(this.user)
  }

  AddRow(){    
    let items = this.user.get('items') as FormArray;
   items.push(this.createItem())
  }

  DeleteRow(i){
    var items = this.user.get('items') as FormArray
    items.removeAt(i)
  }

  onblurid1(index,val){
debugger
var items = this.user.get('items') as FormArray
items.controls[index].get('result').setValue(val)
  }

  onblurid2(index,val){
    debugger
    var items = this.user.get('items') as FormArray
  items.controls[index].get('result').setValue(val)
      }



}
