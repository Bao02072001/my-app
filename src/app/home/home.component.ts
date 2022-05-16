import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public name = "Nguyen Quoc Bao";
  public age = 16.3323232;
  public vehicles=['Toyota','Mercedes'];
  constructor() { }

  ngOnInit(): void {
  }
  public tangTuoi(){
    this.age++;
      this.vehicles.push(this.name+":"+this.age);
  }
}
