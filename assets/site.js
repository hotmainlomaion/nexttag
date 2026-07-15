/* NEXT TAG — shared site chrome: mega-menu nav, footer, reveal, mobile, QR */
(function(){
  var IC = {
    mark:'<svg class="ig mk" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h3.6a3 3 0 0 1 3 3v3.6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3.5.4a1 1 0 0 0-1 1v2.8a1 1 0 0 0 1 1h2.8a1 1 0 0 0 1-1V7.4a1 1 0 0 0-1-1H6.5Z"/><rect x="14.6" y="3" width="6.4" height="6.4" rx="1.8"/><rect x="3" y="14.6" width="6.4" height="6.4" rx="1.8"/><rect x="14.6" y="14.6" width="2.9" height="2.9" rx=".9"/><rect x="18.1" y="18.1" width="2.9" height="2.9" rx=".9"/></svg>',
    recon:'<svg class="ic" width="20" height="20" viewBox="0 0 24 24"><path d="M4 9h12M4 9l3-3M4 9l3 3"/><path d="M20 15H8m12 0l-3-3m3 3l-3 3"/></svg>',
    layers:'<svg class="ic" width="20" height="20" viewBox="0 0 24 24"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5M3 16.5l9 5 9-5"/></svg>',
    qr:'<svg class="ic" width="20" height="20" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M14.5 14.5h2.5v2.5M21 14.5v6.5h-6.5"/></svg>',
    chain:'<svg class="ic" width="20" height="20" viewBox="0 0 24 24"><path d="M9.5 13.5a4 4 0 0 0 5.7 0l2.8-2.8a4 4 0 0 0-5.7-5.7l-1.1 1.1"/><path d="M14.5 10.5a4 4 0 0 0-5.7 0L6 13.3a4 4 0 0 0 5.7 5.7l1.1-1.1"/></svg>',
    plug:'<svg class="ic" width="20" height="20" viewBox="0 0 24 24"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M6 8.5v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3M12 13.5v2"/></svg>',
    spark:'<svg class="ic" width="20" height="20" viewBox="0 0 24 24"><path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3z"/><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z"/></svg>',
    beauty:'<svg class="ic" width="20" height="20" viewBox="0 0 24 24"><rect x="8.5" y="9" width="7" height="12" rx="1.6"/><path d="M9.6 9 11 3.6l3.4 1L13.4 9"/></svg>',
    pharma:'<svg class="ic" width="20" height="20" viewBox="0 0 24 24"><rect x="3.5" y="8.5" width="17" height="7" rx="3.5"/><path d="M12 8.5v7"/></svg>',
    suppl:'<svg class="ic" width="20" height="20" viewBox="0 0 24 24"><path d="M5 19c0-8 6-13 14-13 0 8-5 14-13 14-1 0-1-1-1-1z"/><path d="M8 17C11 13 14 11 18 9.5"/></svg>',
    fashion:'<svg class="ic" width="20" height="20" viewBox="0 0 24 24"><path d="M6.5 8h11l-1 12.5h-9L6.5 8z"/><path d="M9.5 8V6a2.5 2.5 0 0 1 5 0v2"/></svg>',
    retail:'<svg class="ic" width="20" height="20" viewBox="0 0 24 24"><path d="M3 10 12 4l9 6"/><path d="M5 10v10h14V10"/><rect x="9" y="13.5" width="6" height="6.5"/></svg>',
    animal:'<svg class="ic" width="20" height="20" viewBox="0 0 24 24"><circle cx="7" cy="10" r="1.7"/><circle cx="12" cy="8" r="1.7"/><circle cx="17" cy="10" r="1.7"/><path d="M8.5 16.5c0-2.2 1.6-3.8 3.5-3.8s3.5 1.6 3.5 3.8-1.6 2.7-3.5 2.7-3.5-.5-3.5-2.7z"/></svg>',
    arr:'<svg class="ic" width="16" height="16" viewBox="0 0 24 24"><line x1="4" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>',
    chev:'<svg class="ic chev" width="13" height="13" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>'
  };
  var SOL = [
    {h:'solution-reconciliation.html', ic:'recon', t:'유통 통제 · 대조 엔진', d:'출고–시장 대조로 권역 이탈·불법 병행유통을 실시간 판정하고 유출원을 역추적합니다.'},
    {h:'solution-logistics.html', ic:'layers', t:'물류 검증 · 계층형 그룹핑', d:'상위 포장 1스캔으로 내부를 전수검수하고 표적 리콜·반품 진위를 검증합니다.'},
    {h:'solution-authentication.html', ic:'qr', t:'정품 인증 · 난수 QR', d:'256-bit 개별 난수 시리얼로 복제를 차단하고, 앱 없이 카메라로 즉시 인증합니다.'},
    {h:'solution-ledger.html', ic:'chain', t:'블록체인 감사 · WORM 원장', d:'모든 이벤트를 수정 불가능한 원장에 기록해 규제·감사 소명에 즉시 대응합니다.'},
    {h:'solution-integration.html', ic:'plug', t:'시스템 연동 · API 오버레이', d:'기존 ERP/WMS/OMS를 교체하지 않고 위에 얹는 무중단 표준 API 연동입니다.'},
    {h:'solution-intelligence.html', ic:'spark', t:'데이터 인텔리전스', n:1, d:'동의 기반 스캔 데이터를 1st-party 자산으로 적재해 CRM·리타겟팅에 재활용합니다.'}
  ];
  var IND = [
    {h:'industry-beauty.html', ic:'beauty', t:'화장품 · 뷰티'},
    {h:'industry-pharma.html', ic:'pharma', t:'제약 · 헬스케어'},
    {h:'industry-supplement.html', ic:'suppl', t:'건강기능식품'},
    {h:'industry-fashion.html', ic:'fashion', t:'패션 · 잡화'},
    {h:'industry-retail.html', ic:'retail', t:'리테일 · 물류'},
    {h:'industry-animal-health.html', ic:'animal', t:'동물용의약품'}
  ];
  var RES = [['resources.html','블로그'],['resources.html','리포트'],['resources.html','용어집'],['resources.html','뉴스레터']];
  var COM = [['company.html','회사 소개'],['company.html#leadership','리더십'],['company.html#news','뉴스'],['company.html#partner','파트너십']];

  function megaItem(s){
    return '<a class="mega-item" href="'+s.h+'"><span class="mi-ic">'+IC[s.ic]+'</span><span><h6>'+s.t+(s.n?' <span class="mega-new">NEW</span>':'')+'</h6><p>'+s.d+'</p></span></a>';
  }
  function ddItem(arr){ return '<a href="'+arr[0]+'"><span class="ddi">'+IC.arr+'</span>'+arr[1]+'</a>'; }
  function indItem(s){ return '<a href="'+s.h+'"><span class="ddi">'+IC[s.ic]+'</span>'+s.t+'</a>'; }

  var nav =
  '<div class="topbar"><span class="new">NEW</span>제품마다 단 하나의 이름 — 난수 QR로 출고 이후에도 놓치지 않습니다</div>'+
  '<header class="nav"><div class="wrap nav-in">'+
    '<a class="brand" href="index.html" aria-label="NEXT TAG 홈">'+IC.mark+'<span class="wordmark">NEXT TAG</span></a>'+
    '<ul class="nav-menu">'+
      '<li><button class="nav-trigger">제품소개 '+IC.chev+'</button><div class="mega"><div class="mega-inner">'+
        '<div class="mega-grid">'+SOL.map(megaItem).join('')+'</div>'+
        '<div class="mega-sep"></div><a class="mega-foot" href="index.html#how"><span class="mi-ic">'+IC.arr+'</span><span><h6>전체 솔루션 살펴보기</h6><p>6대 역량을 하나의 데이터 파이프라인으로.</p></span></a>'+
      '</div></div></li>'+
      '<li><button class="nav-trigger">산업별 '+IC.chev+'</button><div class="mega dd"><div class="mega-inner"><div class="dd-list">'+IND.map(indItem).join('')+'</div></div></div></li>'+
      '<li><a href="customers.html">고객사례</a></li>'+
      '<li><button class="nav-trigger">리소스 '+IC.chev+'</button><div class="mega dd"><div class="mega-inner"><div class="dd-list">'+RES.map(ddItem).join('')+'</div></div></div></li>'+
      '<li><button class="nav-trigger">회사 '+IC.chev+'</button><div class="mega dd"><div class="mega-inner"><div class="dd-list">'+COM.map(ddItem).join('')+'</div></div></div></li>'+
    '</ul>'+
    '<div class="nav-right"><a class="btn btn-ghost nav-dash" href="https://nexttag.ili.bz/">시작하기</a><a class="btn btn-blue nav-cta" href="contact.html">도입 문의하기</a><button class="burger" aria-label="메뉴"><i></i><i></i><i></i></button></div>'+
  '</div></header>'+
  '<div class="m-menu" id="mMenu">'+
    '<div class="m-top"><a class="btn btn-ghost" href="https://nexttag.ili.bz/" style="width:100%;justify-content:center">시작하기</a></div>'+
    '<div class="m-group"><span>제품소개</span>'+SOL.map(function(s){return '<a href="'+s.h+'">'+s.t+'</a>';}).join('')+'</div>'+
    '<div class="m-group"><span>산업별</span>'+IND.map(function(s){return '<a href="'+s.h+'">'+s.t+'</a>';}).join('')+'</div>'+
    '<div class="m-group"><span>회사 · 리소스</span><a href="customers.html">고객사례</a><a href="resources.html">리소스</a><a href="company.html">회사 소개</a></div>'+
    '<div style="padding:20px 4px"><a class="btn btn-blue" href="contact.html" style="width:100%;justify-content:center">도입 문의하기</a></div>'+
  '</div>';

  var foot =
  '<footer class="site"><div class="wrap"><div class="fgrid">'+
    '<div><div class="fbrand">'+IC.mark+'<span class="wordmark">NEXT TAG</span></div><p class="fdesc">정품인증 그 이후, 공급망 운영을 설계하는 난수 QR 기반 공급망 디지털 트윈 운영통제 플랫폼.</p></div>'+
    '<div><h5>솔루션</h5>'+SOL.map(function(s){return '<a href="'+s.h+'">'+s.t.split(' · ')[0]+'</a>';}).join('')+'</div>'+
    '<div><h5>산업별</h5>'+IND.map(function(s){return '<a href="'+s.h+'">'+s.t+'</a>';}).join('')+'</div>'+
    '<div><h5>회사</h5><a href="customers.html">고객사례</a><a href="company.html">회사 소개</a><a href="resources.html">리소스</a><a href="contact.html">도입 문의</a></div>'+
    '<div><h5>제공사</h5><span class="ftxt">주식회사 프로젝트 제이앤제이</span><span class="ftxt">공동대표 전태민 · 정현식</span><span class="ftxt">사업자등록번호 209-87-03546</span><a href="mailto:jyh@fourxfour.app">jyh@fourxfour.app</a></div>'+
  '</div><div class="fbot"><span>© 2026 PROJECT J&amp;J. ALL RIGHTS RESERVED.</span><span>경기도 고양시 덕양구 통일로 140, A동 (삼송테크노밸리)</span></div></div></footer>';

  function inject(){
    var nr=document.getElementById('nav-root'); if(nr) nr.innerHTML=nav;
    var fr=document.getElementById('footer-root'); if(fr) fr.innerHTML=foot;
    function fitApp(){document.querySelectorAll('.appframe iframe').forEach(function(f){var w=f.parentElement.clientWidth;if(w>0)f.style.transform='scale('+(w/1320)+')';});}
    window.addEventListener('resize',fitApp);window.addEventListener('load',fitApp);setTimeout(fitApp,60);
    // active nav state
    var pageMap={solution:0,industry:1,customers:2,resources:3,company:4};
    var pg=document.body.dataset.page, lis=document.querySelectorAll('.nav-menu>li');
    if(pg in pageMap && lis[pageMap[pg]]) lis[pageMap[pg]].classList.add('on');
    // mobile menu
    var b=document.querySelector('.burger'), m=document.getElementById('mMenu');
    if(b&&m){ b.addEventListener('click',function(){ var o=m.classList.toggle('open'); b.classList.toggle('open',o); document.body.style.overflow=o?'hidden':'';
      if(o){var hd=document.querySelector('header.nav'); if(hd) m.style.top=Math.max(0,Math.round(hd.getBoundingClientRect().bottom))+'px'; m.scrollTop=0;} }); }
    // reveal
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
    document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=Math.min(i%4*50,150)+'ms';io.observe(el);});
    /* perf: pause float + skip iframe paint when offscreen */
    var pio=new IntersectionObserver(function(es){es.forEach(function(e){var fr=e.target,ifr=fr.querySelector('iframe');fr.style.animationPlayState=e.isIntersecting?'running':'paused';if(ifr)ifr.style.visibility=e.isIntersecting?'visible':'hidden';});},{rootMargin:'240px 0px'});
    document.querySelectorAll('.appframe').forEach(function(f){pio.observe(f);});
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in');});}
    // count-up numbers ([data-count])
    var cuo=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var el=e.target,end=parseFloat(el.dataset.count)||0,t0=null,dur=1100;
      function step(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/dur,1);var v=Math.round(end*(1-Math.pow(1-p,3)));el.textContent=v.toLocaleString('en-US');if(p<1)requestAnimationFrame(step);}
      requestAnimationFrame(step);cuo.unobserve(el);});},{threshold:.5});
    document.querySelectorAll('[data-count]').forEach(function(el){cuo.observe(el);});
    buildQR();
  }
  function buildQR(){
    var host=document.getElementById('qr'); if(!host||host.dataset.done) return; host.dataset.done=1;
    var n=23, NS='http://www.w3.org/2000/svg';
    var svg=document.createElementNS(NS,'svg'); svg.setAttribute('viewBox','0 0 '+n+' '+n);
    function rect(x,y,w,h){var r=document.createElementNS(NS,'rect');r.setAttribute('x',x);r.setAttribute('y',y);r.setAttribute('width',w);r.setAttribute('height',h);r.setAttribute('class','qm');svg.appendChild(r);}
    function finder(ox,oy){rect(ox,oy,7,1);rect(ox,oy+6,7,1);rect(ox,oy,1,7);rect(ox+6,oy,1,7);rect(ox+2,oy+2,3,3);}
    var seed=20260701; function rnd(){seed=(seed*1103515245+12345)&0x7fffffff;return seed/0x7fffffff;}
    function res(x,y){return (x<8&&y<8)||(x>n-8&&y<8)||(x<8&&y>n-8)||(x>=8&&x<=14&&y>=8&&y<=14);}
    for(var y=0;y<n;y++)for(var x=0;x<n;x++){ if(res(x,y))continue; if(rnd()>0.52) rect(x,y,1,1); }
    for(var i=8;i<n-8;i++){ if(i%2===0){rect(i,6,1,1);rect(6,i,1,1);} }
    finder(0,0); finder(n-7,0); finder(0,n-7);
    host.appendChild(svg);
  }
  if(document.readyState!=='loading') inject(); else document.addEventListener('DOMContentLoaded',inject);
})();
