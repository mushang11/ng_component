import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  list = [
    {url: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg', clickUrl: '//www.google.com'},
    {url: 'http://img02.tooopen.com/images/20160408/tooopen_sy_158723161481.jpg', clickUrl: '//www.npmjs.com'},
    {url: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg', clickUrl: '//www.npmjs.com'}
  ];
}
