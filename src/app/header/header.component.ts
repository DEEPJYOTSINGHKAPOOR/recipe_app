import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeaderSection } from '../shared/enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerSectionEnum = HeaderSection;

  @Output() featureSelected = new EventEmitter<HeaderSection>();

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(feature: HeaderSection = HeaderSection.RecipeSection) {
    this.featureSelected.emit(feature);
  }

}
