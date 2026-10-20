const $=s=>document.querySelector(s);
function node(tag,text,className){const n=document.createElement(tag);if(text)n.textContent=text;if(className)n.className=className;return n}
// Summary labels form an overlapping cover, not a partition of the papers.
function paperSummaryLabels(paper){
 const labels=new Set((paper.tags||[]).filter(tag=>tag!=='在线发表').map(tag=>tag==='CCF A Findings'?'CCF A':tag));
 if(!labels.size)labels.add(paper.venue);
 return [...labels];
}
// Homepage presentation tiers; existing venue labels and role groups stay unchanged.
function paperRecognitionTier(paper){
 const tags=paper.tags||[];
 if(tags.includes('CCF A Findings'))return 1;
 if(tags.includes('视觉顶会')||tags.includes('CCF A'))return 0;
 const ordered=['CCF B','CCF C','CCF T1','CCF T2','CCF T3'];
 const index=ordered.findIndex(tag=>tags.includes(tag));
 if(index>=0)return index+2;
 const sciIndex=['SCI 1区','SCI 2区','SCI 3区','SCI 4区'].findIndex(tag=>tags.includes(tag));
 return sciIndex>=0?7+sciIndex:11;
}
function comparePapers(a,b){return paperRecognitionTier(a)-paperRecognitionTier(b)||b.year-a.year}
function renderPapers(){
 const target=$('#papers');target.replaceChildren();
 const groups=[{label:'（唯一）第一作者',shortLabel:'一作',role:'唯一一作',id:'papers-first'},{label:'（唯一）通讯作者',shortLabel:'通讯',role:'唯一通讯',id:'papers-corresponding'},{label:'合作作者',shortLabel:'合著',role:'合著',id:'papers-coauthored'}];
 for(const group of groups){
  const papers=window.PAPERS.filter(p=>p.role===group.role).sort(comparePapers);
  const section=node('details',null,'paper-group');section.id=group.id;section.open=group.role!=='合著';
  const heading=node('summary',null,'paper-group-toggle');const label=node('span',null,'paper-group-label');label.append(node('span',group.shortLabel,'paper-group-name'));
  const counts=new Map();
  for(const paper of papers){for(const category of paperSummaryLabels(paper)){counts.set(category,(counts.get(category)||0)+1)}}
  const categoryOrder=['视觉顶会','CCF A','CCF B','CCF C','CCF T1','CCF T2','CCF T3','SCI 1区','SCI 2区','SCI 3区','SCI 4区','IEEE 汇刊','ACM 汇刊','Findings'];
  const rank=category=>{const index=categoryOrder.indexOf(category);return index<0?categoryOrder.length:index};
  const statistics=node('span',null,'paper-group-stats');
  for(const [category,count] of [...counts].sort((a,b)=>rank(a[0])-rank(b[0]))){const tag=node('span',category.replace(/^CCF /,'CCF-').replace(/^SCI /,'SCI').replace(/^(IEEE|ACM) /,'$1')+'×'+count,'paper-group-count');statistics.append(tag)}
  label.append(statistics);
  const action=node('span',null,'paper-group-action');action.setAttribute('aria-hidden','true');heading.append(action,label);section.append(heading);
  for(const p of papers){
   const article=node('article',null,'paper paper-text');const meta=node('div',null,'paper-meta');const venue=node('div',null,'paper-venue');venue.append(node('strong',p.venue,'venue-name'),node('time',String(p.year),'paper-year'));
   const tags=node('div',null,'venue-tags');for(const label of [...(p.tags||[]),group.label]){const tag=node('span',label,'venue-tag');tags.append(tag)}venue.append(tags);
   const title=node('h4',p.title,'paper-title');meta.append(venue,title,node('p',p.desc,'paper-desc'));
   article.append(meta);section.append(article);
  }
  target.append(section);
 }
}
renderPapers();
const chapterLinks=[...document.querySelectorAll('#chapter-nav a')];
const chapterSpecs=[
 {id:'home',label:'个人简介',sections:[['profile-summary','基本介绍'],['profile-education','个人背景'],['profile-teaching','主讲课程']]},
 {id:'research',label:'科学研究',sections:[['research-landscape','研究全景'],['research-structure','组件结构表征'],['research-low-altitude','场景活动理解'],['research-active','视觉行动决策'],['projects','主持项目']]},
 {id:'publications',label:'研究成果',sections:[['papers-first','（唯一）第一作者'],['papers-corresponding','（唯一）通讯作者'],['papers-coauthored','合作作者']]},
 {id:'undergraduate',label:'本科生科研申请',sections:[['ug-overview','本科生科研介绍'],...['1','2','3','4'].map(n=>['ug-section-'+n,$('#ug-section-'+n).textContent])]},
 {id:'postgraduate',label:'硕士研究生招生',sections:[['pg-overview','硕士研究生招生介绍'],...['1','2','3','4'].map(n=>['pg-section-'+n,$('#pg-section-'+n).textContent])]},
 {id:'contact',label:'联系方式',sections:[['contact-email','电子邮箱']]}
];
let currentChapter='';
function closeChapterMenu(){$('#chapter-nav').classList.remove('open');$('#menu').setAttribute('aria-expanded','false')}
function updateOffsets(){
 const sidebar=$('.chapter-sidebar');
 const mobileHeight=getComputedStyle(sidebar).position==='sticky'?sidebar.getBoundingClientRect().height:0;
 const contextHeight=$('.section-context').getBoundingClientRect().height;
 document.documentElement.style.setProperty('--mobile-header-height',mobileHeight+'px');
 document.documentElement.style.setProperty('--contextbar-height',contextHeight+'px');
 document.documentElement.style.setProperty('--navigation-height',(mobileHeight+contextHeight)+'px');
}
function showChapter(spec){
 if(currentChapter===spec.id)return;
 currentChapter=spec.id;$('#context-chapter').textContent=spec.label;
 $('#section-nav').replaceChildren();
 for(const [id,label] of spec.sections){const link=node('a',label);link.href='#'+id;link.addEventListener('click',event=>{event.preventDefault();navigateTo(id)});$('#section-nav').append(link)}
 for(const link of chapterLinks){if(link.hash==='#'+spec.id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')}
 updateOffsets();
}
function navigateTo(id){
 const target=document.getElementById(id);if(!target)return;
 const spec=chapterSpecs.find(s=>s.id===id||s.sections.some(([sectionId])=>sectionId===id));
 closeChapterMenu();if(spec)showChapter(spec);
 if(target.tagName==='DETAILS')target.open=true;
 updateOffsets();history.pushState(null,'','#'+id);
 target.scrollIntoView({behavior:'instant',block:'start'});highlightChapter();
}
function updateChapterViewport(){
 const sidebar=$('.chapter-sidebar'),context=$('.section-context');
 let viewTop=0;
 if(getComputedStyle(sidebar).position==='sticky'&&sidebar.getBoundingClientRect().top<=0)viewTop=Math.max(viewTop,sidebar.getBoundingClientRect().bottom);
 if(getComputedStyle(context).position==='fixed')viewTop=Math.max(viewTop,context.getBoundingClientRect().bottom);
 viewTop=Math.min(window.innerHeight,Math.max(0,viewTop));
 const viewBottom=window.innerHeight;
 const bounds=chapterSpecs.map(spec=>document.getElementById(spec.id).getBoundingClientRect());
 for(let index=0;index<chapterSpecs.length;index++){
  const spec=chapterSpecs[index],link=chapterLinks.find(link=>link.hash==='#'+spec.id);
  const top=bounds[index].top;
  const bottom=index+1<bounds.length?bounds[index+1].top:document.documentElement.scrollHeight-window.scrollY;
  const height=Math.max(1,bottom-top);
  const visible=viewBottom>viewTop&&Math.min(bottom,viewBottom)>Math.max(top,viewTop);
  const start=visible?Math.max(0,Math.min(1,(viewTop-top)/height)):0;
  const end=visible?Math.max(0,Math.min(1,(viewBottom-top)/height)):0;
  link.toggleAttribute('data-in-view',visible);
  link.style.setProperty('--chapter-view-start',(start*100).toFixed(3)+'%');
  link.style.setProperty('--chapter-view-end',(end*100).toFixed(3)+'%');
  if(visible)link.setAttribute('aria-label',link.textContent+'，当前屏幕可见');else link.removeAttribute('aria-label');
 }
}
function highlightChapter(){
 const offset=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--navigation-height'))||0;
 const threshold=offset+36;let active=chapterSpecs[0];
 for(const spec of chapterSpecs){if(document.getElementById(spec.id).getBoundingClientRect().top<=threshold)active=spec}
 if(window.scrollY>0&&window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-3)active=chapterSpecs[chapterSpecs.length-1];
 showChapter(active);updateChapterViewport();
 let activeSection=active.sections[0][0];
 for(const [id] of active.sections){if(document.getElementById(id).getBoundingClientRect().top<=threshold)activeSection=id}
 for(const link of document.querySelectorAll('#section-nav a')){if(link.hash==='#'+activeSection)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')}
}
$('#menu').addEventListener('click',()=>{const open=$('#chapter-nav').classList.toggle('open');$('#menu').setAttribute('aria-expanded',String(open));updateOffsets()});
for(const link of chapterLinks)link.addEventListener('click',event=>{event.preventDefault();navigateTo(link.hash.slice(1))});
function scheduleNavigation(){updateOffsets();highlightChapter()}
window.addEventListener('scroll',scheduleNavigation,{passive:true});window.addEventListener('resize',scheduleNavigation);
new ResizeObserver(scheduleNavigation).observe($('.chapter-sidebar'));
new ResizeObserver(scheduleNavigation).observe($('.section-context'));
const chapterLayoutObserver=new ResizeObserver(scheduleNavigation);
for(const spec of chapterSpecs)chapterLayoutObserver.observe(document.getElementById(spec.id));
window.addEventListener('hashchange',()=>{const target=document.getElementById(location.hash.slice(1));if(target?.tagName==='DETAILS')target.open=true;scheduleNavigation()});
const initialTarget=document.getElementById(location.hash.slice(1));if(initialTarget?.tagName==='DETAILS')initialTarget.open=true;
highlightChapter();

