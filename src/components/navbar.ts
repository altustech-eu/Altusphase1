import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  template: `
    <header class="bg-white sticky top-0 z-[9999] font-main shadow-sm border-b border-slate-200">
      
      <div class="max-w-[1400px] mx-auto relative">

        <div class="h-16 flex items-center justify-between px-6 lg:px-12">

          <div class="flex items-center gap-3 min-w-fit xl:min-w-[220px]">
            <div class="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center text-sm font-bold shadow-md">
              A
            </div>
            <div class="font-bold text-sm tracking-wide text-slate-900">
              Altus <span class="text-blue-700">Europass</span>
            </div>
          </div>

          <nav class="hidden xl:flex items-center gap-6 text-[13px] font-semibold text-slate-700 uppercase tracking-wider">
            
            <button class="h-16 flex items-center gap-1.5 hover:text-blue-700 transition-colors"
              [class.text-blue-700]="openMenu === 'programs'"
              [class.border-b-2]="openMenu === 'programs'"
              [class.border-blue-700]="openMenu === 'programs'"
              (mouseenter)="setMenu('programs')" (click)="toggleMenu('programs')">
              Programs 
              <svg class="w-3.5 h-3.5 transition-transform duration-200" [class.rotate-180]="openMenu === 'programs'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>

            <button class="h-16 flex items-center gap-1.5 hover:text-blue-700 transition-colors"
              [class.text-blue-700]="openMenu === 'ausbildung'"
              [class.border-b-2]="openMenu === 'ausbildung'"
              [class.border-blue-700]="openMenu === 'ausbildung'"
              (mouseenter)="setMenu('ausbildung')" (click)="toggleMenu('ausbildung')">
              Ausbildung 
              <svg class="w-3.5 h-3.5 transition-transform duration-200" [class.rotate-180]="openMenu === 'ausbildung'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>

            <button class="h-16 flex items-center gap-1.5 hover:text-blue-700 transition-colors"
              [class.text-blue-700]="openMenu === 'jobs'"
              [class.border-b-2]="openMenu === 'jobs'"
              [class.border-blue-700]="openMenu === 'jobs'"
              (mouseenter)="setMenu('jobs')" (click)="toggleMenu('jobs')">
              Jobs 
              <svg class="w-3.5 h-3.5 transition-transform duration-200" [class.rotate-180]="openMenu === 'jobs'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>

            <button class="h-16 flex items-center gap-1.5 hover:text-blue-700 transition-colors"
              [class.text-blue-700]="openMenu === 'study-abroad'"
              [class.border-b-2]="openMenu === 'study-abroad'"
              [class.border-blue-700]="openMenu === 'study-abroad'"
              (mouseenter)="setMenu('study-abroad')" (click)="toggleMenu('study-abroad')">
              Study Abroad 
              <svg class="w-3.5 h-3.5 transition-transform duration-200" [class.rotate-180]="openMenu === 'study-abroad'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>

            <button class="h-16 flex items-center gap-1.5 hover:text-blue-700 transition-colors"
              [class.text-blue-700]="openMenu === 'tools'"
              [class.border-b-2]="openMenu === 'tools'"
              [class.border-blue-700]="openMenu === 'tools'"
              (mouseenter)="setMenu('tools')" (click)="toggleMenu('tools')">
              Tools 
              <svg class="w-3.5 h-3.5 transition-transform duration-200" [class.rotate-180]="openMenu === 'tools'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>

            <button class="h-16 flex items-center gap-1.5 hover:text-blue-700 transition-colors"
              [class.text-blue-700]="openMenu === 'pricing'"
              [class.border-b-2]="openMenu === 'pricing'"
              [class.border-blue-700]="openMenu === 'pricing'"
              (mouseenter)="setMenu('pricing')" (click)="toggleMenu('pricing')">
              Pricing 
              <svg class="w-3.5 h-3.5 transition-transform duration-200" [class.rotate-180]="openMenu === 'pricing'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>

            <button class="h-16 flex items-center hover:text-blue-700 transition-colors"
              (mouseenter)="closeMenu()">
              Events
            </button>

            <button class="h-16 flex items-center hover:text-blue-700 transition-colors"
              (mouseenter)="closeMenu()">
              About
            </button>

          </nav>

          <div class="hidden xl:flex items-center gap-5 min-w-fit justify-end text-slate-700">
            <button class="flex items-center gap-2 text-xs font-semibold hover:text-blue-700 transition-colors">
              <span class="text-lg leading-none">⌕</span> All Search
            </button>
            <button class="bg-blue-700 text-white px-8 py-2.5 text-xs font-bold tracking-widest hover:bg-blue-800 transition-colors rounded-sm shadow-md">
              APPLY
            </button>
          </div>

          <div class="xl:hidden flex items-center gap-4">
            <button class="text-xl leading-none">⌕</button>
            <button class="text-2xl text-slate-800 focus:outline-none" (click)="toggleMobileMenu()">
              @if (isMobileMenuOpen) { ✕ } @else { ☰ }
            </button>
          </div>

        </div>
      </div> @if (isMobileMenuOpen) {
        <div class="xl:hidden absolute top-16 left-0 right-0 w-full bg-white shadow-2xl border-t border-slate-100 flex flex-col max-h-[85vh] overflow-y-auto z-[9999]">
          
          <nav class="flex flex-col text-sm font-semibold text-slate-800 uppercase tracking-wider divide-y divide-slate-50">
            
            <button class="py-4 px-6 flex justify-between items-center hover:bg-slate-50 hover:text-blue-700" (click)="toggleMenu('programs')">
              Programs 
              <svg class="w-4 h-4 transition-transform duration-200" [class.rotate-180]="openMenu === 'programs'" [class.text-blue-700]="openMenu === 'programs'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            
            @if (openMenu === 'programs') {
              <div class="bg-slate-50 px-8 py-4 flex flex-col gap-3 text-xs text-slate-600 capitalize tracking-normal font-medium">
                <a href="#" class="hover:text-blue-700">Ausbildung Programs</a>
                <a href="#" class="hover:text-blue-700">Study Programs</a>
                <a href="#" class="hover:text-blue-700">Work Programs</a>
              </div>
            }

            <button class="py-4 px-6 text-left hover:bg-slate-50 hover:text-blue-700" (click)="toggleMenu('ausbildung')">
              Ausbildung
            </button>
            <button class="py-4 px-6 text-left hover:bg-slate-50 hover:text-blue-700" (click)="toggleMenu('jobs')">
              Jobs
            </button>
            <button class="py-4 px-6 text-left hover:bg-slate-50 hover:text-blue-700" (click)="toggleMenu('study-abroad')">
              Study Abroad
            </button>
            <button class="py-4 px-6 text-left hover:bg-slate-50 hover:text-blue-700" (click)="toggleMenu('tools')">
              Tools
            </button>
            <button class="py-4 px-6 text-left hover:bg-slate-50 hover:text-blue-700" (click)="toggleMenu('pricing')">
              Pricing
            </button>
            <button class="py-4 px-6 text-left hover:bg-slate-50 hover:text-blue-700">
              Events
            </button>
            <button class="py-4 px-6 text-left hover:bg-slate-50 hover:text-blue-700">
              About
            </button>
            <div class="p-6">
              <button class="bg-blue-700 text-white w-full py-3 font-bold tracking-widest rounded-sm text-center shadow-md">APPLY NOW</button>
            </div>
          </nav>
        </div>
      }

      @if (openMenu !== '' && !isMobileMenuOpen) {
        <div class="hidden xl:block absolute left-0 right-0 top-16 w-full bg-white shadow-2xl border-b border-slate-200 z-[9998] origin-top animate-fade-in"
             (mouseleave)="closeMenu()">

          <div class="max-w-[1400px] mx-auto">
            
            <div class="grid grid-cols-[280px_1fr] min-h-[480px]">

              <aside class="border-r border-slate-100 bg-slate-50/50 px-10 py-8 relative">
                <p class="text-[11px] uppercase tracking-[0.25em] font-bold text-slate-400 mb-6">
                  Explore
                </p>

                <div class="space-y-1 text-sm font-medium">
                  <button class="w-full text-left px-4 py-3 border-l-2 transition-colors flex justify-between items-center group"
                    [class.border-blue-700]="openMenu === 'programs'" [class.bg-white]="openMenu === 'programs'" [class.text-blue-700]="openMenu === 'programs'"
                    [class.border-transparent]="openMenu !== 'programs'" [class.text-slate-600]="openMenu !== 'programs'"
                    (mouseenter)="setMenu('programs')">
                    Programs
                    <span class="opacity-0 group-hover:opacity-100 transition-opacity" [class.opacity-100]="openMenu === 'programs'">→</span>
                  </button>

                  <button class="w-full text-left px-4 py-3 border-l-2 transition-colors flex justify-between items-center group"
                    [class.border-blue-700]="openMenu === 'ausbildung'" [class.bg-white]="openMenu === 'ausbildung'" [class.text-blue-700]="openMenu === 'ausbildung'"
                    [class.border-transparent]="openMenu !== 'ausbildung'" [class.text-slate-600]="openMenu !== 'ausbildung'"
                    (mouseenter)="setMenu('ausbildung')">
                    Ausbildung
                    <span class="opacity-0 group-hover:opacity-100 transition-opacity" [class.opacity-100]="openMenu === 'ausbildung'">→</span>
                  </button>

                  <button class="w-full text-left px-4 py-3 border-l-2 transition-colors flex justify-between items-center group"
                    [class.border-blue-700]="openMenu === 'jobs'" [class.bg-white]="openMenu === 'jobs'" [class.text-blue-700]="openMenu === 'jobs'"
                    [class.border-transparent]="openMenu !== 'jobs'" [class.text-slate-600]="openMenu !== 'jobs'"
                    (mouseenter)="setMenu('jobs')">
                    Jobs
                    <span class="opacity-0 group-hover:opacity-100 transition-opacity" [class.opacity-100]="openMenu === 'jobs'">→</span>
                  </button>

                  <button class="w-full text-left px-4 py-3 border-l-2 transition-colors flex justify-between items-center group"
                    [class.border-blue-700]="openMenu === 'study-abroad'" [class.bg-white]="openMenu === 'study-abroad'" [class.text-blue-700]="openMenu === 'study-abroad'"
                    [class.border-transparent]="openMenu !== 'study-abroad'" [class.text-slate-600]="openMenu !== 'study-abroad'"
                    (mouseenter)="setMenu('study-abroad')">
                    Study Abroad
                    <span class="opacity-0 group-hover:opacity-100 transition-opacity" [class.opacity-100]="openMenu === 'study-abroad'">→</span>
                  </button>

                  <button class="w-full text-left px-4 py-3 border-l-2 transition-colors flex justify-between items-center group"
                    [class.border-blue-700]="openMenu === 'tools'" [class.bg-white]="openMenu === 'tools'" [class.text-blue-700]="openMenu === 'tools'"
                    [class.border-transparent]="openMenu !== 'tools'" [class.text-slate-600]="openMenu !== 'tools'"
                    (mouseenter)="setMenu('tools')">
                    Tools
                    <span class="opacity-0 group-hover:opacity-100 transition-opacity" [class.opacity-100]="openMenu === 'tools'">→</span>
                  </button>

                  <button class="w-full text-left px-4 py-3 border-l-2 transition-colors flex justify-between items-center group"
                    [class.border-blue-700]="openMenu === 'pricing'" [class.bg-white]="openMenu === 'pricing'" [class.text-blue-700]="openMenu === 'pricing'"
                    [class.border-transparent]="openMenu !== 'pricing'" [class.text-slate-600]="openMenu !== 'pricing'"
                    (mouseenter)="setMenu('pricing')">
                    Pricing
                    <span class="opacity-0 group-hover:opacity-100 transition-opacity" [class.opacity-100]="openMenu === 'pricing'">→</span>
                  </button>
                </div>

                <button class="absolute bottom-8 left-10 right-10 bg-slate-900 text-white px-6 py-4 text-xs font-bold tracking-wider flex items-center justify-between hover:bg-blue-700 transition-colors shadow-lg">
                  ALL PRODUCTS <span>→</span>
                </button>
              </aside>

              <main class="px-14 py-10 bg-white">

                @if (openMenu === 'programs') {
                  <div class="animate-fade-in-up">
                    <h2 class="text-2xl font-light tracking-[0.1em] text-slate-800 mb-10 border-b border-slate-100 pb-4">
                      Program Discovery Engine <span class="text-blue-600 font-bold">.</span>
                    </h2>
                    <div class="grid grid-cols-3 gap-x-12 gap-y-10">
                      <div>
                        <h3 class="menu-title">Ausbildung Programs</h3>
                        <ul class="menu-list">
                          <li>Ausbildung in Germany</li>
                          <li>Healthcare Ausbildung</li>
                          <li>IT Ausbildung</li>
                          <li>Hospitality Ausbildung</li>
                        </ul>
                      </div>
                      <div>
                        <h3 class="menu-title">Study Programs</h3>
                        <ul class="menu-list">
                          <li>Public University</li>
                          <li>Private University</li>
                          <li>UG / PG in Germany</li>
                          <li>MBA Programs</li>
                        </ul>
                      </div>
                      <div>
                        <h3 class="menu-title">Work Programs</h3>
                        <ul class="menu-list">
                          <li>Jobs in Germany</li>
                          <li>Nursing Jobs</li>
                          <li>Skilled IT Jobs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                }

                @if (openMenu === 'study-abroad') {
                  <div class="animate-fade-in-up">
                    <h2 class="text-2xl font-light tracking-[0.1em] text-slate-800 mb-10 border-b border-slate-100 pb-4">
                      Global Education Pathways <span class="text-blue-600 font-bold">.</span>
                    </h2>
                    <div class="grid grid-cols-3 gap-x-12 gap-y-10">
                      <div>
                        <h3 class="menu-title">Destinations</h3>
                        <ul class="menu-list">
                          <li>Study in Germany</li>
                          <li>Study in Europe</li>
                          <li>Study in Italy</li>
                        </ul>
                      </div>
                      <div>
                        <h3 class="menu-title">Programs</h3>
                        <ul class="menu-list">
                          <li>Bachelors (UG)</li>
                          <li>Masters (PG)</li>
                          <li>Pathway Programs</li>
                          <li>Twinning Programs</li>
                        </ul>
                      </div>
                      <div>
                        <h3 class="menu-title">Services</h3>
                        <ul class="menu-list">
                          <li>University Shortlisting</li>
                          <li>SOP & LOR Writing</li>
                          <li>Visa Assistance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                }

                @if (openMenu === 'ausbildung') {
                  <div class="animate-fade-in-up">
                    <h2 class="text-2xl font-light tracking-[0.1em] text-slate-800 mb-10 border-b border-slate-100 pb-4">
                      Ausbildung Opportunities <span class="text-blue-600 font-bold">.</span>
                    </h2>
                    <div class="grid grid-cols-3 gap-x-12 gap-y-10">
                      <div>
                        <h3 class="menu-title">Top Sectors</h3>
                        <ul class="menu-list">
                          <li>Nursing & Healthcare</li>
                          <li>IT & Software</li>
                          <li>Mechatronics</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                }

                @if (openMenu === 'jobs') {
                  <div class="animate-fade-in-up">
                    <h2 class="text-2xl font-light tracking-[0.1em] text-slate-800 mb-10 border-b border-slate-100 pb-4">
                      International Job Search <span class="text-blue-600 font-bold">.</span>
                    </h2>
                    <div class="grid grid-cols-3 gap-x-12 gap-y-10">
                      <div>
                        <h3 class="menu-title">Browse Jobs</h3>
                        <ul class="menu-list">
                          <li>Visa Sponsored Jobs</li>
                          <li>Urgent Hiring</li>
                          <li>Featured Employers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                }

                @if (openMenu === 'tools') {
                  <div class="animate-fade-in-up">
                    <h2 class="text-2xl font-light tracking-[0.1em] text-slate-800 mb-10 border-b border-slate-100 pb-4">
                      Career Tools & Calculators <span class="text-blue-600 font-bold">.</span>
                    </h2>
                    <div class="grid grid-cols-3 gap-x-12 gap-y-10">
                      <div>
                        <h3 class="menu-title">Calculators</h3>
                        <ul class="menu-list">
                          <li>Salary Calculator</li>
                          <li>ROI Calculator</li>
                          <li>Cost of Living</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                }

                @if (openMenu === 'pricing') {
                  <div class="animate-fade-in-up">
                    <h2 class="text-2xl font-light tracking-[0.1em] text-slate-800 mb-10 border-b border-slate-100 pb-4">
                      Investment & Packages <span class="text-blue-600 font-bold">.</span>
                    </h2>
                    <div class="grid grid-cols-3 gap-x-12 gap-y-10">
                      <div>
                        <h3 class="menu-title">Service Tiers</h3>
                        <ul class="menu-list">
                          <li>Basic Package</li>
                          <li>Premium Support</li>
                          <li>Success Plus</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                }

              </main>
            </div>
          </div>
        </div>
      }

    </header>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

    .font-main {
      font-family: 'Poppins', Helvetica, Arial, sans-serif;
    }

    .menu-title {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: #0f172a;
      padding-bottom: 10px;
      margin-bottom: 14px;
      border-bottom: 1px solid #f1f5f9;
      position: relative;
    }

    .menu-title::before {
      content: '';
      width: 4px;
      height: 4px;
      background: #2563eb;
      position: absolute;
      left: 0;
      top: 5px;
      transform: translateX(-12px);
    }

    .menu-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      font-size: 13.5px;
      color: #475569;
      font-weight: 500;
    }

    .menu-list li {
      cursor: pointer;
      transition: all 0.2s ease;
      display: inline-flex;
      width: fit-content;
    }

    .menu-list li:hover {
      color: #1d4ed8;
      transform: translateX(6px);
    }

    .animate-fade-in {
      animation: fadeIn 0.2s ease-out forwards;
    }

    .animate-fade-in-up {
      animation: fadeInUp 0.3s ease-out forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(5px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class Nav {
  openMenu = '';
  isMobileMenuOpen = false;

  setMenu(menu: string) {
    if (!this.isMobileMenuOpen) {
      this.openMenu = menu;
    }
  }

  toggleMenu(menu: string) {
    this.openMenu = this.openMenu === menu ? '' : menu;
  }

  closeMenu() {
    if (!this.isMobileMenuOpen) {
      this.openMenu = '';
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.openMenu = ''; 
    }
  }
}