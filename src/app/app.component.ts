import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  isi_a=0;
  isi_b=0;

  total=[];
  string_="";

  tipe_pola = "";
  
  hasil = 0;

  string_hasil = "";

  Submit(){
    this.hasil = Math.pow(this.isi_a,this.isi_b);
    this.string_hasil = "Hasil: "+this.hasil;

    if(Math.pow(this.isi_a,this.isi_b) % 2 == 1){
      this.tipe_pola = "Pola A :";

      var x = this.isi_a;
      var y = this.isi_b;

      if(this.isi_b > this.isi_a){
        for(let i = 1; i <= this.isi_b; i++){
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
        for(let i = 1; i <= this.isi_a; i++){
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
      for(let i = this.isi_b; i < Math.pow(this.isi_a,this.isi_b); i++){
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
    this.isi_a = 0;
    this.isi_b = 0;
    this.hasil = 0;
    this.total = [];
  }

}


