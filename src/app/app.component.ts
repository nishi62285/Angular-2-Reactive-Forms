import { Component,OnInit } from '@angular/core';
import {ReactiveFormsModule,FormGroup,FormBuilder,FormControl, FormArray, Validators} from '@angular/forms'
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
  countries =[{'id':0,'name':'select','selected':true},{'id':1, 'name':'India','selected':true}, {'id':2, 'name': 'USA','selected':true}, {'id':3, 'name': 'UK','selected':true}]
  ngOnInit(){

    this.user = new FormGroup({
      name : new FormControl('Nishikant',[Validators.required,Validators.minLength(2)]),
      country : new FormControl(''),
      account : new FormGroup({ 
        email : new FormControl('abc@123.com',[Validators.email,Validators.required]),
        address : new FormControl('india')
      }),
      items : new FormArray([this.createItem()])
      
    })

    this.user.get('country').setValue(2)
    this.user.get('name').valueChanges.subscribe(x=>{

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
    console.log(this.user.value)
  }
  onSelectChange(country){
    debugger
    console.log(country)
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
