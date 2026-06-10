import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface SocialPostCard {
  username: string;
  verified: boolean;
  imageUrl: string;
  caption: string;
  theme: 'yellow' | 'grey';
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
    <section class="font-main bg-white pt-10 pb-24">

      <!-- Top Instagram Style Construction Post Carousel -->
      <div class="max-w-[1400px] mx-auto px-4 lg:px-10 mb-20">
        <div class="flex overflow-x-auto gap-5 lg:gap-7 pb-6 hide-scrollbar snap-x snap-mandatory">

          @for (post of socialPosts; track $index) {
            <article class="w-[230px] lg:w-[250px] shrink-0 snap-start">

              <!-- Instagram Header -->
              <div class="flex items-center justify-between mb-2 px-1">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded-full bg-[#ffe44d] flex items-center justify-center">
                    <span class="text-[#1f1f1f] text-[11px] font-black leading-none">r</span>
                  </div>

                  <div class="flex items-center gap-1">
                    <span class="text-[10px] font-semibold text-slate-800">
                      {{ post.username }}
                    </span>

                    @if (post.verified) {
                      <svg class="w-3 h-3 text-[#2ba9ff] fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l2.2 2.8 3.5-.5 1.1 3.4 3.2 1.6-1.6 3.2 1.6 3.2-3.2 1.6-1.1 3.4-3.5-.5L12 22l-2.2-2.8-3.5.5-1.1-3.4L2 14.7l1.6-3.2L2 8.3l3.2-1.6 1.1-3.4 3.5.5L12 2z"/>
                        <path d="M10.4 15.7L6.9 12.2l1.2-1.2 2.3 2.3 5.5-5.5 1.2 1.2-6.7 6.7z" fill="white"/>
                      </svg>
                    }
                  </div>
                </div>

                <button class="text-slate-700 hover:text-slate-950">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="5" cy="12" r="1.7"/>
                    <circle cx="12" cy="12" r="1.7"/>
                    <circle cx="19" cy="12" r="1.7"/>
                  </svg>
                </button>
              </div>

              <!-- Post Creative -->
              <div
                class="relative h-[300px] rounded-sm overflow-hidden border border-slate-200 shadow-sm"
                [ngClass]="post.theme === 'yellow' ? 'bg-[#ffe44d]' : 'bg-[#9a9a9a]'"
              >

                <!-- Image Block -->
                <div class="absolute top-3 left-3 right-3 h-[205px] overflow-hidden">
                  <img
                    [src]="post.imageUrl"
                    [alt]="post.caption"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-black/5"></div>
                </div>

                <!-- Small Brand Mark -->
                <div class="absolute left-5 bottom-[66px]">
                  <span class="text-[#1f1f1f] text-[20px] font-black leading-none">r</span>
                </div>

                <!-- Caption Area -->
                <div class="absolute left-5 right-5 bottom-5">
                  <h3 class="text-[#1f1f1f] text-[13px] leading-[1.1] font-extrabold tracking-[-0.03em]">
                    {{ post.caption }}
                  </h3>
                </div>
              </div>

              <!-- Instagram Action Bar -->
              <div class="flex items-center justify-between mt-2 px-1 text-slate-700">
                <div class="flex items-center gap-3">
                  <button class="hover:text-slate-950 transition-colors" aria-label="Like">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M20.8 4.6c-1.8-1.8-4.7-1.8-6.5 0L12 6.9 9.7 4.6c-1.8-1.8-4.7-1.8-6.5 0s-1.8 4.7 0 6.5L12 20l8.8-8.9c1.8-1.8 1.8-4.7 0-6.5z"/>
                    </svg>
                  </button>

                  <button class="hover:text-slate-950 transition-colors" aria-label="Comment">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6A8.4 8.4 0 0 1 12.5 3H13a8.5 8.5 0 0 1 8 8.5z"/>
                    </svg>
                  </button>

                  <button class="hover:text-slate-950 transition-colors" aria-label="Share">
                    <svg class="w-5 h-5 rotate-[-18deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                      <path d="M22 2L11 13"/>
                      <path d="M22 2L15 22l-4-9-9-4 20-7z"/>
                    </svg>
                  </button>
                </div>

                <button class="hover:text-slate-950 transition-colors" aria-label="Save">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                  </svg>
                </button>
              </div>

            </article>
          }

        </div>
      </div>

      <!-- Service Section Heading -->
      <div class="max-w-[900px] mx-auto px-4 text-center mb-14">
        <h2 class="text-[36px] lg:text-[52px] font-extrabold text-[#08204a] tracking-[-0.045em] leading-tight mb-5">
          Choose Your Career Pathway
        </h2>

        <p class="text-[16px] lg:text-[20px] text-slate-500 leading-relaxed max-w-3xl mx-auto">
          Explore tailored programs, service modules, quality tiers, and flexible payment options designed around your education, career goals, and migration readiness.
        </p>
      </div>

      <!-- Service Cards Section -->
      <div class="max-w-[1400px] mx-auto px-4 lg:px-12 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          @for (card of serviceCards; track card.title) {
            <div class="bg-white p-7 lg:p-8 rounded-[1.25rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-slate-100 flex flex-col h-full transition-all duration-300">

              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6" [ngClass]="card.iconBg">
                <span [innerHTML]="card.svgIcon" [ngClass]="card.iconColor" class="flex items-center justify-center"></span>
              </div>

              <h3 class="font-bold text-slate-800 text-[19px] mb-3">
                {{ card.title }}
              </h3>

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
                  <svg
                    class="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

            </div>
          }

        </div>
      </div>

    </section>
  `,
  styles: [`
    .font-main {
      font-family: 'Poppins', Helvetica, Arial, sans-serif;
    }

    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `]
})
export class HomeShowcaseComponent {

  private sanitizer = inject(DomSanitizer);

  socialPosts: SocialPostCard[] = [
    {
      username: 'fragmentosurbanos',
      verified: true,
      theme: 'yellow',
      caption: 'Inovamos na Construção, Construímos com Visão.',
      imageUrl: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      username: 'fragmentosurbanos',
      verified: true,
      theme: 'grey',
      caption: 'Transformamos terrenos vazios em espaços cheios de vida.',
      imageUrl: 'https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      username: 'fragmentosurbanos',
      verified: true,
      theme: 'yellow',
      caption: 'Perfeccionismo na Construção, Qualidade em cada Detalhe.',
      imageUrl: 'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      username: 'fragmentosurbanos',
      verified: true,
      theme: 'yellow',
      caption: 'Inovamos na Construção, Construímos com Visão.',
      imageUrl: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      username: 'fragmentosurbanos',
      verified: true,
      theme: 'grey',
      caption: 'Transformamos terrenos vazios em espaços cheios de vida.',
      imageUrl: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      username: 'fragmentosurbanos',
      verified: true,
      theme: 'yellow',
      caption: 'Perfeccionismo na Construção, Qualidade em cada Detalhe.',
      imageUrl: 'https://images.pexels.com/photos/8961071/pexels-photo-8961071.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  serviceCards: ServiceCard[] = [
    {
      title: 'Ausbildung Germany',
      description: 'Vocational training with employer matching, language preparation, and mobility support',
      features: ['A1-B2 German Training', 'Employer Matching', 'Visa & Settlement'],
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500',
      svgIcon: this.sanitizer.bypassSecurityTrustHtml(
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>'
      )
    },
    {
      title: 'Jobs in Europe',
      description: 'Career placement with profile building, recruiter outreach, and relocation support',
      features: ['ATS CV Building', 'Recruiter Network', 'Salary Negotiation'],
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-500',
      svgIcon: this.sanitizer.bypassSecurityTrustHtml(
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>'
      )
    },
    {
      title: 'Study Abroad',
      description: 'University admission advisory with documentation, visa, and scholarship support',
      features: ['University Shortlisting', 'SOP/LOR Writing', 'Scholarship Finder'],
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-500',
      svgIcon: this.sanitizer.bypassSecurityTrustHtml(
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>'
      )
    },
    {
      title: 'German Language',
      description: 'A1-B2 training with certified trainers, speaking labs, and exam preparation',
      features: ['Native Speakers', 'Speaking Lab', 'Exam Preparation'],
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-500',
      svgIcon: this.sanitizer.bypassSecurityTrustHtml(
        '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>'
      )
    }
  ];
}