import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative bg-white font-main overflow-hidden pt-12 lg:pt-20 pb-0 min-h-[80vh] flex items-center">
      
      <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <svg class="absolute top-0 left-[10%] w-[800px] text-slate-100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M45.7,-76.3C58.9,-69.3,69.2,-55.3,77.5,-40.5C85.8,-25.7,92.1,-10.1,89.5,4.3C86.9,18.6,75.4,31.7,64.2,42.9C53,54.1,42.1,63.4,28.8,71.2C15.5,79, -0.2,85.3,-15.5,83.1C-30.8,80.9,-45.7,70.2,-57.4,57.4C-69.1,44.6,-77.6,29.7,-82.1,13.5C-86.6,-2.7,-87.1,-20.2,-79.8,-34C-72.5,-47.8,-57.4,-57.9,-42.8,-64.3C-28.2,-70.7,-14.1,-73.4,1.4,-75.2C16.9,-77,32.5,-83.3,45.7,-76.3Z" transform="translate(100 100) scale(1.2)" />
        </svg>
      </div>

      <div class="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="col-span-1 lg:col-span-7 pt-10 lg:pt-0">
          
          <div class="inline-flex items-center p-1 border border-slate-200 rounded-[2rem] bg-white mb-8 shadow-sm">
            <button 
              (click)="setMode('employer')"
              class="px-6 py-2 rounded-[2rem] text-[13.5px] font-medium transition-all duration-300"
              [class.bg-[#e8d5ce]]="mode === 'employer'"
              [class.text-slate-900]="mode === 'employer'"
              [class.text-slate-500]="mode !== 'employer'"
              [class.hover:bg-slate-50]="mode !== 'employer'">
              For Employer
            </button>
            <button 
              (click)="setMode('employee')"
              class="px-6 py-2 rounded-[2rem] text-[13.5px] font-medium transition-all duration-300"
              [class.bg-[#e8d5ce]]="mode === 'employee'"
              [class.text-slate-900]="mode === 'employee'"
              [class.text-slate-500]="mode !== 'employee'"
              [class.hover:bg-slate-50]="mode !== 'employee'">
              For Employee
            </button>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#1e293b] leading-[1.15] tracking-tight mb-6">
            Your Career Pathway Platform for <br class="hidden sm:block"/>
            <span class="text-[#0d6efd] relative inline-block pb-1">
              Germany, Europe, Gulf
              <span class="absolute bottom-1 left-0 w-full h-[4px] bg-[#0d6efd]"></span>
            </span>
          </h1>

          <p class="text-slate-600 text-[15px] sm:text-base leading-relaxed mb-10 max-w-[600px] font-medium">
            Explore Ausbildung programs, international jobs, study abroad options, German training and guided career support based on your country, qualification, language level, and target destination.
          </p>

          <div class="flex flex-wrap items-center gap-4 mb-14">
            <button class="bg-[#0d6efd] text-white px-8 py-3.5 rounded-sm font-semibold tracking-wide hover:bg-blue-700 transition-colors flex items-center gap-3 shadow-md shadow-blue-500/20">
              {{ mode === 'employer' ? 'Post Job' : 'Find Jobs' }}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <button class="bg-white border border-slate-200 text-slate-800 px-8 py-3.5 rounded-sm font-semibold tracking-wide hover:bg-slate-50 transition-colors shadow-sm">
              {{ mode === 'employer' ? 'Access Cv' : 'Upload CV' }}
            </button>
          </div>

          <div class="max-w-[700px]">
            
            <div class="flex items-center gap-6 sm:gap-8 mb-5">
              <button 
                (click)="setTab('jobs')"
                class="pb-3 text-[14.5px] font-semibold flex items-center gap-2 border-b-[3px] transition-all"
                [class.border-[#0d6efd]]="activeTab === 'jobs'"
                [class.text-slate-900]="activeTab === 'jobs'"
                [class.border-transparent]="activeTab !== 'jobs'"
                [class.text-slate-500]="activeTab !== 'jobs'">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                Jobs
              </button>
              
              <button 
                (click)="setTab('ausbildung')"
                class="pb-3 text-[14.5px] font-semibold flex items-center gap-2 border-b-[3px] transition-all"
                [class.border-[#0d6efd]]="activeTab === 'ausbildung'"
                [class.text-slate-900]="activeTab === 'ausbildung'"
                [class.border-transparent]="activeTab !== 'ausbildung'"
                [class.text-slate-500]="activeTab !== 'ausbildung'">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                Ausbildung
              </button>

              <button 
                (click)="setTab('study')"
                class="pb-3 text-[14.5px] font-semibold flex items-center gap-2 border-b-[3px] transition-all"
                [class.border-[#0d6efd]]="activeTab === 'study'"
                [class.text-slate-900]="activeTab === 'study'"
                [class.border-transparent]="activeTab !== 'study'"
                [class.text-slate-500]="activeTab !== 'study'">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                Study Aboard
              </button>
            </div>

            <div class="flex flex-col sm:flex-row bg-white border border-slate-200 shadow-sm p-1.5 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-[#0d6efd] transition-all rounded-[6px]">
              
              <div class="flex-1 flex items-center px-4 py-2 sm:border-r border-slate-200 border-b sm:border-b-0">
                <input 
                  type="text" 
                  [placeholder]="getPlaceholder1()" 
                  class="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400 font-medium text-sm">
              </div>

              <div class="flex-1 flex items-center px-4 py-2">
                <input 
                  type="text" 
                  placeholder="Location or Country" 
                  class="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400 font-medium text-sm">
              </div>

              <button class="bg-[#0d6efd] hover:bg-blue-700 text-white p-3.5 sm:px-6 rounded-[4px] transition-colors flex items-center justify-center mt-2 sm:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </button>
              
            </div>
          </div>

        </div>

        <div class="col-span-1 lg:col-span-5 relative flex justify-center lg:justify-end self-center mt-8 lg:-mt-12">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Professionals in Healthcare, IT, and Education" 
            class="w-[90%] sm:w-[80%] lg:w-[110%] h-[350px] lg:h-[500px] object-cover rounded-3xl shadow-2xl z-10 border-4 border-white transform translate-x-[2%] -translate-y-10 lg:-translate-y-16"
          />
        </div>

      </div>
    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
    
    .font-main {
      font-family: 'Poppins', Helvetica, Arial, sans-serif;
    }
  `]
})
export class HeroComponent {
  // States
  mode: 'employer' | 'employee' = 'employer';
  activeTab: 'jobs' | 'ausbildung' | 'study' = 'jobs';

  setMode(selectedMode: 'employer' | 'employee') {
    this.mode = selectedMode;
  }

  setTab(tab: 'jobs' | 'ausbildung' | 'study') {
    this.activeTab = tab;
  }

  // Dynamic placeholder for the first input based on the active tab
  getPlaceholder1(): string {
    switch (this.activeTab) {
      case 'ausbildung': return 'Program, Profession or Keyword';
      case 'study': return 'University, Course or Field of Study';
      case 'jobs': default: return 'Job title, Keyword or Company';
    }
  }
}