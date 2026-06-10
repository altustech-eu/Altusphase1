import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Profile {
  name: string;
  role: string;
  placement: string;
  imageUrl: string;
}

interface ServiceCard {
  title: string;
  description: string;
  features: string[];
  iconBg: string;
  iconColor: string;
  svgIcon: SafeHtml;
}

@Component({
  selector: 'app-home-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="font-main bg-[#f8f9fa] pt-16 pb-24">
      
      <div class="max-w-[1400px] mx-auto px-4 lg:px-12 mb-8">
        <div class="flex overflow-x-auto gap-4 lg:gap-6 pb-12 hide-scrollbar snap-x snap-mandatory">
          
          @for (profile of profiles; track profile.name) {
            <div class="relative w-[280px] lg:w-[300px] shrink-0 h-[400px] rounded-xl overflow-hidden snap-start shadow-lg group">
              <img [src]="profile.imageUrl" [alt]="profile.name" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#04245c] via-[#04245c]/70 to-transparent"></div>

              <div class="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 px-2 py-1 flex items-center gap-1.5 rounded text-[9px] font-bold tracking-wider text-white">
                <span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> VERIFIED
              </div>

              <div class="absolute bottom-5 left-5 right-5 text-white">
                <h4 class="font-bold text-[20px] flex items-center gap-1.5 mb-1">
                  {{ profile.name }}
                  <svg class="w-4 h-4 text-blue-400 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                </h4>
                <p class="text-xs text-blue-200/90 italic font-light mb-5 tracking-wide">"{{ profile.role }}"</p>
                
                <div class="flex justify-between items-end border-t border-white/20 pt-4 mt-2">
                  <div class="text-[10px] tracking-wider uppercase">
                    <span class="block text-white/50 mb-1">Placement</span>
                    <span class="font-semibold text-[13px]">{{ profile.placement }}</span>
                  </div>
                  <button class="bg-white hover:bg-slate-100 text-[#04245c] text-[11px] px-4 py-2 font-bold rounded flex items-center gap-1 transition-colors">
                    <span class="text-lg leading-none">+</span> FOLLOW
                  </button>
                </div>
              </div>
            </div>
          }

        </div>
      </div>

      <div class="max-w-[1400px] mx-auto px-4 lg:px-12 -mt-4 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          @for (card of serviceCards; track card.title) {
            <div class="bg-white p-7 lg:p-8 rounded-[1.25rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-slate-100/50 flex flex-col h-full transition-all duration-300">
              
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6" [ngClass]="card.iconBg">
                <span [innerHTML]="card.svgIcon" [ngClass]="card.iconColor" class="flex items-center justify-center"></span>
              </div>

              <h3 class="font-bold text-slate-800 text-[19px] mb-3">{{ card.title }}</h3>
              <p class="text-[14px] text-slate-500 mb-8 leading-relaxed font-medium">
                {{ card.description }}
              </p>

              <div class="mt-auto">
                <ul class="space-y-3 mb-8">
                  @for (feature of card.features; track feature) {
                    <li class="flex items-start gap-2.5 text-[13px] text-slate-500 font-medium">
                      <span class="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5"></span>
                      {{ feature }}
                    </li>
                  }
                </ul>

                <a href="#" class="text-[14px] font-semibold text-[#04245c] flex items-center gap-1.5 group w-fit">
                  Configure 
                  <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>
          }

        </div>
      </div>
    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300&display=swap');
    .font-main { font-family: 'Poppins', Helvetica, Arial, sans-serif; }
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    .hide-scrollbar::-webkit-scrollbar { display: none; }
  `]
})
export class HomeShowcaseComponent {
  
  private sanitizer = inject(DomSanitizer);

  profiles: Profile[] = [
    { name: 'Daniel Craig', role: 'Fullstack Engineer @ Siemens', placement: 'Germany', imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Emma Watson', role: 'Data Scientist @ BioNTech', placement: 'Germany', imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Adam Ivansky', role: 'Python Developer @ BMW', placement: 'Germany', imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Sarah Jenkins', role: 'UI Designer @ SAP', placement: 'Germany', imageUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Sophie Bennett', role: 'Product Manager @ Zalando', placement: 'Germany', imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  serviceCards: ServiceCard[] = [
    {
      title: 'Ausbildung Germany',
      description: 'Vocational training with employer matching, language preparation, and mobility support',
      features: ['A1-B2 German Training', 'Employer Matching', 'Visa & Settlement'],
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500',
      svgIcon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>')
    },
    {
      title: 'Jobs in Europe',
      description: 'Career placement with profile building, recruiter outreach, and relocation support',
      features: ['ATS CV Building', 'Recruiter Network', 'Salary Negotiation'],
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-500',
      svgIcon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>')
    },
    {
      title: 'Study Abroad',
      description: 'University admission advisory with documentation, visa, and scholarship support',
      features: ['University Shortlisting', 'SOP/LOR Writing', 'Scholarship Finder'],
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-500',
      svgIcon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>')
    },
    {
      title: 'German Language',
      description: 'A1-B2 training with certified trainers, speaking labs, and exam preparation',
      features: ['Native Speakers', 'Speaking Lab', 'Exam Preparation'],
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-500',
      svgIcon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>')
    }
  ];
}