import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-two',
  template: `
    <p>
      two works!
    </p>
  `,
  styles: []
})
export class TwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
