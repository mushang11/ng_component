import {Routes} from '@angular/router';
import {SliderComponent} from './component/slide/slide.component';
/**
 * Created by weiqiang on 2017-08-11,0011.
 */
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: SliderComponent}
];
