import { Component } from '@angular/core';
import { HeaderSection } from './shared/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featureEnum = HeaderSection;
  loadedFeature = HeaderSection.RecipeSection;




  onNavigate(feature: HeaderSection) {
    console.log('Feature received is: ' + feature);
    this.loadedFeature = feature;
  }
}
