import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  a=0;
  b=0;
  x=0;
  y=0;

  total=[];
  string_="";

  tipe_pola = "";
  
  hasil = 0;

  string_hasil = "";

  Submit(){
    this.hasil = Math.pow(this.a,this.b);
    this.string_hasil = "Hasil: "+this.hasil;

    if(Math.pow(this.a,this.b) % 2 == 1){
      this.tipe_pola = "Pola A :";

      var x = this.a;
      var y = this.b;

      if(this.b > this.a){
        for(let i = 1; i <= this.b; i++){
          for(let j = 0; j < i; j++){
            this.string_ = this.string_ + "*";
          }
          for(let j = 0; j < x; j++){
            this.string_ = this.string_ + "o";
          }
          x--;
          this.total.push(this.string_);
          this.string_ = "";
        }
      }
      else{
        for(let i = 1; i <= this.a; i++){
          for(let j = 0; j < i; j++){
            this.string_ = this.string_ + "*";
          }
          for(let j = 0; j < y; j++){
            this.string_ = this.string_ + "o";
          }
          y--;
          this.total.push(this.string_);
          this.string_ = "";
        }
      }

    }
    else{
      this.tipe_pola = "Pola B :";
      for(let i = this.b; i < Math.pow(this.a,this.b); i++){
        for(let j = 0; j < i; j++){
          this.string_ = this.string_ + "*";
        }
        this.total.push(this.string_);
        this.string_ = "";
      }
    }
  }
  

  Reset(){
    this.string_hasil = "";
    this.tipe_pola="";
    this.a = 0;
    this.b = 0;
    this.hasil = 0;
    this.total = [];
  }

}


