// Complete Modal Data & Design Matching Friend's UI Template
const featureDetails = {
  curated: {
    title: "Curated Experiences",
    badge: "Exclusive & Authentic",
    bgClass: "bg-indigo-50 text-indigo-600",
    badgeClass: "bg-indigo-100/80 text-indigo-700",
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
    desc: "We combine handpicked boutique resort stays with unique local travel experiences to ensure your vacation is both luxurious and culturally immersive.",
    
    htmlContent: `
      <!-- Top Overview Box -->
      <div class="bg-indigo-50/50 rounded-2xl p-5 border border-indigo-100/60">
        <h4 class="font-bold text-slate-800 text-base mb-1.5 flex items-center gap-2">
          <span>📖</span> Complete Travel & Villa Curation
        </h4>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
          From finding the best luxury eco-resorts to uncovering hidden local experiences, our curators give you everything you need for effortless planning.
        </p>
      </div>

      <!-- Feature Grid -->
      <div>
        <h4 class="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3">
          🌟 Featured Highlights & Hotel Stays
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
            <div class="font-bold text-slate-800 text-sm mb-1">⛵ Private Yacht Charters</div>
            <p class="text-xs text-slate-500 leading-normal">Cruise hidden bays with private onboard dining prepared by local chefs.</p>
          </div>
          <div class="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
            <div class="font-bold text-slate-800 text-sm mb-1">🏡 Heritage Villa Stays</div>
            <p class="text-xs text-slate-500 leading-normal">Stay at unique architectural retreats nestled in prime natural landscapes.</p>
          </div>
          <div class="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
            <div class="font-bold text-slate-800 text-sm mb-1">🌿 Artisan & Culinary Tours</div>
            <p class="text-xs text-slate-500 leading-normal">Hands-on cooking and craft workshops hosted by local masters.</p>
          </div>
          <div class="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
            <div class="font-bold text-slate-800 text-sm mb-1">☕ Secret Nature Eco-Treks</div>
            <p class="text-xs text-slate-500 leading-normal">Guided access to private waterfalls, organic coffee farms, and scenic views.</p>
          </div>
        </div>
      </div>
    `
  },

  pricing: {
    title: "Transparent Pricing",
    badge: "Direct Rates",
    bgClass: "bg-emerald-50 text-emerald-600",
    badgeClass: "bg-emerald-100/80 text-emerald-700",
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5a1 1 0 01.707.293l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A1 1 0 013 12V7a4 4 0 014-4z"></path></svg>`,
    desc: "No hidden resort fees or unexpected tour charges. Enjoy direct partner rates for both luxury hotel stays and guided tour packages.",
    
    htmlContent: `
      <div class="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100/60">
        <h4 class="font-bold text-slate-800 text-base mb-1.5 flex items-center gap-2">
          <span>🏷️</span> Direct Partnership Advantage
        </h4>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
          By partnering directly with boutique hotels, private drivers, and tour operators, we eliminate middleman markups.
        </p>
      </div>

      <div>
        <h4 class="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3">
          📊 Transparent Benefits
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
            <div class="font-bold text-slate-800 text-sm mb-1">💵 Price Match Guarantee</div>
            <p class="text-xs text-slate-500 leading-normal">Found a lower price elsewhere for the same resort? We match it instantly.</p>
          </div>
          <div class="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
            <div class="font-bold text-slate-800 text-sm mb-1">🚫 No Hidden Fees</div>
            <p class="text-xs text-slate-500 leading-normal">All local taxes, service charges, and entrance fees are detailed upfront.</p>
          </div>
          <div class="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
            <div class="font-bold text-slate-800 text-sm mb-1">🔄 Flexible Cancellation</div>
            <p class="text-xs text-slate-500 leading-normal">Clear, hassle-free refund policies for hotel bookings and tour activities.</p>
          </div>
          <div class="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
            <div class="font-bold text-slate-800 text-sm mb-1">🎁 Bundle Savings</div>
            <p class="text-xs text-slate-500 leading-normal">Save up to 25% when booking accommodations with tour packages.</p>
          </div>
        </div>
      </div>
    `
  },

  guides: {
    title: "Traveler Guides",
    badge: "Updated Weekly",
    bgClass: "bg-indigo-50 text-indigo-600",
    badgeClass: "bg-indigo-100/80 text-indigo-700",
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
    desc: "Explore insider destination guides, honest hotel reviews, seasonal travel weather advice, and curated itineraries written by local travel experts.",
    
    htmlContent: `
      <div class="bg-indigo-50/50 rounded-2xl p-5 border border-indigo-100/60">
        <h4 class="font-bold text-slate-800 text-base mb-1.5 flex items-center gap-2">
          <span>📖</span> Complete Travel Intelligence
        </h4>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
          From finding the best luxury eco-resorts to uncovering hidden street food gems, our weekly guides give you everything you need for effortless planning.
        </p>
      </div>

      <div>
        <h4 class="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3">
          📚 Featured Guides & Hotel Reviews
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
            <div class="font-bold text-slate-800 text-sm mb-1">🏨 Top 10 Villa Resorts</div>
            <p class="text-xs text-slate-500 leading-normal">Comprehensive reviews of luxury private pool villas and boutique stays.</p>
          </div>
          <div class="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
            <div class="font-bold text-slate-800 text-sm mb-1">🗺️ 5-Day Island Travel Route</div>
            <p class="text-xs text-slate-500 leading-normal">Day-by-day itineraries covering secret beaches, dining spots, and transfers.</p>
          </div>
          <div class="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
            <div class="font-bold text-slate-800 text-sm mb-1">🍜 Local Foodie Map</div>
            <p class="text-xs text-slate-500 leading-normal">Curated dining recommendations from authentic local stalls to fine dining.</p>
          </div>
          <div class="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
            <div class="font-bold text-slate-800 text-sm mb-1">☀️ Seasonal Weather Advice</div>
            <p class="text-xs text-slate-500 leading-normal">Know when and where to travel based on sea conditions and local seasons.</p>
          </div>
        </div>
      </div>
    `
  },

  safe: {
    title: "Verified & Safe Travel",
    badge: "24/7 Support",
    bgClass: "bg-amber-50 text-amber-600",
    badgeClass: "bg-amber-100/80 text-amber-700",
    icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`,
    desc: "Your comfort and safety are paramount. Every partner hotel, private driver, and tour guide undergoes stringent quality and safety background checks.",
    
    htmlContent: `
      <div class="bg-amber-50/50 rounded-2xl p-5 border border-amber-100/60">
        <h4 class="font-bold text-slate-800 text-base mb-1.5 flex items-center gap-2">
          <span>🛡️</span> Complete Travel Protection
        </h4>
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Travel with total confidence. We only work with licensed boutique hotels, certified local guides, and insured transport providers.
        </p>
      </div>

      <div>
        <h4 class="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3">
          🔒 Verification Pillars
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
            <div class="font-bold text-slate-800 text-sm mb-1">🏨 Audited Accommodations</div>
            <p class="text-xs text-slate-500 leading-normal">Hygienic, certified, and vetted hotel stays with real guest reviews.</p>
          </div>
          <div class="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
            <div class="font-bold text-slate-800 text-sm mb-1">🚑 24/7 On-Trip Assistance</div>
            <p class="text-xs text-slate-500 leading-normal">Dedicated concierge team available via live chat or phone during your trip.</p>
          </div>
          <div class="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
            <div class="font-bold text-slate-800 text-sm mb-1">🚘 Insured Transfers</div>
            <p class="text-xs text-slate-500 leading-normal">All private vehicles and boat transfers include full passenger coverage.</p>
          </div>
          <div class="p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
            <div class="font-bold text-slate-800 text-sm mb-1">⭐ Verified Reviews</div>
            <p class="text-xs text-slate-500 leading-normal">100% genuine feedback from guests who have completed their stays.</p>
          </div>
        </div>
      </div>
    `
  }
};

document.addEventListener('DOMContentLoaded', () => {
  fetch('components/modal.html')
    .then(res => res.text())
    .then(html => {
      document.body.insertAdjacentHTML('beforeend', html);
      
      const modal = document.getElementById('featureModal');
      if (modal) {
        modal.addEventListener('click', function(e) {
          if (e.target === this) closeFeatureModal();
        });
      }
    });
});

function openFeatureModal(key) {
  const data = featureDetails[key];
  if (!data) return;

  const modal = document.getElementById('featureModal');
  const modalBox = document.getElementById('modalBox');
  const iconContainer = document.getElementById('modalIconContainer');
  const badge = document.getElementById('modalBadge');

  if (!modal) return;

  iconContainer.className = `w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${data.bgClass}`;
  iconContainer.innerHTML = data.icon;
  
  badge.className = `inline-block px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase ${data.badgeClass}`;
  badge.textContent = data.badge;

  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalDescription').textContent = data.desc;
  document.getElementById('modalBodyCustom').innerHTML = data.htmlContent;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  setTimeout(() => {
    modalBox.classList.remove('scale-95');
    modalBox.classList.add('scale-100');
  }, 10);
}

function closeFeatureModal() {
  const modal = document.getElementById('featureModal');
  const modalBox = document.getElementById('modalBox');

  if (!modal) return;

  modalBox.classList.remove('scale-100');
  modalBox.classList.add('scale-95');

  setTimeout(() => {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
  }, 150);
}