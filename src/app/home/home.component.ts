import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { ProfileViewComponent } from '../profile-view/profile-view.component';
import { ObjectiveViewComponent } from '../objective-view/objective-view.component';
import { ContentTabViewComponent } from '../content-tab-view/content-tab-view.component';

@Component({
  selector: 'app-home',
  imports: [MatSidenavModule, MatButtonModule, ProfileViewComponent, ObjectiveViewComponent, ContentTabViewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor() { }

}
