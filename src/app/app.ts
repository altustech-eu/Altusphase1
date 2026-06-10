import { Component } from '@angular/core';
import { Nav } from '../components/navbar';
import { HeroComponent } from '../components/hero';
import { TrustedLogosComponent } from '../components/logosection';
import { HomeShowcaseComponent } from '../components/2cardssection'; 
import { AusbildungSectionComponent } from '../components/ausbildung-section'; 
import { CountrySearchComponent } from '../components/Country-search'; 
import { ToolsSectionComponent } from '../components/Tools-section'; 
import { IndustriesSectionComponent } from '../components/By-industries';
import { StudyProgramsComponent } from '../components/Whychooseourprogram'; 
import { StudyDestinationComponent } from '../components/Choose your Study Destination'; 
import { GermanTrainingComponent } from '../components/german-training'; 
import { SuccessStoriesComponent } from '../components/Sucess-stories'; 
import { UpcomingEventsComponent } from '../components/UpcomingEvents'; 
import { BlogsInsightsComponent } from '../components/Blogs';
import { ContactMapComponent } from '../components/Contactmap'; 
import { FooterComponent } from '../components/Footer'; // <-- Import the new Footer component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Nav, 
    HeroComponent, 
    TrustedLogosComponent, 
    HomeShowcaseComponent, 
    AusbildungSectionComponent,
    CountrySearchComponent,
    ToolsSectionComponent,
    IndustriesSectionComponent,
    StudyProgramsComponent,
    StudyDestinationComponent,
    GermanTrainingComponent,
    SuccessStoriesComponent,
    UpcomingEventsComponent,
    BlogsInsightsComponent,
    ContactMapComponent,
    FooterComponent // <-- Add to imports array
  ],
  template: `
    <app-nav></app-nav>
    <app-hero></app-hero>
    <app-trusted-logos></app-trusted-logos>
    <app-home-showcase></app-home-showcase> 
    <app-ausbildung-section></app-ausbildung-section>
    <app-country-search></app-country-search>
    <app-tools-section></app-tools-section>
    <app-industries-section></app-industries-section>
    <app-study-programs></app-study-programs>
    <app-study-destination></app-study-destination>
    <app-german-training></app-german-training>
    <app-success-stories></app-success-stories>
    <app-upcoming-events></app-upcoming-events>
    <app-blogs-insights></app-blogs-insights>
    <app-contact-map></app-contact-map>
    <app-footer></app-footer> `
})
export class App {}