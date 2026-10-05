document.addEventListener('DOMContentLoaded', () => {
  const d = BUSINESS_DATA;
  const links = {
    phone: `tel:${d.contacts.phoneRaw}`,
    whatsapp: `https://wa.me/${d.contacts.whatsapp}?text=${encodeURIComponent(d.contacts.whatsappMessage)}`,
    instagram: d.social.instagramUrl,
    route: d.contacts.twoGisUrl
  };
  const text = {
    shortName:d.business.shortName, heroName:d.business.shortName, businessName:d.business.name,
    subtitle:d.business.subtitle, slogan:d.business.slogan, aboutTitle:d.business.aboutTitle,
    aboutText:d.business.aboutText, city:d.business.city, address:d.contacts.address,
    phone:d.contacts.phone, instagram:d.social.instagram, days:d.schedule.days,
    hours:`${d.schedule.open}–${d.schedule.close}`, year:new Date().getFullYear()
  };
  document.querySelectorAll('[data-text]').forEach(el => el.textContent = text[el.dataset.text] ?? '');
  document.querySelectorAll('[data-cta]').forEach(el => el.textContent = d.cta[el.dataset.cta] ?? '');
  document.querySelectorAll('[data-link]').forEach(el => { el.href=links[el.dataset.link]; if(['whatsapp','instagram','route'].includes(el.dataset.link)){el.target='_blank';el.rel='noopener noreferrer';} });
  document.getElementById('hero-image').src=d.images.hero; document.getElementById('about-image').src=d.images.about; document.getElementById('promo-image').src=d.images.promo;
  document.title=d.business.seoTitle; document.querySelector('meta[name="description"]').content=d.business.seoDescription; document.querySelector('link[rel="canonical"]').href=d.business.siteUrl;
  document.querySelector('meta[property="og:title"]').content=d.business.name;document.querySelector('meta[property="og:description"]').content=d.business.description;document.querySelector('meta[property="og:image"]').content=new URL(d.images.og,d.business.siteUrl).href;
  document.getElementById('schema').textContent=JSON.stringify({"@context":"https://schema.org","@type":"CafeOrCoffeeShop",name:d.business.name,description:d.business.description,url:d.business.siteUrl,telephone:d.contacts.phone,address:{"@type":"PostalAddress",streetAddress:d.contacts.address,addressLocality:d.business.city,addressCountry:"KG"},openingHoursSpecification:{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],opens:d.schedule.open,closes:d.schedule.close},sameAs:[d.social.instagramUrl],image:new URL(d.images.hero,d.business.siteUrl).href});

  document.getElementById('stats').innerHTML=d.business.stats.map(s=>`<div class="stat reveal"><strong>${s.value}</strong><span>${s.label}</span></div>`).join('');
  const tabs=document.getElementById('menu-tabs'),list=document.getElementById('menu-list');
  tabs.innerHTML=d.menuCategories.map((c,i)=>`<button class="menu-tab" role="tab" aria-selected="${i===0}" data-category="${c.id}">${c.label}</button>`).join('');
  function renderMenu(category){list.innerHTML=d.menu.filter(x=>x.category===category).map((x,i)=>`<article class="menu-item" style="animation-delay:${i*55}ms"><div><h3>${x.name}</h3><p>${x.description}</p></div><span class="menu-price">${x.price} ${d.business.currency}</span></article>`).join('');}
  renderMenu(d.menuCategories[0].id); tabs.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;tabs.querySelectorAll('button').forEach(x=>x.setAttribute('aria-selected','false'));b.setAttribute('aria-selected','true');renderMenu(b.dataset.category)});
  document.getElementById('popular-grid').innerHTML=d.popular.map(x=>`<article class="popular-card reveal"><img src="${x.image}" alt="${x.name}" loading="lazy" style="object-position:${x.position||'center'}"><div class="popular-info"><span class="badge">${x.badge}</span><h3>${x.name}</h3><p>${x.note}</p><span class="popular-price">${x.price} ${d.business.currency}</span></div></article>`).join('');
  const promo=d.promotions[0]; document.getElementById('promo-eyebrow').textContent=promo.eyebrow;document.getElementById('promo-title').textContent=promo.title;document.getElementById('promo-text').textContent=promo.text;document.getElementById('promo-cta').textContent=promo.cta;
  document.getElementById('gallery-grid').innerHTML=d.gallery.map((x,i)=>`<button class="gallery-item reveal" data-index="${i}" aria-label="Открыть фото: ${x.caption}"><img src="${x.src}" alt="${x.alt}" loading="lazy"><span>${x.caption}</span></button>`).join('');
  document.getElementById('reviews-track').innerHTML=d.reviews.map(x=>`<article class="review"><div class="review-stars" aria-label="Оценка ${x.rating} из 5">${'★'.repeat(x.rating)}</div><blockquote>«${x.text}»</blockquote><footer>${x.name} · Бишкек</footer></article>`).join('');

  const header=document.getElementById('header'); addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>30),{passive:true});
  const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav'); toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'Открыть меню':'Закрыть меню');nav.classList.toggle('open',!open)});nav.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');nav.classList.remove('open')});
  const observer=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){x.target.classList.add('visible');observer.unobserve(x.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches){addEventListener('scroll',()=>{const hero=document.getElementById('hero-image');if(scrollY<innerHeight)hero.style.transform=`scale(1.04) translateY(${scrollY*.07}px)`},{passive:true})}
  const lb=document.querySelector('.lightbox'),lbImg=lb.querySelector('img'),lbCap=lb.querySelector('figcaption');let current=0;
  function show(i){current=(i+d.gallery.length)%d.gallery.length;lbImg.src=d.gallery[current].src;lbImg.alt=d.gallery[current].alt;lbCap.textContent=d.gallery[current].caption;lb.classList.add('open');lb.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';lb.querySelector('.lightbox-close').focus()}
  function close(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');document.body.style.overflow=''}
  document.getElementById('gallery-grid').addEventListener('click',e=>{const b=e.target.closest('.gallery-item');if(b)show(+b.dataset.index)});lb.querySelector('.lightbox-close').onclick=close;lb.querySelector('.lightbox-prev').onclick=()=>show(current-1);lb.querySelector('.lightbox-next').onclick=()=>show(current+1);lb.addEventListener('click',e=>{if(e.target===lb)close()});addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowRight')show(current+1);if(e.key==='ArrowLeft')show(current-1)});
});
