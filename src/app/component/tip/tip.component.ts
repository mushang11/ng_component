/**
 * Created by weiqiang on 2017-08-11,0011.
 */
import {Component, Input, OnInit, Renderer2, TemplateRef, ViewChild} from '@angular/core';
@Component({
  selector: 'app-tip',
  templateUrl: 'tip.component.html',
  styleUrls: ['tip.component.css']
})

export class TipComponent implements  OnInit {
  @Input('tipTitle') tipTitle: any;
  @Input('myTitle') myTitle: any;
  showFlg = false;
  @ViewChild('tip') tip: TemplateRef<any>;
  constructor(private render: Renderer2 ) {

  }
  ngOnInit() {

  }

  click() {

  }

  mouseover() {
     // this.render.render
    this.showFlg = true;
  }

  mouseout() {

    this.showFlg = false;
  }
}
