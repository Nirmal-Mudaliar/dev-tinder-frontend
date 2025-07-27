import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-side-bar-header',
  imports: [],
  templateUrl: './side-bar-header.component.html',
  styleUrl: './side-bar-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarHeaderComponent {
  userName = input.required<string>();
  profilePath = input.required<string>();
}
