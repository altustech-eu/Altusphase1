import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ListCategory {
  id: string;
  title: string;
  description: string;
}

interface SectorCard {
  title: string;
  count: string;
  imageUrl: string;
}

@Component({
  selector: 'app-ausbildung-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="font-main bg-[#fafafa] py-16 lg:py-24">
      <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div class="lg:col-span-4 flex flex-col">
            
            <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 lg:mb-10 tracking-tight">
              Ausbildung
            </h2>

            <div class="flex flex-col mb-6">
              @for (category of categories; track category.id) {
                <div 
                  (click)="setActive(category.id)"
                  class="group cursor-pointer transition-all duration-300"
                  [class.py-4]="activeCategoryId !== category.id"
                  [class.py-5]="activeCategoryId === category.id"
                  [class.border-b]="activeCategoryId !== category.id"
                  [class.border-slate-200]="activeCategoryId !== category.id">
                  
                  <div 
                    class="transition-all duration-300"
                    [class.border-l-4]="activeCategoryId === category.id"
                    [class.border-blue-600]="activeCategoryId === category.id"
                    [class.pl-5]="activeCategoryId === category.id">
                    
                    <h3 
                      class="text-[15px] transition-colors"
                      [class.font-bold]="activeCategoryId === category.id"
                      [class.text-slate-900]="activeCategoryId === category.id"
                      [class.font-medium]="activeCategoryId !== category.id"
                      [class.text-slate-700]="activeCategoryId !== category.id"
                      [class.group-hover:text-blue-600]="activeCategoryId !== category.id">
                      {{ category.title }}
                    </h3>

                    <div 
                      class="overflow-hidden transition-all duration-300 ease-in-out"
                      [style.maxHeight]="activeCategoryId === category.id ? '200px' : '0px'"
                      [style.opacity]="activeCategoryId === category.id ? '1' : '0'">
                      <p class="text-[13.5px] text-slate-500 mt-3 leading-relaxed border-b border-slate-200 pb-5">
                        {{ category.description }}
                      </p>
                    </div>
                  </div>
                </div>
              }
            </div>

            <div class="mt-auto flex justify-end lg:justify-between items-center border-b border-slate-200 pb-2">
              <span class="hidden lg:inline-block"></span> 
              <a href="#" class="text-[13px] font-medium text-slate-600 hover:text-blue-600 flex items-center gap-1.5 transition-colors group">
                View all 
                <svg class="w-4 h-4 text-blue-500 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>

          </div>

          <div class="lg:col-span-8">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
              
              @for (card of sectorCards; track card.title) {
                <div class="relative rounded-2xl overflow-hidden aspect-[4/5] group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                  
                  <img 
                    [src]="card.imageUrl" 
                    [alt]="card.title" 
                    class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  
                  <div class="absolute inset-0 bg-gradient-to-t from-[#0b1320] via-[#0b1320]/60 to-transparent opacity-90"></div>

                  <div class="absolute bottom-5 left-5 right-5 text-white">
                    <h4 class="font-bold text-[15px] mb-0.5 tracking-wide">{{ card.title }}</h4>
                    <p class="text-[11px] text-slate-400 font-medium tracking-widest">{{ card.count }}</p>
                  </div>
                </div>
              }

            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
    
    .font-main {
      font-family: 'Poppins', Helvetica, Arial, sans-serif;
    }
  `]
})
export class AusbildungSectionComponent {
  
  activeCategoryId = 'tools-4';

  setActive(id: string) {
    this.activeCategoryId = id;
  }

  categories: ListCategory[] = [
    { id: 'tools-1', title: 'All Tools Lists', description: 'Explore various tools and resources available for your career journey.' },
    { id: 'tools-2', title: 'All Tools Lists', description: 'Find the right matching programs based on your qualifications.' },
    { id: 'tools-3', title: 'All Tools Lists', description: 'Discover training programs to enhance your language skills.' },
    { 
      id: 'tools-4', 
      title: 'All Tools Lists', 
      description: 'Explore Ausbildung programs, international jobs, study abroad options, German training and guided career support based on your country' 
    },
    { id: 'tools-5', title: 'All Tools Lists', description: 'Access visa preparation guides and settlement checklists.' },
  ];

  // Updated with Pexels URLs matching the specific industries
  sectorCards: SectorCard[] = [
    { 
      title: 'Bau', 
      count: '142.000', 
      imageUrl: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800' // Construction/Engineering 
    },
    { 
      title: 'Handwerk', 
      count: '98.000', 
      imageUrl: 'https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=800' // Craft/Tools 
    },
    { 
      title: 'Industrie', 
      count: '210.000', 
      imageUrl: 'https://images.pexels.com/photos/259968/pexels-photo-259968.jpeg?auto=compress&cs=tinysrgb&w=800' // Industry/Cars
    },
    { 
      title: 'IT & Tech', 
      count: '185.000', 
      imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800' // Code/Motherboard
    },
    { 
      title: 'Pflege', 
      count: '76.000', 
      imageUrl: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800' // Nursing/Medical
    },
    { 
      title: 'Logistik', 
      count: '94.000', 
      imageUrl: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800' // Trucking/Logistics
    }
  ];
}