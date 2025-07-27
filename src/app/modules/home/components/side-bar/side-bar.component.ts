import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { SideBarHeaderComponent } from './components/side-bar-header/side-bar-header.component';

@Component({
  selector: 'app-side-bar',
  imports: [
    SideBarHeaderComponent,
    TabsModule,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarComponent {
  userName = 'Nirmal';
  profilePath = 'assets/nirmal-profile.jpg';
  matches = [];
  msg = 'Matched will apear once you start to like people'
}
