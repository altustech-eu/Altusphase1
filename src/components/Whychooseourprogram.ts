import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StudyProgram {
  id: string;
  category: string;
  titlePart1: string;
  titlePart2: string;
  date: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-study-programs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="font-main bg-white py-16 lg:py-24 overflow-hidden">
      
      <div class="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
        <h2 class="text-3xl lg:text-[42px] font-bold text-center text-slate-900 tracking-tight">
          Choose Your Study Programs
        </h2>
      </div>

      <div class="max-w-[1400px] mx-auto relative px-6 lg:px-12">
        
        <div class="absolute left-0 top-0 bottom-0 w-[280px] lg:w-[320px] bg-[#1a1f2b] hidden md:flex flex-col items-end justify-center pr-12 z-0">
          
          <div class="flex flex-col gap-4 mb-16">
            <button class="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center text-slate-300 hover:bg-slate-700 hover:text-white transition-colors group">
              <svg class="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
            
            <button class="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center text-slate-300 hover:bg-slate-700 hover:text-white transition-colors group">
              <svg class="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
          </div>

          <div class="text-[32px] font-semibold text-slate-300 tracking-wide">
            01
          </div>
        </div>

        <div class="relative z-10 md:ml-[160px] lg:ml-[200px]">
          <div class="flex gap-6 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory">
            
            @for (program of programs; track program.id) {
              <div class="w-[300px] lg:w-[340px] shrink-0 bg-[#f8f9fa] border border-slate-200/80 rounded-sm flex flex-col snap-start group hover:shadow-lg transition-shadow duration-300">
                
                <div class="h-[180px] bg-slate-200 relative overflow-hidden">
                  
                  <div class="absolute top-4 left-4 z-10 flex text-[10px] font-bold tracking-wider uppercase shadow-sm">
                    <span class="bg-[#0f4eb8] text-white px-2 py-1">{{ program.category.split(' ')[0] }}</span>
                    <span class="bg-[#4d86eb] text-white px-2 py-1">{{ program.category.split(' ').slice(1).join(' ') }}</span>
                  </div>

                  @if (program.imageUrl) {
                    <img [src]="program.imageUrl" alt="Speaker" class="w-full h-full object-cover" />
                    
                    <div class="absolute bottom-4 left-4 right-4 z-10 flex flex-col items-start gap-1">
                      <span class="bg-white/95 text-slate-900 px-2 py-0.5 text-sm font-semibold">{{ program.titlePart1 }}</span>
                      <span class="bg-white/95 text-slate-900 px-2 py-0.5 text-sm font-semibold">{{ program.titlePart2 }}</span>
                    </div>
                  } @else {
                    <div class="absolute inset-0 bg-[#f1f3f8] grid grid-cols-4 grid-rows-4 opacity-50 pointer-events-none">
                      <div class="border-r border-b border-slate-300"></div><div class="border-r border-b border-slate-300"></div><div class="border-r border-b border-slate-300"></div><div class="border-b border-slate-300"></div>
                      <div class="border-r border-b border-slate-300"></div><div class="border-r border-b border-slate-300"></div><div class="border-r border-b border-slate-300"></div><div class="border-b border-slate-300"></div>
                      <div class="border-r border-b border-slate-300"></div><div class="border-r border-b border-slate-300"></div><div class="border-r border-b border-slate-300"></div><div class="border-b border-slate-300"></div>
                      <div class="border-r border-slate-300"></div><div class="border-r border-slate-300"></div><div class="border-r border-slate-300"></div><div></div>
                    </div>
                    
                    <div class="absolute inset-0 p-6 flex flex-col justify-center items-start gap-2">
                      <span class="bg-[#0f4eb8] text-white px-3 py-1 text-xl font-normal">{{ program.category.split(' ')[0] }}</span>
                      <span class="bg-[#0d6efd] text-white px-3 py-1 text-[26px] font-normal leading-none">{{ program.titlePart1 }}</span>
                      <span class="bg-[#baccee] text-slate-900 px-3 py-1 text-[26px] font-normal leading-none">{{ program.titlePart2 }}</span>
                    </div>
                  }
                </div>

                <div class="p-6 flex flex-col flex-1">
                  <span class="text-[11px] font-semibold text-slate-500 mb-2 uppercase tracking-wide">{{ program.date }}</span>
                  <p class="text-[14px] text-slate-800 font-medium leading-relaxed mb-6">
                    {{ program.description }}
                  </p>
                  
                  <div class="mt-auto">
                    <a [href]="program.linkUrl" class="flex items-center justify-between text-[12px] text-blue-500 hover:text-blue-700 transition-colors font-medium">
                      {{ program.linkText }}
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                  </div>
                </div>

              </div>
            }

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

    /* Hide scrollbar but keep functionality */
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `]
})
export class StudyProgramsComponent {
  
  programs: StudyProgram[] = [
    {
      id: 'p1',
      category: 'Altus Education Summit',
      titlePart1: 'Technology',
      titlePart2: 'Summit',
      date: 'June 2026',
      description: 'Financial Intelligence and FinOps for the AI Enterprise',
      linkText: 'Register for session 07',
      linkUrl: '#'
    },
    {
      id: 'p2',
      category: 'Altus Technology Summit',
      titlePart1: 'Security',
      titlePart2: 'at creation',
      date: 'May 2026',
      description: 'Intelligent Security, AI Protected Development',
      linkText: 'Watch on-demand session 06',
      linkUrl: '#',
      imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600' // Placeholder professional photo
    },
    {
      id: 'p3',
      category: 'Altus Technology Summit',
      titlePart1: 'Mainframe',
      titlePart2: 'Modernization',
      date: 'April 2026',
      description: 'Unlocking Mainframe Value with Agentic AI',
      linkText: 'Watch on-demand session 05',
      linkUrl: '#',
      imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600' // Placeholder professional photo
    },
    {
      id: 'p4',
      category: 'Altus Technology Summit',
      titlePart1: 'Mainframe',
      titlePart2: 'Modernization',
      date: 'April 2026',
      description: 'Unlocking Mainframe Value with Agentic AI',
      linkText: 'Watch on-demand session 04',
      linkUrl: '#',
      imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];
}