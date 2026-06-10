import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MagazineArticle {
  id: string;
  image: string;
  date: string;
  tag: string;
  title: string;
  readTime: string;
}

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="font-main bg-[#f4f5f4] py-16 lg:py-24 overflow-hidden">
      
      <div class="max-w-[1200px] mx-auto px-6 lg:px-8 relative mb-24">
        
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6">
          
          <div>
            <h2 class="text-4xl lg:text-[42px] font-bold text-[#005c4a] uppercase tracking-tight mb-2">
              #Magazine
            </h2>
            <p class="text-slate-700 text-[17px] font-medium">
              A dedicated space for our latest news
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <button class="px-6 py-2 rounded-full bg-[#005c4a] text-white text-[13px] font-bold uppercase tracking-wide border border-[#005c4a] hover:bg-[#004a3b] transition-colors">
              News
            </button>
            <button class="px-6 py-2 rounded-full bg-transparent text-[#005c4a] text-[13px] font-bold uppercase tracking-wide border border-[#005c4a] hover:bg-[#005c4a]/10 transition-colors">
              Events
            </button>
            <button class="px-6 py-2 rounded-full bg-transparent text-[#005c4a] text-[13px] font-bold uppercase tracking-wide border border-[#005c4a] hover:bg-[#005c4a]/10 transition-colors">
              Products and Technology
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          
          @for (article of articles; track article.id) {
            <div class="bg-white rounded-[20px] overflow-hidden flex flex-col shadow-sm border border-slate-100 hover:shadow-md transition-shadow group cursor-pointer">
              
              <div class="h-[220px] overflow-hidden">
                <img 
                  [src]="article.image" 
                  [alt]="article.title" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div class="p-6 flex flex-col flex-1">
                
                <div class="flex justify-between items-center mb-4">
                  <span class="text-[12px] text-slate-500 font-medium">{{ article.date }}</span>
                  <span class="text-[11px] font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-[4px]">
                    {{ article.tag }}
                  </span>
                </div>

                <h3 class="text-[15px] font-bold text-slate-900 uppercase leading-snug mb-6">
                  {{ article.title }}
                </h3>

                <div class="flex-1"></div>

                <div class="flex justify-between items-center pt-5 border-t border-slate-100 mt-auto">
                  
                  <div class="flex items-center text-slate-700 gap-1.5">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span class="text-[13px] font-semibold">{{ article.readTime }}</span>
                  </div>

                  <button class="flex items-center gap-1.5 text-[#5aa833] font-semibold text-[13px] group-hover:text-[#458525] transition-colors">
                    Read more
                    <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>

                </div>
              </div>
            </div>
          }

        </div>

        <div class="absolute -bottom-6 right-6 lg:-right-4 w-12 h-12 bg-[#00415a] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 transition-transform z-20">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
        </div>

      </div>

      <div class="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div class="relative w-full h-[200px] md:h-[300px] flex items-center overflow-hidden">
          
          <div class="absolute left-0 z-20">
            <h1 class="text-[80px] md:text-[140px] font-black text-black leading-none tracking-tighter">
              2026
            </h1>
          </div>

          <div class="absolute left-0 md:left-[20%] right-0 h-full flex">
            <div class="w-1/4 h-full relative">
              <div class="absolute inset-0 bg-[#f4f5f4]/80 z-10"></div>
              <img src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=400" class="w-full h-full object-cover" alt="Collage 1">
            </div>
            <div class="w-1/4 h-full border-l-[4px] border-[#f4f5f4] relative z-10 shadow-xl">
              <img src="https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&w=400" class="w-full h-full object-cover" alt="Collage 2">
            </div>
            <div class="w-1/4 h-full border-l-[4px] border-[#f4f5f4]">
              <img src="https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400" class="w-full h-full object-cover" alt="Collage 3">
            </div>
            <div class="w-1/4 h-full border-l-[4px] border-[#f4f5f4]">
              <img src="https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=400" class="w-full h-full object-cover" alt="Collage 4">
            </div>
          </div>
        </div>
      </div>

    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
    
    .font-main {
      font-family: 'Roboto', Helvetica, Arial, sans-serif;
    }
  `]
})
export class UpcomingEventsComponent {
  
  articles: MagazineArticle[] = [
    {
      id: '1',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '19.09.2025',
      tag: 'News',
      title: 'LEITWIND AT HUSUM WIND FOR THE FIRST TIME - AWARDED NEW GRID CONNECTION CERTIFICATION',
      readTime: '2 Minutes'
    },
    {
      id: '2',
      image: 'https://images.pexels.com/photos/848683/pexels-photo-848683.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '25.08.2025',
      tag: 'News',
      title: 'WIND POWER IN SKI RESORTS: THE SUSTAINABLE ANSWER OF THE HTI GROUP',
      readTime: '2 Minutes'
    },
    {
      id: '3',
      image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '09.04.2025',
      tag: 'News',
      title: 'HTI GROUP: REVENUE OF 1.4 BILLION EUROS FOR 2024. INVESTMENTS AND EMPLOYEES GROW.',
      readTime: '5 Minutes'
    }
  ];
}