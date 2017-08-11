/**
 * Created by weiqiang on 2017-08-11,0011.
 */
import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {state, style, trigger} from '@angular/animations';
import {Constant} from './slide.service';
@Component ({
  selector: 'app-slider',
  templateUrl: 'slide.component.html',
  animations: [
    trigger('state', [
      state('false', style({
         opacity: '0',
        'z-index': '1',
        'transition-timing-function': 'ease-out'
      })),
      state('true', style({
         opacity: '1',
        'z-index': '3',
        'transition-timing-function': 'ease-in'

      }))
    ])
  ],
  styleUrls: ['./slide.component.css'],
  providers: [Constant]
})

export class SliderComponent implements OnInit, OnDestroy {
  bannerList= [];           // picList
  currentPic = 0;           // current index
  timer: any;
  @Input('list') list;
  @Input('width') width;
  @Input('height') height;
  @Input('time') time;

  ngOnInit() {
    this.bannerList = this.list;
    this.start();
  }

  start () {
    this.timer = setInterval(() => {
      this.currentPic = (this.currentPic + 1) % this.bannerList.length;
    }, this.time);
  }

  /**
   * change banner index
   * @param index
   */
  change(index) {
    this.currentPic = index;
  }

  ngOnDestroy() {
    clearInterval(this.timer);

  }

  /**
   * mouse enter remove interval
   * @param e
   */
  @HostListener('mouseenter', ['$event'])
  enter(e) {
    clearInterval(this.timer);
  }

  /**
   * mouse leave add interval
   */
  @HostListener('mouseleave')
  leave() {
    this.start();
  }
}
