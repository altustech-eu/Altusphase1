import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  template: `
    <header class="font-main bg-white sticky top-0 z-[9999] border-b border-[#e0e0e0]">

      <!-- Desktop Header -->
      <div class="hidden xl:flex h-[50px] items-center bg-white">

        <!-- Logo -->
        <div class="h-full w-[230px] flex items-center px-8 border-r border-[#e0e0e0]">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-[#0f62fe] text-white flex items-center justify-center text-sm font-bold">
              A
            </div>
            <div class="text-[16px] font-semibold tracking-tight text-[#161616]">
              Altus <span class="text-[#0f62fe]">Europass</span>
            </div>
          </div>
        </div>

        <!-- Main Menu -->
        <nav class="h-full flex items-center text-[15px] text-[#393939]">

          <button
            class="h-full px-5 flex items-center gap-2 border border-transparent hover:bg-[#f4f4f4] transition-colors"
            [class.border-[#0f62fe]]="openMenu === 'programs'"
            [class.bg-white]="openMenu === 'programs'"
            [class.text-[#161616]]="openMenu === 'programs'"
            (mouseenter)="setMenu('programs')"
            (click)="toggleMenu('programs')"
          >
            Programs
            <svg class="w-4 h-4 transition-transform" [class.rotate-180]="openMenu === 'programs'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          <button
            class="h-full px-5 flex items-center gap-2 border border-transparent hover:bg-[#f4f4f4] transition-colors"
            [class.border-[#0f62fe]]="openMenu === 'ausbildung'"
            [class.bg-white]="openMenu === 'ausbildung'"
            [class.text-[#161616]]="openMenu === 'ausbildung'"
            (mouseenter)="setMenu('ausbildung')"
            (click)="toggleMenu('ausbildung')"
          >
            Ausbildung
            <svg class="w-4 h-4 transition-transform" [class.rotate-180]="openMenu === 'ausbildung'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          <button
            class="h-full px-5 flex items-center gap-2 border border-transparent hover:bg-[#f4f4f4] transition-colors"
            [class.border-[#0f62fe]]="openMenu === 'jobs'"
            [class.bg-white]="openMenu === 'jobs'"
            [class.text-[#161616]]="openMenu === 'jobs'"
            (mouseenter)="setMenu('jobs')"
            (click)="toggleMenu('jobs')"
          >
            Jobs
            <svg class="w-4 h-4 transition-transform" [class.rotate-180]="openMenu === 'jobs'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          <button
            class="h-full px-5 flex items-center gap-2 border border-transparent hover:bg-[#f4f4f4] transition-colors"
            [class.border-[#0f62fe]]="openMenu === 'study-abroad'"
            [class.bg-white]="openMenu === 'study-abroad'"
            [class.text-[#161616]]="openMenu === 'study-abroad'"
            (mouseenter)="setMenu('study-abroad')"
            (click)="toggleMenu('study-abroad')"
          >
            Study Abroad
            <svg class="w-4 h-4 transition-transform" [class.rotate-180]="openMenu === 'study-abroad'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          <button
            class="h-full px-5 flex items-center gap-2 border border-transparent hover:bg-[#f4f4f4] transition-colors"
            [class.border-[#0f62fe]]="openMenu === 'tools'"
            [class.bg-white]="openMenu === 'tools'"
            [class.text-[#161616]]="openMenu === 'tools'"
            (mouseenter)="setMenu('tools')"
            (click)="toggleMenu('tools')"
          >
            Tools
            <svg class="w-4 h-4 transition-transform" [class.rotate-180]="openMenu === 'tools'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          <button
            class="h-full px-5 flex items-center gap-2 border border-transparent hover:bg-[#f4f4f4] transition-colors"
            [class.border-[#0f62fe]]="openMenu === 'pricing'"
            [class.bg-white]="openMenu === 'pricing'"
            [class.text-[#161616]]="openMenu === 'pricing'"
            (mouseenter)="setMenu('pricing')"
            (click)="toggleMenu('pricing')"
          >
            Pricing
            <svg class="w-4 h-4 transition-transform" [class.rotate-180]="openMenu === 'pricing'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          <button
            class="h-full px-5 flex items-center border border-transparent hover:bg-[#f4f4f4] transition-colors"
            (mouseenter)="closeMenu()"
          >
            Events
          </button>

          <button
            class="h-full px-5 flex items-center border border-transparent hover:bg-[#f4f4f4] transition-colors"
            (mouseenter)="closeMenu()"
          >
            About
          </button>

        </nav>

        <!-- Right Icons -->
        <div class="ml-auto h-full flex items-center text-[#393939]">

          <button class="h-full w-[48px] flex items-center justify-center hover:bg-[#f4f4f4]" aria-label="Search">
            <svg class="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="M21 21l-4.3-4.3"></path>
            </svg>
          </button>

          <button class="h-full px-5 text-[14px] font-medium hover:bg-[#f4f4f4]">
            All Search
          </button>

          <button class="h-full px-7 bg-[#0f62fe] text-white text-[14px] font-medium hover:bg-[#0043ce] transition-colors">
            Apply
          </button>

        </div>
      </div>

      <!-- Mobile Header -->
      <div class="xl:hidden h-[58px] flex items-center justify-between px-5 bg-white border-b border-[#e0e0e0]">

        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-[#0f62fe] text-white flex items-center justify-center text-sm font-bold">
            A
          </div>
          <div class="text-[15px] font-semibold text-[#161616]">
            Altus <span class="text-[#0f62fe]">Europass</span>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <button aria-label="Search">
            <svg class="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="M21 21l-4.3-4.3"></path>
            </svg>
          </button>

          <button class="text-2xl leading-none text-[#161616]" (click)="toggleMobileMenu()">
            @if (isMobileMenuOpen) { ✕ } @else { ☰ }
          </button>
        </div>

      </div>

      <!-- Mobile Menu -->
      @if (isMobileMenuOpen) {
        <div class="xl:hidden absolute top-[58px] left-0 right-0 bg-white shadow-2xl border-b border-[#e0e0e0] max-h-[86vh] overflow-y-auto z-[9999]">

          <nav class="flex flex-col text-[15px] text-[#161616]">

            <button class="mobile-nav-item" (click)="toggleMenu('programs')">
              Programs
              <span>⌄</span>
            </button>

            @if (openMenu === 'programs') {
              <div class="mobile-submenu">
                <a href="#">Ausbildung Programs</a>
                <a href="#">Study Programs</a>
                <a href="#">Work Programs</a>
              </div>
            }

            <button class="mobile-nav-item" (click)="toggleMenu('ausbildung')">
              Ausbildung
              <span>⌄</span>
            </button>

            @if (openMenu === 'ausbildung') {
              <div class="mobile-submenu">
                <a href="#">Nursing & Healthcare</a>
                <a href="#">IT & Software</a>
                <a href="#">Mechatronics</a>
              </div>
            }

            <button class="mobile-nav-item" (click)="toggleMenu('jobs')">
              Jobs
              <span>⌄</span>
            </button>

            @if (openMenu === 'jobs') {
              <div class="mobile-submenu">
                <a href="#">Visa Sponsored Jobs</a>
                <a href="#">Urgent Hiring</a>
                <a href="#">Featured Employers</a>
              </div>
            }

            <button class="mobile-nav-item" (click)="toggleMenu('study-abroad')">
              Study Abroad
              <span>⌄</span>
            </button>

            @if (openMenu === 'study-abroad') {
              <div class="mobile-submenu">
                <a href="#">Study in Germany</a>
                <a href="#">Study in Europe</a>
                <a href="#">University Shortlisting</a>
              </div>
            }

            <button class="mobile-nav-item" (click)="toggleMenu('tools')">
              Tools
              <span>⌄</span>
            </button>

            @if (openMenu === 'tools') {
              <div class="mobile-submenu">
                <a href="#">Salary Calculator</a>
                <a href="#">ROI Calculator</a>
                <a href="#">Cost of Living</a>
              </div>
            }

            <button class="mobile-nav-item" (click)="toggleMenu('pricing')">
              Pricing
              <span>⌄</span>
            </button>

            @if (openMenu === 'pricing') {
              <div class="mobile-submenu">
                <a href="#">Basic Package</a>
                <a href="#">Premium Support</a>
                <a href="#">Success Plus</a>
              </div>
            }

            <button class="mobile-nav-item">Events</button>
            <button class="mobile-nav-item">About</button>

            <div class="p-5">
              <button class="w-full bg-[#0f62fe] text-white py-4 text-[15px] font-medium hover:bg-[#0043ce]">
                Apply Now
              </button>
            </div>

          </nav>

        </div>
      }

      <!-- Desktop IBM Style Mega Menu -->
      @if (openMenu !== '' && !isMobileMenuOpen) {
        <div
          class="hidden xl:block absolute left-0 right-0 top-[50px] bg-white border-b border-[#e0e0e0] shadow-[0_8px_20px_rgba(0,0,0,0.12)] z-[9998]"
          (mouseleave)="closeMenu()"
        >

          <div class="max-w-[1400px] mx-auto">
            <div class="grid grid-cols-[310px_1fr] min-h-[420px]">

              <!-- Left Category Rail -->
              <aside class="border-r border-[#e0e0e0] bg-white flex flex-col justify-between">

                <div class="pt-5">

                  <button
                    class="mega-rail-item"
                    [class.active-rail]="openMenu === 'programs'"
                    (mouseenter)="setMenu('programs')"
                  >
                    Programs
                  </button>

                  <button
                    class="mega-rail-item"
                    [class.active-rail]="openMenu === 'ausbildung'"
                    (mouseenter)="setMenu('ausbildung')"
                  >
                    Ausbildung
                  </button>

                  <button
                    class="mega-rail-item"
                    [class.active-rail]="openMenu === 'jobs'"
                    (mouseenter)="setMenu('jobs')"
                  >
                    Jobs
                  </button>

                  <button
                    class="mega-rail-item"
                    [class.active-rail]="openMenu === 'study-abroad'"
                    (mouseenter)="setMenu('study-abroad')"
                  >
                    Study Abroad
                  </button>

                  <button
                    class="mega-rail-item"
                    [class.active-rail]="openMenu === 'tools'"
                    (mouseenter)="setMenu('tools')"
                  >
                    Tools
                  </button>

                  <button
                    class="mega-rail-item"
                    [class.active-rail]="openMenu === 'pricing'"
                    (mouseenter)="setMenu('pricing')"
                  >
                    Pricing
                  </button>

                </div>

                <button class="h-[56px] bg-[#0f62fe] text-white px-6 text-[15px] flex items-center justify-between hover:bg-[#0043ce] transition-colors">
                  Explore all products
                  <span class="text-xl leading-none">→</span>
                </button>

              </aside>

              <!-- Right Content Panel -->
              <main class="bg-white px-10 py-7">

                @if (openMenu === 'programs') {
                  <div class="mega-content">
                    <h2 class="mega-heading">
                      Program Discovery Engine <span>→</span>
                    </h2>

                    <div class="mega-grid">
                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Ausbildung Programs</a>
                        <p>Vocational career pathways with German language and employer matching support</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Study Programs</a>
                        <p>University admission pathways for undergraduate, postgraduate, and pathway programs</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Work Programs</a>
                        <p>International job search, recruiter outreach, and relocation support programs</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Ausbildung in Germany</a>
                        <p>Dual vocational training route for students and young professionals</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Healthcare Ausbildung</a>
                        <p>Nursing and healthcare pathway with structured language preparation</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">IT Ausbildung</a>
                        <p>Technology-oriented vocational route for software and digital careers</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Hospitality Ausbildung</a>
                        <p>Hotel, culinary, and service sector training opportunities in Germany</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Public University</a>
                        <p>Admission advisory for public university options in Germany and Europe</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Private University</a>
                        <p>Premium study abroad admission support with flexible intake options</p>
                      </div>
                    </div>
                  </div>
                }

                @if (openMenu === 'ausbildung') {
                  <div class="mega-content">
                    <h2 class="mega-heading">
                      Ausbildung Opportunities <span>→</span>
                    </h2>

                    <div class="mega-grid">
                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Nursing & Healthcare</a>
                        <p>Structured healthcare training pathway with language, interview, and placement readiness</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">IT & Software</a>
                        <p>Digital and software-oriented vocational training pathways for Germany</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Mechatronics</a>
                        <p>Technical training route for industrial, automotive, and automation sectors</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Hospitality</a>
                        <p>Hotel, restaurant, and guest service career pathway through Ausbildung</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Logistics</a>
                        <p>Warehouse, supply chain, and logistics sector training opportunities</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Electrical & Electronics</a>
                        <p>Technical vocational training for electrical and electronics occupations</p>
                      </div>
                    </div>
                  </div>
                }

                @if (openMenu === 'jobs') {
                  <div class="mega-content">
                    <h2 class="mega-heading">
                      International Job Search <span>→</span>
                    </h2>

                    <div class="mega-grid">
                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Visa Sponsored Jobs</a>
                        <p>International opportunities where employer and mobility readiness are aligned</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Urgent Hiring</a>
                        <p>Fast-moving job openings supported by recruiter coordination</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Featured Employers</a>
                        <p>Employer-backed openings across Europe, Germany, and selected global markets</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Nursing Jobs</a>
                        <p>Healthcare job pathways with language, documentation, and recognition support</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Skilled IT Jobs</a>
                        <p>Technology job search support with profile positioning and recruiter outreach</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Hospitality Jobs</a>
                        <p>Hotel, culinary, and service sector hiring routes for international candidates</p>
                      </div>
                    </div>
                  </div>
                }

                @if (openMenu === 'study-abroad') {
                  <div class="mega-content">
                    <h2 class="mega-heading">
                      Global Education Pathways <span>→</span>
                    </h2>

                    <div class="mega-grid">
                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Study in Germany</a>
                        <p>University admission route with documentation, visa, and settlement readiness</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Study in Europe</a>
                        <p>Multi-country program discovery and university shortlisting support</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Study in Italy</a>
                        <p>Admission pathway for Italian universities with scholarship and visa support</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Bachelors Programs</a>
                        <p>Undergraduate program selection and admission guidance</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Masters Programs</a>
                        <p>Postgraduate pathway planning for academic and career outcomes</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">University Shortlisting</a>
                        <p>Profile-based university mapping and application planning</p>
                      </div>
                    </div>
                  </div>
                }

                @if (openMenu === 'tools') {
                  <div class="mega-content">
                    <h2 class="mega-heading">
                      Career Tools & Calculators <span>→</span>
                    </h2>

                    <div class="mega-grid">
                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Salary Calculator</a>
                        <p>Estimate expected earning potential across selected career pathways</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">ROI Calculator</a>
                        <p>Compare investment, timeline, and expected career outcomes</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Cost of Living</a>
                        <p>Plan destination-country living expenses and monthly financial readiness</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Career Pathway Planner</a>
                        <p>Map education, language, skill, and migration readiness milestones</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">German Level Checker</a>
                        <p>Assess language readiness for Ausbildung, jobs, and study routes</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Profile Assessment</a>
                        <p>Understand suitability, gaps, and next-step readiness</p>
                      </div>
                    </div>
                  </div>
                }

                @if (openMenu === 'pricing') {
                  <div class="mega-content">
                    <h2 class="mega-heading">
                      Investment & Packages <span>→</span>
                    </h2>

                    <div class="mega-grid">
                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Basic Package</a>
                        <p>Essential advisory and documentation support for self-driven candidates</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Premium Support</a>
                        <p>Enhanced guidance with dedicated advisor and structured milestone tracking</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Success Plus</a>
                        <p>End-to-end support model with stronger execution handholding</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Flexible Payment Options</a>
                        <p>Installment and stage-based payment configuration for different programs</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Service Comparison</a>
                        <p>Compare modules, quality tiers, service depth, and deliverables</p>
                      </div>

                      <div class="mega-link-group">
                        <a class="mega-product-title" href="#">Configure Package</a>
                        <p>Select modules based on readiness, budget, and required support level</p>
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
    .font-main {
      font-family: 'Poppins', Helvetica, Arial, sans-serif;
    }

    .mega-rail-item {
      width: 100%;
      min-height: 40px;
      padding: 10px 18px;
      text-align: left;
      font-size: 15px;
      color: #393939;
      background: #ffffff;
      transition: background 0.15s ease, color 0.15s ease;
    }

    .mega-rail-item:hover {
      background: #f4f4f4;
      color: #161616;
    }

    .active-rail {
      background: #e0e0e0 !important;
      color: #161616 !important;
      font-weight: 500;
    }

    .mega-heading {
      font-size: 30px;
      line-height: 1.2;
      font-weight: 400;
      color: #0f62fe;
      margin-bottom: 34px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      letter-spacing: -0.02em;
    }

    .mega-heading span {
      font-size: 30px;
      line-height: 1;
    }

    .mega-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      column-gap: 70px;
      row-gap: 26px;
      max-width: 980px;
    }

    .mega-link-group {
      max-width: 260px;
    }

    .mega-product-title {
      display: inline-block;
      color: #393939;
      font-size: 15px;
      line-height: 1.25;
      font-weight: 600;
      margin-bottom: 8px;
      text-decoration: none;
      transition: color 0.15s ease;
    }

    .mega-product-title:hover {
      color: #0f62fe;
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    .mega-link-group p {
      color: #525252;
      font-size: 14px;
      line-height: 1.35;
      font-weight: 400;
      margin: 0;
    }

    .mobile-nav-item {
      min-height: 52px;
      padding: 0 20px;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: left;
      background: #ffffff;
    }

    .mobile-nav-item:hover {
      background: #f4f4f4;
    }

    .mobile-submenu {
      background: #f4f4f4;
      padding: 12px 28px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      font-size: 14px;
      color: #525252;
      border-bottom: 1px solid #e0e0e0;
    }

    .mobile-submenu a:hover {
      color: #0f62fe;
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