import { Component,signal,effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'effect11';
  //  effect is use with signal
  //  jab bhi signal change hota hai toh effect ke andar notification milte hai ke signal change hua hai
  userName=signal('Anil');
  count=signal(0);
  displayHeading=false;
  constructor(){
    effect(()=>{
console.log(this.userName()); // jab bhi signal update hoga tab hume dekhega yeh
if(this.count()==1){
  this.displayHeading=true;  // if we want ke time 2 sec ke baad na dekhe
  setTimeout(()=>{
    this.displayHeading=false
  },2000)
}
else{
  this.displayHeading=false;
}
    })
  }
  toggleValue(){
    this.count.set(this.count()+1)
  
  }
}
