/* JUZ40 · Контент-план — приложение.
   Настройки задаются в Tilda через window.JUZ40CP (см. фрагмент вставки).
   Команду и аккаунты правьте ниже в блоках ACC / TEAM. */
(function(){
var CFG = window.JUZ40CP || {};
var root = document.getElementById(CFG.mount || 'cpapp');
if(!root) return;
if(root.getAttribute('data-juz40')==='1') return;
root.setAttribute('data-juz40','1');
root.innerHTML = `<section class="g-hero">
  <div class="g-orb a"></div><div class="g-orb b"></div>
  <div class="g-hero-in">
    <div class="g-top">
      <div class="g-brand">
        <div class="g-logo"><div class="g-ring"></div>
          <img class="g-av" src="https://cdn.jsdelivr.net/gh/NuraPernebek/nurnurnurnur@main/1%20(43)%20(1).png" alt="JUZ40">
        </div>
        <div class="g-word"><b>JUZ40</b></div>
      </div>
      <div class="g-htools">
        <button class="g-theme" id="ctheme" aria-label="theme">
          <svg id="cthemeic" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z"/></svg>
        </button>
        <div class="g-lang" id="clang">
          <div class="g-pill"></div>
          <button data-l="kz" class="on">ҚАЗ</button>
          <button data-l="ru">РУС</button>
        </div>
      </div>
    </div>
    <h1 class="g-h1" data-i="title"></h1>
  </div>
  <svg class="g-wave" viewBox="0 0 1440 78" preserveAspectRatio="none"><path d="M0,50 C240,88 480,10 720,26 C960,42 1200,80 1440,38 L1440,78 L0,78 Z"/></svg>
</section>

<div class="g-body">
  <div class="g-panel" id="cpanel">
    <div class="g-tabs" id="ctabs">
      <button class="g-tab on" data-t="plan">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>
        <span data-i="tabPlan"></span><span class="n" id="cnPlan">0</span>
      </button>
      <button class="g-tab" data-t="accs">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="3" width="16" height="18" rx="4"/><circle cx="12" cy="10" r="3"/><path d="M7.5 19c.9-2.2 2.5-3.3 4.5-3.3s3.6 1.1 4.5 3.3"/></svg>
        <span data-i="tabAccs"></span><span class="n" id="cnAccs">0</span>
      </button>
      <button class="g-tab" data-t="team">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="9" cy="8" r="3.4"/><path d="M2.8 20c.9-3.4 3.2-5.1 6.2-5.1s5.3 1.7 6.2 5.1"/><circle cx="17.4" cy="9.4" r="2.6"/><path d="M15.8 14.6c2.6.1 4.6 1.6 5.4 4.4"/></svg>
        <span data-i="tabTeam"></span><span class="n" id="cnTeam">0</span>
      </button>
      <button class="g-tab" data-t="an">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>
        <span data-i="tabAn"></span><span class="n" id="cnAn">0%</span>
      </button>
    </div>

    <div id="cfilters">
      <div class="g-search">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#275b6e" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        <input class="g-input" id="cq" type="text" autocomplete="off" spellcheck="false" aria-label="search">
        <button class="g-clear" id="cclear" aria-label="clear">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="g-frow">
        <div class="g-f"><label data-i="fAcc"></label><div class="box"><select id="cacc"></select></div></div>
        <div class="g-f"><label data-i="fRange"></label><div class="box"><select id="crange"></select></div></div>
        <div class="g-f"><label data-i="fResp"></label><div class="box"><select id="cresp"></select></div></div>
        <button class="g-advtog" id="cadvtog"><span data-i="advF"></span><span class="ar">⌄</span></button>
      </div>
      <div class="g-adv" id="cadv">
        <div class="g-grid">
          <div class="g-f wide" id="cfcustom" style="display:none"><label data-i="fPeriod"></label>
            <div class="g-per"><input type="date" id="cfrom"><input type="date" id="cto"></div>
          </div>
          <div class="g-f sm"><label data-i="fPl"></label><div class="box"><select id="cpl"></select></div></div>
          <div class="g-f sm"><label data-i="fType"></label><div class="box"><select id="ctype"></select></div></div>
          <div class="g-f sm"><label data-i="fLevel"></label><div class="box"><select id="clevel"></select></div></div>
        </div>
      </div>
      <div class="g-strip" id="cstrip"></div>
    </div>

    <div class="g-seg">
      <button class="g-chip" id="cedittog">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17z"/><path d="M13.5 6.5l3 3"/></svg>
        <span data-i="edit"></span>
      </button>
      <button class="g-chip" id="cchipToday" data-i="chipToday"></button>
      <button class="g-chip red" id="cchipLate"><span data-i="chipLate"></span><span class="cnt" id="clatecnt">0</span></button>
      <button class="g-chip" id="cchipPlan" data-i="chipPlan"></button>
      <button class="g-chip" id="cchipDone" data-i="chipDone"></button>
      <button class="g-reset" id="creset">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>
        <span data-i="reset"></span>
      </button>
    </div>

    <div class="g-edbar" id="cedbar">
      <button class="g-chip on" id="caddpost" data-i="addPost"></button>
      <span class="g-sync" id="csync"><span class="d"></span><span id="csynct"></span></span>
      <div class="g-more2">
        <button class="g-dots" id="cmore2">•••</button>
        <div class="g-menu" id="cmenu">
          <button id="csave" data-i="saveNow"></button>
          <button id="creload" data-i="reloadSheet"></button>
          <button id="copensheet" data-i="openSheet"></button>
          <div class="sep"></div>
          <button id="cseed" data-i="seedBtn"></button>
          <button id="cexpjson" data-i="expJson"></button>
          <button id="cimpbtn" data-i="impJson"></button>
          <div class="sep"></div>
          <button id="ctokbtn" data-i="tokenBtn"></button>
        </div>
      </div>
      <input type="file" id="cimp" accept=".json,application/json" style="display:none">
    </div>
  </div>

  <div class="g-kpi" id="ckpi"></div>

  <div id="cplanview">
    <div class="g-bar" id="cbar">
      <div class="g-count" id="ccount"></div>
      <span class="g-rangelbl" id="crangelbl"></span>
      <div class="g-sorts">
        <button class="g-sort" id="cprevw">‹ <span data-i="prevW"></span></button>
        <button class="g-sort on" id="ctodayw" data-i="todayW"></button>
        <button class="g-sort" id="cnextw"><span data-i="nextW"></span> ›</button>
      </div>
    </div>
    <div id="cdays"></div>
    <div class="g-skel" id="cskel" style="display:none"><div></div><div></div><div></div></div>
    <div class="g-state" id="cstate" style="display:none"></div>
  </div>

  <div id="caccview" style="display:none"><div class="g-cards" id="caccs" style="margin-top:26px"></div></div>
  <div id="cteamview" style="display:none"><div id="cteam"></div></div>

  <div id="canview" style="display:none">
    <div class="g-an">
      <div class="g-anbox dark">
        <div class="g-anh" data-i="anDone"></div>
        <div class="g-donut">
          <svg viewBox="0 0 200 200" role="img">
            <defs><linearGradient id="juz40ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#a8e6f2"/><stop offset="55%" stop-color="#7ccfe0"/><stop offset="100%" stop-color="#4dc492"/>
            </linearGradient></defs>
            <g transform="rotate(-90 100 100)">
              <circle class="trk" cx="100" cy="100" r="84"></circle>
              <circle class="val" id="canring" cx="100" cy="100" r="84" stroke-dasharray="527.8" stroke-dashoffset="527.8"></circle>
            </g>
            <text class="rp" x="100" y="94"><tspan id="canpct">0</tspan><tspan dx="2">%</tspan></text>
            <text class="rl" id="canlbl" x="100" y="128"></text>
          </svg>
        </div>
        <div class="g-leg">
          <div><i style="background:#2e9e6b"></i><span data-i="done"></span><b id="canD">0</b></div>
          <div><i style="background:#c98a2e"></i><span data-i="plan"></span><b id="canP">0</b></div>
          <div><i style="background:#e03131"></i><span data-i="lateBadge"></span><b id="canL">0</b></div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:16px;min-width:0">
        <div class="g-anbox">
          <div class="g-anh" data-i="anTotal"></div>
          <div class="g-angrid" id="canmini"></div>
        </div>
        <div class="g-anbox">
          <div class="g-anh" data-i="anByAcc"></div>
          <div id="canacc"></div>
        </div>
        <div class="g-anbox">
          <div class="g-anh" data-i="anByTeam"></div>
          <div id="canteam"></div>
        </div>
      </div>
    </div>
  </div>

</div>

<section class="g-foot3">
  <svg class="g-wave" viewBox="0 0 1440 78" preserveAspectRatio="none"><path d="M0,50 C240,88 480,10 720,26 C960,42 1200,80 1440,38 L1440,78 L0,78 Z"/></svg>
  <div class="g-orb a"></div><div class="g-orb b"></div>
  <div class="g-f3in">
    <div class="g-f3brand">
      <img src="https://cdn.jsdelivr.net/gh/NuraPernebek/nurnurnurnur@main/1%20(43)%20(1).png" alt="JUZ40">
      <div style="text-align:left"><b>JUZ40</b><span data-i="brandSub"></span></div>
    </div>
    <p class="g-f3d" data-i="about"></p>
    <div class="g-f2st" id="cfstats"></div>
    <div class="g-f2leg">
      <div><i style="background:#2e9e6b"></i><span data-i="done"></span></div>
      <div><i style="background:#c98a2e"></i><span data-i="plan"></span></div>
      <div><i style="background:#e03131"></i><span data-i="lateBadge"></span></div>
      <div><i style="background:#7ccfe0"></i><span data-i="tdy"></span></div>
    </div>
    <p class="g-f3note"><span data-i="footNote"></span> · <span id="cfupd"></span></p>
  </div>
</section>

<div class="g-modal" id="cmodal">
  <div class="g-mbox">
    <div class="g-mhead"><b id="cmtitle"></b><button class="g-ebtn" id="cmclose">✕</button></div>
    <div class="g-mscroll">
      <div class="g-f" style="margin-top:14px"><label data-i="fTitle"></label><textarea id="cmtext" rows="2"></textarea></div>
      <div class="g-grid" style="margin-top:12px">
        <div class="g-f wide"><label data-i="fDate"></label><input type="date" id="cmdate"></div>
        <div class="g-f wide" id="cmfperson" style="display:none"><label data-i="fPerson"></label><div class="box"><select id="cmperson"></select></div></div>
        <div class="g-f wide" id="cmfacc"><label data-i="fAcc"></label><div class="box"><select id="cmacc"></select></div></div>
        <div class="g-f wide" id="cmfpl"><label data-i="fPl"></label><div class="box"><select id="cmpl"></select></div></div>
        <div class="g-f wide" id="cmftype"><label data-i="fType"></label><div class="box"><select id="cmtype"></select></div></div>
        <div class="g-f wide" id="cmflevel"><label data-i="fLevel"></label><div class="box"><select id="cmlevel"></select></div></div>
        <div class="g-f wide" id="cmfstate"><label data-i="fState"></label>
          <div class="g-seg2"><button type="button" id="cmplan" data-i="plan"></button><button type="button" id="cmdone" data-i="done"></button></div>
        </div>
      </div>
      <div class="g-f" id="cmfresp" style="margin-top:14px"><label data-i="fResp"></label><div class="g-picks" id="cmresps"></div></div>
      <div class="g-f" id="cmflink" style="margin-top:14px"><label data-i="fLink"></label><input type="url" id="cmlink" placeholder="https://www.instagram.com/p/..."></div>
    </div>
    <div class="g-mfoot">
      <button class="g-msave" id="cmsave" data-i="save"></button>
      <button class="g-sort" id="cmcancel" data-i="cancel"></button>
      <button class="g-sort del" id="cmdel" style="display:none"><span data-i="del"></span></button>
    </div>
  </div>
</div>

<div class="g-modal" id="cremodal">
  <div class="g-mbox">
    <div class="g-mhead"><b data-i="whyTitle"></b><button class="g-ebtn" id="crclose">✕</button></div>
    <p style="font-size:.86rem;color:#3a7288;margin:12px 0 4px;line-height:1.5" id="crsub"></p>
    <div class="g-mscroll">
      <div class="g-f" style="margin-top:12px"><label data-i="fWhy"></label><textarea id="crtext" rows="3"></textarea></div>
      <div class="g-f" style="margin-top:14px"><label data-i="fNewDate"></label><input type="date" id="crdate"></div>
    </div>
    <div class="g-mwhy">
      <button type="button" id="crkeep" data-i="whyKeep"></button>
      <button type="button" id="crmove" data-i="whyMove"></button>
    </div>
  </div>
</div>

<div class="g-modal" id="ctokmodal">
  <div class="g-mbox">
    <div class="g-mhead"><b data-i="tokenTitle"></b><button class="g-ebtn" id="ctokclose">✕</button></div>
    <p style="font-size:.86rem;color:#3a7288;margin:12px 0 14px;line-height:1.5" data-i="tokenHelp"></p>
    <div class="g-f"><label data-i="tokenLbl"></label><textarea id="ctok" rows="1"></textarea></div>
    <div class="g-mfoot">
      <button class="g-msave" id="ctoksave" data-i="save"></button>
      <button class="g-sort" id="ctokforget" data-i="tokenForget"></button>
    </div>
  </div>
</div>`;


/* ═════ БАПТАУ / НАСТРОЙКА ═════ */
var SHEET_URL      = CFG.SHEET_URL || '';   // Apps Script → Deploy → Web app URL (.../exec)
var SHEET_EDIT_URL = CFG.SHEET_EDIT_URL || '';   // Google Кестенің өз сілтемесі (.../edit)
var YEAR           = CFG.YEAR || 2026;
var POLL_SEC       = CFG.POLL_SEC || 45;

var ACC = {
  main:     {code:'JUZ40 ONLINE', handle:'@juz40_online',    kz:'Басты аккаунт',               ru:'Главный аккаунт'},
  smart:    {code:'SMART',        handle:'@juz40.smart',     kz:'SMART · 11-сынып',            ru:'SMART · 11 класс'},
  junior:   {code:'JUNIOR',       handle:'@juz40.junior',    kz:'JUNIOR · 9–10 сынып',         ru:'JUNIOR · 9–10 классы'},
  geography:{code:'GEO',          handle:'@juz40.geography', kz:'География',                   ru:'География'},
  ququq:    {code:'QUQYQ',        handle:'@juz40.ququq',     kz:'Құқық негіздері',             ru:'Основы права'},
  eng:      {code:'ENG',          handle:'@juz40.eng',       kz:'Ағылшын тілі',                ru:'Английский язык'},
  russlit:  {code:'RUSLIT',       handle:'@juz40.russlit',   kz:'Орыс тілі мен әдебиеті',      ru:'Русский язык и литература'},
  info:     {code:'INFO',         handle:'@juz40.info',      kz:'Информатика',                 ru:'Информатика'},
  physics:  {code:'FIZIKA',       handle:'@juz40.physics',   kz:'Физика',                      ru:'Физика'},
  chemistry:{code:'HIMIYA',       handle:'@juz40.chemistry', kz:'Химия',                       ru:'Химия'},
  biology:  {code:'BIO',          handle:'@juz40.biology',   kz:'Биология',                    ru:'Биология'},
  dzht:     {code:'DZHT',         handle:'@juz40.dzht',      kz:'Дүниежүзі тарихы',            ru:'Всемирная история'},
  math:     {code:'MATH',         handle:'@juz40.math',      kz:'Математика',                  ru:'Математика'},
  adebtil:  {code:'ADEBTIL',      handle:'@juz40.adebtil',   kz:'Қазақ тілі мен әдебиеті',     ru:'Казахский язык и литература'},
  tarih_mc: {code:'TARIH·MS',     handle:'@juz40.tarih_mc',  kz:'ҚР тарихы · Мат. сауаттылық', ru:'История РК · Мат. грамотность'}
};
var ACC_ORDER = ['main','smart','junior','geography','ququq','eng','russlit','info','physics','chemistry','biology','dzht','math','adebtil','tarih_mc'];

var TEAM = [
  {id:'video', kz:'Видеографтар', ru:'Видеографы',
   dutyKz:'Түсірілім · монтаж · рилс өндірісі', dutyRu:'Съёмка · монтаж · продакшн рилсов',
   people:['Нұрболат','Абдрахим','Есқат','Нұрислам','Бекентай']},
  {id:'smm', kz:'СММ', ru:'SMM',
   dutyKz:'КП жүргізу · сторис · посттар', dutyRu:'Ведение КП · сторис · посты',
   people:['Айнұр','Айгерім','Гүлназ','Асель']},
  {id:'design', kz:'Дизайнерлер', ru:'Дизайнеры',
   dutyKz:'Макеттер · баннерлер · сторис дизайны', dutyRu:'Макеты · баннеры · дизайн сторис',
   people:['Дизайнер']},
  {id:'mkt', kz:'Маркетологтар', ru:'Маркетологи',
   dutyKz:'Воронкалар · таргет · сатылым', dutyRu:'Воронки · таргет · продажи',
   people:['Медер','Бекзат','Рыскен','Елдар']}
];

/* Деректер Google Кестеден келеді. Пішімі:
   PLAN  = [ММДД, аккаунт, түрі, тақырып, жауапты, дайын(0/1), id, күрделілік, сілтеме, себеп]
   күрделілік: easy | mid | hard | spec
   TASKS = [есім, ММДД, тапсырма, дайын(0/1), id] */
var PLAN = [];
var TASKS = [];

/* ═════ МӘТІНДЕР ═════ */
var I18N = {
 kz:{
  title:'Контент-<span>план</span>',
  tabPlan:'Күнтізбе', tabAccs:'Аккаунттар', tabTeam:'Команда', tabAn:'Аналитика',
  brandSub:'Контент-орталық',
  about:'JUZ40 — ҰБТ-ға онлайн дайындық орталығы. Бұл бет — маркетинг командасының контент-жоспарды жүргізетін жұмыс құралы.',
  footNote:'Google Кестемен синхрон',
  kpiTotal:'Барлық пост', kpiDone:'Дайын', kpiPlan:'Жоспарда', kpiLate:'Мерзімі өтті',
  ofAll:'жалпыдан', inPeriod:'таңдалған кезеңде',
  anDone:'Орындалу деңгейі', anRing:'дайын', anTotal:'Кезең қорытындысы',
  anByAcc:'Аккаунттар бойынша', anByTeam:'Команда бойынша', anByLevel:'Күрделілік бойынша',
  anNone:'Бұл кезеңде дерек жоқ', anPosts:'пост',
  showDone:'Дайындарды көрсету', hideDone:'Дайындарды жасыру', allDone:'Барлығы дайын ✓',
  ph:'Іздеу: тақырып, аккаунт немесе жауапты',
  fAcc:'Аккаунт', fResp:'Жауапты', fType:'Пост түрі',
  fRange:'Кезең', fPeriod:'Күндер аралығы', fState:'Күйі', fWhy:'Себебі', fNewDate:'Жаңа күні',
  ranges:{today:'Бүгін', yesterday:'Кеше', tomorrow:'Ертең', d7:'7 күн', d30:'30 күн', custom:'Кезең таңдау', all:'Барлық күн'},
  chipLate:'Орындалмаған', advF:'Қосымша сүзгі', noPosts:'—',
  whyTitle:'Неге орындалмады?', whySub:'«{t}» — {d}. Себебін жазбай жабуға болмайды.',
  whyKeep:'Орындалмады деп қалдыру', whyMove:'Басқа күнге ауыстыру',
  needWhy:'Себебін жаз', needDate:'Жаңа күнді таңда', lateBadge:'Мерзімі өтті', whyLbl:'Себеп',
  askWhy:'Себебін жазу',
  fPl:'Әлеуметтік желі', allPl:'Барлық желі',
  fLevel:'Күрделілік', allLevel:'Барлық күрделілік', fLink:'Пост сілтемесі',
  levels:{easy:'Easy', mid:'Middle', hard:'Hard', spec:'Special'},
  needLink:'«Дайын» үшін пост сілтемесін қос', openPost:'Постты ашу',
  allAcc:'Барлық аккаунт', allResp:'Барлық жауапты', allType:'Барлық түрі',
  edit:'Өңдеу', editOn:'Өңдеу режимі ✓',
  chipToday:'Бүгінге өту', chipPlan:'Жоспарда', chipDone:'Дайын', reset:'Тазарту',
  found:'Табылды: <b>{n}</b> пост', prevW:'Алдыңғы', nextW:'Келесі', todayW:'Бүгін',
  tdy:'БҮГІН', done:'Дайын', plan:'Жоспарда',
  types:{p:'Жазба пост', v:'Видеопост', r:'Рилс', s:'Сторис',
         y:'YouTube видео', h:'Shorts', yl:'Тікелей эфир', yr:'Эфир жазбасы',
         tv:'Видео', ts:'Стрим', e:'Оқиға'},
  pls:{ig:'Instagram', yt:'YouTube', tt:'TikTok'},
  months:['қаңтар','ақпан','наурыз','сәуір','мамыр','маусым','шілде','тамыз','қыркүйек','қазан','қараша','желтоқсан'],
  wd:['Дүйсенбі','Сейсенбі','Сәрсенбі','Бейсенбі','Жұма','Сенбі','Жексенбі'],
  wds:['Дс','Сс','Ср','Бс','Жм','Сб','Жс'],
  mainTag:'Басты аккаунт', openPlan:'Планын ашу', inPlan:'Планда көру',
  postsWord:'пост', tasksWord:'тапсырма',
  addPost:'+ Жаңа пост', addTask:'+ Тапсырма', addHere:'+ пост',
  newPost:'Жаңа пост', editPost:'Постты өңдеу', newTask:'Жаңа тапсырма', editTask:'Тапсырманы өңдеу',
  fDate:'Күні', fTitle:'Тақырып / рубрика', fPerson:'Қызметкер',
  save:'Сақтау', cancel:'Болдырмау', del:'Өшіру', confirmDel:'Растау?', needFields:'Күні мен тақырыпты толтыр',
  saveNow:'Қазір сақтау', reloadSheet:'Кестеден жаңарту', openSheet:'Google Кестені ашу',
  seedBtn:'Кестеге алғаш жүктеу', expJson:'Резервті жүктеу (JSON)', impJson:'JSON импорттау',
  tokenBtn:'Кіру кодын енгізу', tokenTitle:'Кіру коды', tokenLbl:'Код',
  tokenHelp:'Жоспарды өзгерту үшін команданың кіру кодын енгіз. Кодты жетекшіден ал — ол тек осы браузерде сақталады.',
  tokenForget:'Кодты өшіру',
  syncIdle:'Кестемен синхрон', syncDirty:'Сақталуда: {n}', syncBusy:'Сақталуда…',
  syncOk:'Кестеге сақталды ✓', syncErr:'Сақталмады — кодты не байланысты тексер',
  syncNoTok:'Код енгізілмеген', syncLocal:'Кесте қосылмаған — өзгеріс тек осы браузерде',
  seedAsk:'Кестедегі бүкіл деректі беттегі жоспармен алмастыру керек пе?',
  leaveWarn:'Сақталмаған өзгерістер бар.',
  loadH:'Жоспар жүктелуде…', loadP:'Google Кестеден деректер алынып жатыр.',
  emptyH:'Ештеңе табылмады', emptyP:'Сүзгіні өзгертіп көр немесе іздеу сөзін тексер.',
  blankH:'Жоспар әзірге бос', blankP:'«Өңдеу» → «+ Жаңа пост» арқылы алғашқы постты қос немесе Google Кестеге жаз.',
  noTasks:'Жеке тапсырма жоқ — жауапты етіп қойылған посттар осында жиналады.',
  updatedAt:'Жаңартылды:',
  note:'Дереккөз: команданың Google Кестесі.'
 },
 ru:{
  title:'Контент-<span>план</span>',
  tabPlan:'Календарь', tabAccs:'Аккаунты', tabTeam:'Команда', tabAn:'Аналитика',
  brandSub:'Контент-центр',
  about:'JUZ40 — центр онлайн-подготовки к ЕНТ. Эта страница — рабочий инструмент команды маркетинга для ведения контент-плана.',
  footNote:'Синхронизация с Google Таблицей',
  kpiTotal:'Всего постов', kpiDone:'Готово', kpiPlan:'В плане', kpiLate:'Просрочено',
  ofAll:'от общего', inPeriod:'за выбранный период',
  anDone:'Уровень выполнения', anRing:'готово', anTotal:'Итоги периода',
  anByAcc:'По аккаунтам', anByTeam:'По команде', anByLevel:'По сложности',
  anNone:'Нет данных за период', anPosts:'постов',
  showDone:'Показать выполненные', hideDone:'Скрыть выполненные', allDone:'Всё выполнено ✓',
  ph:'Поиск: тема, аккаунт или ответственный',
  fAcc:'Аккаунт', fResp:'Ответственный', fType:'Тип поста',
  fRange:'Период', fPeriod:'Диапазон дат', fState:'Статус', fWhy:'Причина', fNewDate:'Новая дата',
  ranges:{today:'Сегодня', yesterday:'Вчера', tomorrow:'Завтра', d7:'7 дней', d30:'30 дней', custom:'Выбрать период', all:'Все дни'},
  chipLate:'Невыполненные', advF:'Ещё фильтры', noPosts:'—',
  whyTitle:'Почему не выполнено?', whySub:'«{t}» — {d}. Без причины закрыть нельзя.',
  whyKeep:'Оставить невыполненным', whyMove:'Перенести на другую дату',
  needWhy:'Напишите причину', needDate:'Выберите новую дату', lateBadge:'Просрочено', whyLbl:'Причина',
  askWhy:'Указать причину',
  fPl:'Соцсеть', allPl:'Все соцсети',
  fLevel:'Сложность', allLevel:'Любая сложность', fLink:'Ссылка на пост',
  levels:{easy:'Easy', mid:'Middle', hard:'Hard', spec:'Special'},
  needLink:'Для статуса «Готово» нужна ссылка на пост', openPost:'Открыть пост',
  allAcc:'Все аккаунты', allResp:'Все ответственные', allType:'Все типы',
  edit:'Редактировать', editOn:'Режим правки ✓',
  chipToday:'К сегодня', chipPlan:'В плане', chipDone:'Готово', reset:'Сбросить',
  found:'Найдено: <b>{n}</b> постов', prevW:'Пред.', nextW:'След.', todayW:'Сегодня',
  tdy:'СЕГОДНЯ', done:'Готово', plan:'В плане',
  types:{p:'Пост', v:'Видеопост', r:'Рилс', s:'Сторис',
         y:'YouTube видео', h:'Shorts', yl:'Прямой эфир', yr:'Запись эфира',
         tv:'Видео', ts:'Стрим', e:'Событие'},
  pls:{ig:'Instagram', yt:'YouTube', tt:'TikTok'},
  months:['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'],
  wd:['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],
  wds:['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
  mainTag:'Главный аккаунт', openPlan:'Открыть план', inPlan:'Показать в плане',
  postsWord:'постов', tasksWord:'задач',
  addPost:'+ Новый пост', addTask:'+ Задача', addHere:'+ пост',
  newPost:'Новый пост', editPost:'Редактировать пост', newTask:'Новая задача', editTask:'Редактировать задачу',
  fDate:'Дата', fTitle:'Тема / рубрика', fPerson:'Сотрудник',
  save:'Сохранить', cancel:'Отмена', del:'Удалить', confirmDel:'Точно?', needFields:'Заполни дату и тему',
  saveNow:'Сохранить сейчас', reloadSheet:'Обновить из таблицы', openSheet:'Открыть Google Таблицу',
  seedBtn:'Первая загрузка в таблицу', expJson:'Скачать резерв (JSON)', impJson:'Импорт JSON',
  tokenBtn:'Ввести код доступа', tokenTitle:'Код доступа', tokenLbl:'Код',
  tokenHelp:'Чтобы менять план, введите командный код доступа — его выдаёт руководитель. Код хранится только в этом браузере.',
  tokenForget:'Удалить код',
  syncIdle:'Синхронно с таблицей', syncDirty:'Сохраняем: {n}', syncBusy:'Сохраняем…',
  syncOk:'Сохранено в таблицу ✓', syncErr:'Не сохранилось — проверьте код и связь',
  syncNoTok:'Код не введён', syncLocal:'Таблица не подключена — правки только в этом браузере',
  seedAsk:'Заменить все данные в таблице планом с этой страницы?',
  leaveWarn:'Есть несохранённые изменения.',
  loadH:'Загружаем план…', loadP:'Получаем данные из Google Таблицы.',
  emptyH:'Ничего не найдено', emptyP:'Измените фильтры или проверьте запрос.',
  blankH:'План пока пустой', blankP:'Нажмите «Редактировать» → «+ Новый пост» или заполните Google Таблицу.',
  noTasks:'Личных задач нет — здесь собираются посты, где человек указан ответственным.',
  updatedAt:'Обновлено:',
  note:'Источник данных: командная Google Таблица.'
 }
};

/* ═════ КӨМЕКШІЛЕР ═════ */
var app=document.getElementById('cpapp');
var $=function(id){return document.getElementById(id)};
var lang='kz', tab='plan', EDIT=false, SOFT=false, UPDATED='', DIRTY=0, LOADING=false;
var filt={acc:'main',resp:'',range:'today',shift:0,from:'',to:'',type:'',pl:'',st:'',lv:''};
var PL_TYPES={ig:['p','v','r','s'], yt:['y','h','yl','yr'], tt:['tv','ts']};
var PL_ORDER=['ig','yt','tt'];
var TYPE_ALIAS={t:'tv'};
var TYPE_ORDER={e:0,r:1,v:2,p:3,s:4,tv:5,ts:6,y:7,h:8,yl:9,yr:10};
function tyOf(r){var c=String(r[2]||'p'); return TYPE_ALIAS[c]||c}
function plOf(r){
  var c=tyOf(r);
  for(var i=0;i<PL_ORDER.length;i++){ if(PL_TYPES[PL_ORDER[i]].indexOf(c)!==-1) return PL_ORDER[i] }
  return '';
}
function typesFor(pl){
  var out = pl ? PL_TYPES[pl].slice() : PL_TYPES.ig.concat(PL_TYPES.yt,PL_TYPES.tt);
  out.push('e');
  return out;
}
var LEVELS=['easy','mid','hard','spec'];
function lvOf(r){var v=String(r[7]||'').toLowerCase();return LEVELS.indexOf(v)!==-1?v:'mid'}
function linkOf(r){var v=String(r[8]||'').trim();return /^https?:\/\//i.test(v)?v:''}
var PEOPLE=[];
TEAM.forEach(function(r){r.people.forEach(function(p){PEOPLE.push(p)})});

function t(k){return I18N[lang][k]||''}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function fmt(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ')}
function pad(n){return String(n).padStart(2,'0')}
function dOf(md){return new Date(YEAR,parseInt(String(md).slice(0,2),10)-1,parseInt(String(md).slice(2),10))}
function key(d){return pad(d.getMonth()+1)+pad(d.getDate())}
function dShort(md){var d=dOf(md);return d.getDate()+' '+I18N[lang].months[d.getMonth()].slice(0,3)+'.'}
function splitResp(v){return String(v||'').split(',').map(function(x){return x.trim()}).filter(Boolean)}
function uid(){return 'x'+Date.now().toString(36)+Math.floor(Math.random()*1e6).toString(36)}
function stamp(){var d=new Date();return d.getDate()+'.'+pad(d.getMonth()+1)+'.'+d.getFullYear()}
function sc(el,blk){if(el&&el.scrollIntoView){try{el.scrollIntoView({behavior:'smooth',block:blk||'start'})}catch(e){el.scrollIntoView()}}}

var TODAY=new Date(); TODAY.setHours(0,0,0,0);
var TODAY_KEY=(TODAY.getFullYear()===YEAR)?key(TODAY):'';

var RANGES=['today','yesterday','tomorrow','d7','d30','custom','all'];
function shiftDays(d,n){var x=new Date(d);x.setDate(x.getDate()+n);return x}
function isoOf(d){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())}
function isoToDate(v){
  if(!v||v.length<10) return null;
  return new Date(+v.slice(0,4),+v.slice(5,7)-1,+v.slice(8,10));
}
function isToday(){ return filt.range==='today' && !filt.shift }
function rangeDates(){
  var a,b;
  switch(filt.range){
    case 'today': a=b=TODAY; break;
    case 'yesterday': a=b=shiftDays(TODAY,-1); break;
    case 'tomorrow': a=b=shiftDays(TODAY,1); break;
    case 'd7': a=TODAY; b=shiftDays(TODAY,6); break;
    case 'd30': a=TODAY; b=shiftDays(TODAY,29); break;
    case 'custom':
      a=isoToDate(filt.from)||TODAY; b=isoToDate(filt.to)||a;
      if(b<a){var tmp=a;a=b;b=tmp}
      break;
    default: return null;
  }
  var len=Math.round((b-a)/86400000)+1;
  if(filt.shift){ a=shiftDays(a,filt.shift*len); b=shiftDays(b,filt.shift*len) }
  return {a:a,b:b,len:len};
}
function rangeLabel(){
  var rg=rangeDates(); if(!rg) return t('ranges').all||'';
  var M=I18N[lang].months, a=rg.a, b=rg.b;
  if(key(a)===key(b)){
    var mark=(key(a)===TODAY_KEY&&!filt.shift)?' · '+I18N[lang].ranges.today:'';
    return a.getDate()+' '+M[a.getMonth()]+mark;
  }
  if(a.getMonth()===b.getMonth()) return a.getDate()+' – '+b.getDate()+' '+M[a.getMonth()];
  return a.getDate()+' '+M[a.getMonth()]+' – '+b.getDate()+' '+M[b.getMonth()];
}
function inRange(r){
  var rg=rangeDates(); if(!rg) return true;
  var d=dOf(r[0]);
  return d>=rg.a && d<=rg.b;
}
function isLate(r){ return !r[5] && TODAY_KEY && String(r[0])<TODAY_KEY }
function reasonOf(r){ return String(r[9]||'').trim() }
function lateCount(){ var n=0; PLAN.forEach(function(r){ if(isLate(r)) n++ }); return n }

function applyI18n(){
  app.querySelectorAll('[data-i]').forEach(function(el){
    var k=el.getAttribute('data-i');
    el.innerHTML=t(k)+((k==='note'&&UPDATED)?(' '+t('updatedAt')+' '+esc(UPDATED)+'.'):'');
  });
  $('cq').placeholder=t('ph');
  $('cedittog').querySelector('span').textContent=EDIT?t('editOn'):t('edit');
  buildSelects();
}
function opt(v,txt){var o=document.createElement('option');o.value=v;o.textContent=txt;return o}
function buildSelects(){
  var acc=$('cacc'),resp=$('cresp'),week=$('crange'),type=$('ctype'),pl=$('cpl');
  acc.innerHTML='';resp.innerHTML='';week.innerHTML='';type.innerHTML='';pl.innerHTML='';
  acc.appendChild(opt('',t('allAcc')));
  ACC_ORDER.forEach(function(id){acc.appendChild(opt(id,ACC[id].code+' · '+ACC[id][lang]))});
  acc.value=filt.acc;
  resp.appendChild(opt('',t('allResp')));
  PEOPLE.forEach(function(p){resp.appendChild(opt(p,p))});
  resp.value=filt.resp;
  RANGES.forEach(function(c){week.appendChild(opt(c,I18N[lang].ranges[c]))});
  week.value=filt.range;
  $('cfcustom').style.display=(filt.range==='custom')?'flex':'none';
  if(filt.from) $('cfrom').value=filt.from;
  if(filt.to) $('cto').value=filt.to;
  pl.appendChild(opt('',t('allPl')));
  PL_ORDER.forEach(function(c){pl.appendChild(opt(c,I18N[lang].pls[c]))});
  pl.value=filt.pl;
  var allowed=typesFor(filt.pl);
  if(filt.type && allowed.indexOf(filt.type)===-1) filt.type='';
  type.appendChild(opt('',t('allType')));
  allowed.forEach(function(c){type.appendChild(opt(c,I18N[lang].types[c]))});
  type.value=filt.type;
  var lv=$('clevel'); lv.innerHTML='';
  lv.appendChild(opt('',t('allLevel')));
  LEVELS.forEach(function(c){lv.appendChild(opt(c,I18N[lang].levels[c]))});
  lv.value=filt.lv;
}

/* ═════ СҮЗУ ЖӘНЕ РЕНДЕР ═════ */
function query(){return $('cq').value.trim().toLowerCase()}
function matches(r,ignoreSt){
  if(filt.acc && r[1]!==filt.acc) return false;
  if(filt.type && tyOf(r)!==filt.type) return false;
  if(filt.pl && tyOf(r)!=='e' && plOf(r)!==filt.pl) return false;
  if(filt.lv && lvOf(r)!==filt.lv) return false;
  if(filt.resp && (r[4]||'').indexOf(filt.resp)===-1) return false;
  if(!ignoreSt){
    if(filt.st==='done' && !r[5]) return false;
    if(filt.st==='plan' && r[5]) return false;
    if(filt.st==='late' && !isLate(r)) return false;
  }
  var q=query();
  if(q){
    var a=ACC[r[1]]||{code:'',kz:'',ru:''};
    var hay=(r[3]+' '+(r[4]||'')+' '+a.code+' '+(a[lang]||'')).toLowerCase();
    if(hay.indexOf(q)===-1) return false;
  }else if((ignoreSt||filt.st!=='late') && !inRange(r)) return false;
  return true;
}
function statsOf(rows){
  var st={total:rows.length,done:0,plan:0,late:0};
  rows.forEach(function(r){
    if(r[5]) st.done++;
    else if(isLate(r)) st.late++;
    else st.plan++;
  });
  st.pct=st.total?Math.round(st.done/st.total*100):0;
  return st;
}
function scopeRows(){ return PLAN.filter(function(r){return matches(r,true)}) }

var IC_PERSON='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="3.4"/><path d="M5 20c1-3.6 3.8-5.4 7-5.4s6 1.8 7 5.4"/></svg>';
var IC_IG='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/></svg>';
var IC_YT='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="2.5" y="6" width="19" height="12.5" rx="4"/><path d="M10.2 9.6l4.6 2.65-4.6 2.65z" fill="currentColor" stroke="none"/></svg>';
var IC_TT='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14.5 3.5v10.8a4.2 4.2 0 1 1-4.2-4.2"/><path d="M14.5 5.5c.8 2.2 2.5 3.6 5 3.9"/></svg>';

function cardEl(r,idx){
  var a=ACC[r[1]]||{code:r[1],handle:'',kz:r[1],ru:r[1]}, pl=plOf(r), L=I18N[lang], pi=PLAN.indexOf(r);
  var el=document.createElement('div');
  var late=isLate(r), why=reasonOf(r);
  el.className='g-card'+(tyOf(r)==='e'?' ev':'')+(late?' late':'');
  if(SOFT) el.style.animation='none'; else el.style.animationDelay=Math.min(idx*0.03,0.4)+'s';
  var lv=lvOf(r);
  var h='<div class="g-chips"><button class="g-code" data-acc="'+r[1]+'">'+esc(a.code)+'</button>'+
    '<span class="g-tag'+(tyOf(r)==='e'?' q':'')+'">'+esc(L.types[tyOf(r)]||tyOf(r))+'</span>'+
    '<span class="g-lv '+lv+'">'+esc(L.levels[lv])+'</span>';
  if(pl&&(r[1]==='main'||pl!=='ig')) h+='<span class="g-pl '+pl+'">'+esc(L.pls[pl])+'</span>';
  if(EDIT) h+='<span class="g-ed"><button class="g-ebtn" data-pe="'+pi+'">✎</button><button class="g-ebtn del" data-pd="'+pi+'">✕</button></span>';
  h+='</div><div class="g-name">'+esc(r[3])+'</div>';
  var rl=splitResp(r[4]);
  if(rl.length) h+='<div class="g-row">'+IC_PERSON+'<span>'+esc(rl.join(' · '))+'</span></div>';
  if(why) h+='<div class="g-why"><b>'+t('whyLbl')+'</b><span>'+esc(why)+'</span></div>';
  var badge=r[5]?t('done'):(late?t('lateBadge'):t('plan')), lnk=linkOf(r);
  var bcls=r[5]?'':(late?' late':' w');
  h+='<div class="g-foot"><span class="g-hand">'+esc(a.handle)+'</span><span class="g-fend">'+
     (lnk?'<a class="g-link" href="'+esc(lnk)+'" target="_blank" rel="noopener">'+t('openPost')+' ↗</a>':'')+
     (late&&!why&&EDIT?'<button class="g-askwhy" data-why="'+pi+'">'+t('askWhy')+'</button>':'')+
     (EDIT?'<button class="g-badge'+bcls+'" data-pt="'+pi+'">'+badge+'</button>'
          :'<span class="g-badge'+bcls+'">'+badge+'</span>')+'</span></div>';
  el.innerHTML=h;
  return el;
}
function setState(kind){
  var s=$('cstate');
  if(!kind){s.style.display='none';return}
  s.style.display='block';
  var ic='<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#275b6e" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>';
  s.innerHTML='<div class="big">'+ic+'</div><h3>'+t(kind+'H')+'</h3><p>'+t(kind+'P')+'</p>';
}
function renderPlan(){
  var wrap=$('cdays'); wrap.innerHTML='';
  $('cskel').style.display=(LOADING&&!PLAN.length)?'grid':'none';
  if(LOADING&&!PLAN.length){ $('cbar').style.display='none'; setState(null); return }
  $('cbar').style.display='flex';
  var rows=PLAN.filter(matches);
  rows.sort(function(a,b){
    if(a[0]!==b[0]) return a[0]<b[0]?-1:1;
    var d=(TYPE_ORDER[tyOf(a)]||99)-(TYPE_ORDER[tyOf(b)]||99);
    return d||a[3].localeCompare(b[3],'ru');
  });
  $('ccount').innerHTML=t('found').replace('{n}',fmt(rows.length));
  $('crangelbl').textContent=(filt.st==='late')?t('chipLate'):rangeLabel();
  var lc=lateCount();
  $('clatecnt').textContent=lc;
  $('cchipLate').style.display=lc?'inline-flex':'none';
  $('cchipLate').classList.toggle('on',filt.st==='late');
  if(!rows.length){ setState(PLAN.length?'empty':'blank') }
  else{
    setState(null);
    var byDay={},order=[];
    rows.forEach(function(r){ if(!byDay[r[0]]){byDay[r[0]]=[];order.push(r[0])} byDay[r[0]].push(r) });
    var L=I18N[lang], idx=0;
    order.forEach(function(md){
      var d=dOf(md), isT=md===TODAY_KEY;
      var day=document.createElement('div');
      day.className='g-day'+(isT?' today':''); day.id='cday'+md;
      day.innerHTML='<div class="g-dayhead">'+
        '<div class="g-dnum"><b>'+d.getDate()+'</b><span>'+L.months[d.getMonth()].slice(0,3)+'</span></div>'+
        '<div class="g-dtit"><b>'+L.wd[(d.getDay()+6)%7]+'</b><span>'+d.getDate()+' '+L.months[d.getMonth()]+' · '+byDay[md].length+' '+t('postsWord')+'</span></div>'+
        '<div class="g-dline"></div>'+(isT?'<span class="g-tdy">'+t('tdy')+'</span>':'')+
        (EDIT?'<button class="g-open" data-addday="'+md+'">'+t('addHere')+'</button>':'')+'</div>';
      var grid=document.createElement('div'); grid.className='g-cards';
      byDay[md].forEach(function(r){grid.appendChild(cardEl(r,idx++))});
      day.appendChild(grid);
      wrap.appendChild(day);
    });
  }
  var nav=!query() && filt.st!=='late' && filt.range!=='all';
  $('cprevw').style.display=$('cnextw').style.display=$('ctodayw').style.display=nav?'inline-flex':'none';
  $('ctodayw').classList.toggle('on',isToday());
  $('crangelbl').style.display=query()?'none':'inline-flex';
  $('cchipPlan').classList.toggle('on',filt.st==='plan');
  $('cchipDone').classList.toggle('on',filt.st==='done');
}
function animTracks(scope){
  if(SOFT){scope.querySelectorAll('.g-track i').forEach(function(x){x.style.transition='none';x.style.width=Math.min(100,x.getAttribute('data-w'))+'%'});return}
  requestAnimationFrame(function(){requestAnimationFrame(function(){
    scope.querySelectorAll('.g-track i').forEach(function(x){x.style.width=Math.min(100,x.getAttribute('data-w'))+'%'});
  })});
}
function renderAccs(){
  var wrap=$('caccs'); wrap.innerHTML='';
  var counts={}, plCounts={ig:0,yt:0,tt:0}, maxSub=1, idx=0;
  PLAN.forEach(function(r){ counts[r[1]]=(counts[r[1]]||0)+1; if(r[1]==='main'&&plOf(r)) plCounts[plOf(r)]++ });
  ACC_ORDER.forEach(function(id){ if(id!=='main') maxSub=Math.max(maxSub,counts[id]||0) });
  ACC_ORDER.forEach(function(id){
    var a=ACC[id], n=counts[id]||0;
    var el=document.createElement('div');
    el.className='g-card'+(id==='main'?' g-mainacc':'');
    if(SOFT) el.style.animation='none'; else el.style.animationDelay=Math.min(idx*0.04,0.5)+'s';
    idx++;
    var h='<div class="g-chips">'+(id==='main'
      ? '<span class="g-maintag">'+t('mainTag')+'</span>'
      : '<button class="g-code" data-acc="'+id+'">'+esc(a.code)+'</button>')+'</div>'+
      '<div class="g-name">'+esc(a[lang])+'</div>';
    if(id==='main'){
      h+='<div class="g-chips"><span class="g-pl">'+IC_IG+' Instagram <b>'+plCounts.ig+'</b></span>'+
         '<span class="g-pl">'+IC_YT+' YouTube <b>'+plCounts.yt+'</b></span>'+
         '<span class="g-pl">'+IC_TT+' TikTok <b>'+plCounts.tt+'</b></span></div>';
    }
    var pct=id==='main'?100:Math.round(n/maxSub*100);
    h+='<div class="g-foot"><div><span class="g-hand">'+esc(a.handle)+'</span>'+
       '<div class="g-ball"><b>'+n+'</b><i>'+t('postsWord')+'</i><div class="g-track"><i data-w="'+pct+'"></i></div></div></div>'+
       '<span style="display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end">'+
       (EDIT?'<button class="g-open" data-addacc="'+id+'">'+t('addHere')+'</button>':'')+
       '<button class="g-open" data-acc="'+id+'">'+t('openPlan')+' →</button></span></div>';
    el.innerHTML=h;
    wrap.appendChild(el);
  });
  animTracks(wrap);
}
function personTasks(name){
  var out=[];
  PLAN.forEach(function(r,i){ if((r[4]||'').indexOf(name)!==-1) out.push({d:r[0],acc:r[1],title:r[3],done:!!r[5],pi:i,link:linkOf(r),late:isLate(r)}) });
  TASKS.forEach(function(x,i){ if(x[0]===name) out.push({d:x[1],acc:'',title:x[2],done:!!x[3],ti:i}) });
  out.sort(function(a,b){ if(!a.d) return 1; if(!b.d) return -1; return a.d<b.d?-1:(a.d>b.d?1:0) });
  return out;
}
function renderTeam(){
  var wrap=$('cteam'); wrap.innerHTML='';
  var maxT=1, mon=shiftDays(TODAY,-((TODAY.getDay()+6)%7)), L=I18N[lang];
  PEOPLE.forEach(function(p){
    var open=personTasks(p).filter(function(x){return !x.done}).length;
    maxT=Math.max(maxT,open);
  });
  TEAM.forEach(function(role){
    var head=document.createElement('div');
    head.className='g-rolehead';
    head.innerHTML='<h3>'+esc(role[lang])+'</h3><span class="g-tag">'+role.people.length+'</span>'+
      '<span class="g-duty">'+esc(lang==='kz'?role.dutyKz:role.dutyRu)+'</span>';
    wrap.appendChild(head);
    var grid=document.createElement('div'); grid.className='g-cards';
    role.people.forEach(function(name,i){
      var all=personTasks(name), days={};
      var doneN=0;
      all.forEach(function(x){ if(x.done) doneN++ });
      var open=SHOWDONE[name]?all:all.filter(function(x){return !x.done});
      var tasks=all;
      tasks.forEach(function(x){if(x.d)days[x.d]=1});
      var mini='';
      for(var k=0;k<7;k++){
        var dd=new Date(mon); dd.setDate(dd.getDate()+k);
        var mdk=(dd.getFullYear()===YEAR)?key(dd):'--';
        mini+='<i class="'+((days[mdk]?'on':'')+(mdk===TODAY_KEY?' td':'')).trim()+'">'+L.wds[k]+'</i>';
      }
      var list;
      if(open.length){
        list='<div class="g-tl">'+open.map(function(x){
          var ed='';
          if(EDIT) ed=x.pi!=null
            ? '<span class="g-ed"><button class="g-ebtn" data-pe="'+x.pi+'">✎</button></span>'
            : '<span class="g-ed"><button class="g-ebtn" data-te="'+x.ti+'">✎</button><button class="g-ebtn del" data-td="'+x.ti+'">✕</button></span>';
          return '<div class="g-t'+(x.done?' done':'')+(x.late?' late':'')+'"><span class="dot"></span><span class="dte">'+(x.d?dShort(x.d):'—')+'</span>'+
            '<span style="flex:1">'+(x.acc&&ACC[x.acc]?'<b>'+esc(ACC[x.acc].code)+'</b> · ':'')+esc(x.title)+
            (x.link?' <a href="'+esc(x.link)+'" target="_blank" rel="noopener" style="color:#275b6e">↗</a>':'')+'</span>'+ed+'</div>';
        }).join('')+'</div>';
      }else list='<div class="g-empty-t">'+(all.length?t('allDone'):t('noTasks'))+'</div>';
      if(doneN) list+='<button class="g-showdone" data-sd="'+esc(name)+'">'+
        (SHOWDONE[name]?t('hideDone'):t('showDone'))+'<span class="n">'+doneN+'</span></button>';
      var el=document.createElement('div');
      el.className='g-card';
      if(SOFT) el.style.animation='none'; else el.style.animationDelay=Math.min(i*0.05,0.4)+'s';
      el.innerHTML='<div class="g-phead"><div class="g-ava">'+esc(name.slice(0,1))+'</div>'+
        '<div class="g-pname"><b>'+esc(name)+'</b><span>'+esc(role[lang])+'</span></div>'+
        '<div class="g-ball" style="align-items:flex-end"><b>'+(all.length-doneN)+'</b><i>'+t('tasksWord')+'</i>'+
        '<div class="g-track"><i data-w="'+Math.round((all.length-doneN)/maxT*100)+'"></i></div></div></div>'+
        '<div class="g-mini">'+mini+'</div>'+list+
        '<div class="g-foot"><span class="g-hand">JUZ40 team</span><span style="display:flex;gap:8px">'+
        (EDIT?'<button class="g-open" data-at="'+esc(name)+'">'+t('addTask')+'</button>':'')+
        '<button class="g-open" data-resp="'+esc(name)+'">'+t('inPlan')+' →</button></span></div>';
      grid.appendChild(el);
    });
    wrap.appendChild(grid);
  });
  animTracks(wrap);
}
function dayCount(md){
  var n=0,late=0,done=0;
  PLAN.forEach(function(r){
    if(r[0]!==md) return;
    if(filt.acc && r[1]!==filt.acc) return;
    if(filt.resp && (r[4]||'').indexOf(filt.resp)===-1) return;
    if(filt.pl && tyOf(r)!=='e' && plOf(r)!==filt.pl) return;
    if(filt.type && tyOf(r)!==filt.type) return;
    if(filt.lv && lvOf(r)!==filt.lv) return;
    n++; if(r[5]) done++; else if(isLate(r)) late++;
  });
  return {n:n,late:late,done:done};
}
function renderStrip(){
  var box=$('cstrip'); if(!box) return;
  if(query()||filt.st==='late'||filt.range==='all'){ box.style.display='none'; return }
  box.style.display='grid';
  var rg=rangeDates();
  var base=rg?rg.a:TODAY;
  var start=shiftDays(base,-((base.getDay()+6)%7));
  var L=I18N[lang], h='';
  for(var i=0;i<7;i++){
    var d=shiftDays(start,i), mdk=key(d), iso=isoOf(d);
    var inR=rg&&d>=rg.a&&d<=rg.b;
    var c=dayCount(mdk);
    var dots='';
    if(c.late) dots+='<i style="background:#e03131"></i>';
    if(c.done) dots+='<i style="background:#2e9e6b"></i>';
    if(c.n-c.done-c.late>0) dots+='<i style="background:#c98a2e"></i>';
    h+='<button class="g-sd'+(inR?' on':'')+(mdk===TODAY_KEY?' tdy':'')+(i>4?' wknd':'')+'" data-day="'+iso+'">'+
       '<u>'+L.wds[i]+'</u><b>'+d.getDate()+'</b>'+
       '<s>'+(c.n?c.n+' '+t('postsWord'):t('noPosts'))+'</s>'+
       '<span class="dots">'+dots+'</span></button>';
  }
  box.innerHTML=h;
}
function renderKpi(){
  var st=statsOf(scopeRows());
  var L=I18N[lang];
  var box=$('ckpi');
  function tile(cls,label,val,sub,tone,pct){
    return '<div class="'+cls+'" style="--tone:'+tone+'"><i>'+label+'</i><b>'+val+'</b><u>'+sub+'</u>'+
           '<div class="bar"><i data-w="'+pct+'" style="background:'+tone+'"></i></div></div>';
  }
  box.innerHTML=
    tile('tot',L.kpiTotal,fmt(st.total),t('inPeriod'),'#275b6e',100)+
    tile('done',L.kpiDone,fmt(st.done),st.pct+'% '+t('ofAll'),'#2e9e6b',st.pct)+
    tile('plan',L.kpiPlan,fmt(st.plan),t('inPeriod'),'#c98a2e',st.total?Math.round(st.plan/st.total*100):0)+
    tile('late',L.kpiLate,fmt(st.late),t('inPeriod'),'#e03131',st.total?Math.round(st.late/st.total*100):0);
  requestAnimationFrame(function(){requestAnimationFrame(function(){
    box.querySelectorAll('.bar i').forEach(function(x){x.style.width=Math.min(100,x.getAttribute('data-w'))+'%'});
  })});
  $('cnAn').textContent=st.pct+'%';
  var f=$('cfstats');
  f.innerHTML='<span>'+L.kpiTotal+': '+fmt(st.total)+'</span><span>'+L.kpiDone+': '+fmt(st.done)+'</span>'+
    (st.late?'<span>'+L.kpiLate+': '+fmt(st.late)+'</span>':'');
  $('cfupd').textContent=UPDATED?(t('updatedAt')+' '+UPDATED):'';
}

function barRow(name,st,max){
  var w=function(n){return max?(n/max*100):0};
  return '<div class="g-anrow"><span class="g-anname">'+esc(name)+'</span>'+
    '<span class="g-anstack">'+
      '<i class="d" data-w="'+w(st.done)+'"></i>'+
      '<i class="p" data-w="'+w(st.plan)+'"></i>'+
      '<i class="l" data-w="'+w(st.late)+'"></i>'+
    '</span>'+
    '<span class="g-annum"><b>'+st.done+'</b>/'+st.total+' · '+st.pct+'%</span></div>';
}
function renderAn(){
  var rows=scopeRows(), st=statsOf(rows), L=I18N[lang];
  var C=2*Math.PI*84;
  var ring=$('canring');
  ring.setAttribute('stroke-dasharray',C.toFixed(1));
  ring.setAttribute('stroke-dashoffset',C.toFixed(1));
  $('canpct').textContent=st.pct;
  $('canlbl').textContent=t('anRing');
  $('canD').textContent=st.done; $('canP').textContent=st.plan; $('canL').textContent=st.late;
  requestAnimationFrame(function(){requestAnimationFrame(function(){
    ring.setAttribute('stroke-dashoffset',(C*(1-st.pct/100)).toFixed(1));
  })});

  var mini='';
  mini+='<div class="g-anmini"><i>'+L.kpiTotal+'</i><b>'+fmt(st.total)+'</b><u>'+t('anPosts')+'</u></div>';
  LEVELS.forEach(function(c){
    var sub=statsOf(rows.filter(function(r){return lvOf(r)===c}));
    if(sub.total) mini+='<div class="g-anmini"><i>'+L.levels[c]+'</i><b>'+sub.total+'</b><u>'+sub.done+' / '+sub.total+' · '+sub.pct+'%</u></div>';
  });
  PL_ORDER.forEach(function(c){
    var sub=statsOf(rows.filter(function(r){return plOf(r)===c}));
    if(sub.total) mini+='<div class="g-anmini"><i>'+L.pls[c]+'</i><b>'+sub.total+'</b><u>'+sub.done+' / '+sub.total+' · '+sub.pct+'%</u></div>';
  });
  $('canmini').innerHTML=mini;

  var maxA=1, accSt={};
  ACC_ORDER.forEach(function(id){
    var sub=statsOf(rows.filter(function(r){return r[1]===id}));
    accSt[id]=sub; if(sub.total>maxA) maxA=sub.total;
  });
  var ha='';
  ACC_ORDER.forEach(function(id){
    if(!accSt[id].total) return;
    ha+=barRow(ACC[id].code,accSt[id],maxA);
  });
  $('canacc').innerHTML=ha||'<div class="g-anempty">'+t('anNone')+'</div>';

  var maxP=1, per=[];
  PEOPLE.forEach(function(n){
    var sub=statsOf(rows.filter(function(r){return (r[4]||'').indexOf(n)!==-1}));
    if(sub.total){ per.push([n,sub]); if(sub.total>maxP) maxP=sub.total }
  });
  per.sort(function(a,b){return b[1].total-a[1].total});
  $('canteam').innerHTML=per.length
    ? per.map(function(x){return barRow(x[0],x[1],maxP)}).join('')
    : '<div class="g-anempty">'+t('anNone')+'</div>';

  requestAnimationFrame(function(){requestAnimationFrame(function(){
    $('canview').querySelectorAll('.g-anstack i').forEach(function(x){x.style.width=x.getAttribute('data-w')+'%'});
  })});
}

function render(soft){
  var y=window.scrollY||document.documentElement.scrollTop||0;
  SOFT=!!soft;
  if(tab==='plan'){ renderPlan(); renderStrip() }
  else if(tab==='accs') renderAccs();
  else if(tab==='team') renderTeam();
  else renderAn();
  renderKpi();
  $('cnPlan').textContent=PLAN.length;
  $('cnAccs').textContent=ACC_ORDER.length;
  $('cnTeam').textContent=PEOPLE.length;
  if(SOFT){ window.scrollTo(0,y); requestAnimationFrame(function(){window.scrollTo(0,y);SOFT=false}) }
}
function setTab(tb,noScroll){
  tab=tb;
  $('ctabs').querySelectorAll('.g-tab').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-t')===tab)});
  var isPlan=tab==='plan', isAn=tab==='an';
  $('cfilters').style.display=(isPlan||isAn)?'block':'none';
  $('cstrip').style.display=isPlan?'grid':'none';
  $('cadvtog').style.display=(isPlan||isAn)?'inline-flex':'none';
  $('cchipToday').style.display=$('cchipPlan').style.display=$('cchipDone').style.display=isPlan?'inline-flex':'none';
  $('cchipLate').style.display=isPlan?'inline-flex':'none';
  $('creset').style.display=(isPlan||isAn)?'inline-flex':'none';
  $('ckpi').style.display=(tab==='accs'||tab==='team')?'none':'grid';
  $('cplanview').style.display=isPlan?'block':'none';
  $('caccview').style.display=tab==='accs'?'block':'none';
  $('cteamview').style.display=tab==='team'?'block':'none';
  $('canview').style.display=isAn?'block':'none';
  render(true);
  if(!noScroll) sc($('cpanel'));
}

/* ═════ ӨҢДЕУ ═════ */
var SHOWDONE={};
var MODAL={kind:'post',idx:null};
function fillModalSelects(){
  var acc=$('cmacc'),rs=$('cmresps'),pr=$('cmperson'),lv=$('cmlevel'),pl=$('cmpl');
  acc.innerHTML='';rs.innerHTML='';pr.innerHTML='';lv.innerHTML='';pl.innerHTML='';
  LEVELS.forEach(function(c){lv.appendChild(opt(c,I18N[lang].levels[c]))});
  ACC_ORDER.forEach(function(id){acc.appendChild(opt(id,ACC[id].code+' · '+ACC[id][lang]))});
  PL_ORDER.forEach(function(c){pl.appendChild(opt(c,I18N[lang].pls[c]))});
  TEAM.forEach(function(role){
    var g=document.createElement('span'); g.className='g-pgrp'; g.textContent=role[lang]; rs.appendChild(g);
    role.people.forEach(function(x){
      var b=document.createElement('button');
      b.type='button'; b.className='g-pick'; b.setAttribute('data-p',x); b.textContent=x;
      rs.appendChild(b); pr.appendChild(opt(x,x));
    });
  });
}
function fillTypes(pl,keep){
  var ty=$('cmtype'); ty.innerHTML='';
  var list=typesFor(pl);
  list.forEach(function(c){ty.appendChild(opt(c,I18N[lang].types[c]))});
  ty.value=(keep&&list.indexOf(keep)!==-1)?keep:list[0];
}
$('cmpl').addEventListener('change',function(){ fillTypes(this.value) });
function setPicks(list){
  var set={}; list.forEach(function(x){set[x]=1});
  $('cmresps').querySelectorAll('.g-pick').forEach(function(b){b.classList.toggle('on',!!set[b.getAttribute('data-p')])});
}
function getPicks(){
  var out=[];
  $('cmresps').querySelectorAll('.g-pick.on').forEach(function(b){out.push(b.getAttribute('data-p'))});
  return out.join(', ');
}
function mdToIso(md){return YEAR+'-'+String(md).slice(0,2)+'-'+String(md).slice(2)}
function isoToMd(v){return (v&&v.length>=10)?v.slice(5,7)+v.slice(8,10):''}
function openModal(kind,idx,preset){
  MODAL.kind=kind; MODAL.idx=(idx==null?null:idx);
  fillModalSelects();
  var isPost=kind==='post', done=false;
  $('cmfacc').style.display=$('cmftype').style.display=$('cmfresp').style.display=isPost?'flex':'none';
  $('cmfpl').style.display=isPost?'flex':'none';
  $('cmflevel').style.display=$('cmflink').style.display=isPost?'flex':'none';
  $('cmfperson').style.display=isPost?'none':'flex';
  $('cmdel').style.display=MODAL.idx==null?'none':'inline-flex';
  $('cmdel').classList.remove('arm'); $('cmdel').querySelector('span').textContent=t('del');
  $('cmtitle').textContent=t(isPost?(MODAL.idx==null?'newPost':'editPost'):(MODAL.idx==null?'newTask':'editTask'));
  $('cmtext').style.borderColor=''; $('cmlink').style.borderColor='';
  if(isPost){
    if(MODAL.idx!=null){
      var r=PLAN[MODAL.idx];
      $('cmdate').value=mdToIso(r[0]); $('cmacc').value=r[1];
      var ct=tyOf(r), cpl=plOf(r)||(filt.pl||'ig');
      $('cmpl').value=cpl; fillTypes(cpl,ct); $('cmtype').value=ct;
      $('cmtext').value=r[3]; setPicks(splitResp(r[4])); done=!!r[5];
      $('cmlevel').value=lvOf(r); $('cmlink').value=String(r[8]||'');
    }else{
      var pre=preset||{};
      $('cmdate').value=mdToIso(pre.md||TODAY_KEY||'0801');
      $('cmacc').value=pre.acc||filt.acc||'main';
      var npl=filt.pl||(($('cmacc').value==='main')?'ig':'ig');
      $('cmpl').value=npl; fillTypes(npl,filt.type||'r');
      $('cmtext').value=''; setPicks(filt.resp?[filt.resp]:[]);
      $('cmlevel').value=filt.lv||'mid'; $('cmlink').value='';
    }
  }else{
    if(MODAL.idx!=null){
      var x=TASKS[MODAL.idx];
      $('cmperson').value=x[0]; $('cmdate').value=x[1]?mdToIso(x[1]):''; $('cmtext').value=x[2]; done=!!x[3];
    }else{
      $('cmperson').value=(typeof preset==='string'?preset:PEOPLE[0]);
      $('cmdate').value=TODAY_KEY?mdToIso(TODAY_KEY):''; $('cmtext').value='';
    }
  }
  setDoneState(done);
  $('cmodal').classList.add('on');
  setTimeout(function(){$('cmtext').focus()},80);
}
function closeModal(){$('cmodal').classList.remove('on')}
function afterEdit(md,row){
  if(row && !matches(row)){
    filt={acc:'',resp:'',range:'custom',shift:0,
          from:isoOf(md?dOf(md):TODAY), to:isoOf(md?dOf(md):TODAY),
          type:'',pl:'',st:'',lv:''};
    $('cq').value=''; $('cclear').classList.remove('on');
  }
  buildSelects(); render(true);
}
$('cmresps').addEventListener('click',function(e){
  var b=e.target.closest('.g-pick'); if(b) b.classList.toggle('on');
});
function setDoneState(v){
  $('cmdone').classList.toggle('on',!!v);
  $('cmplan').classList.toggle('on',!v);
  $('cmflink').style.display=(MODAL.kind==='post'&&(v||$('cmlink').value.trim()))?'flex':'none';
}
$('cmdone').addEventListener('click',function(){
  setDoneState(true);
  if(MODAL.kind==='post'&&!/^https?:\/\//i.test($('cmlink').value.trim())){
    $('cmtitle').textContent=t('needLink');
    $('cmlink').style.borderColor='#e03131';
    setTimeout(function(){$('cmlink').focus()},60);
  }
});
$('cmplan').addEventListener('click',function(){ setDoneState(false); $('cmlink').style.borderColor='' });
$('cmlink').addEventListener('input',function(){ if(this.value.trim()) this.style.borderColor='' });
$('cmsave').addEventListener('click',function(){
  var text=$('cmtext').value.trim(), md=isoToMd($('cmdate').value);
  var done=$('cmdone').classList.contains('on')?1:0;
  if(MODAL.kind==='post'){
    if(!md||!text){ $('cmtext').style.borderColor='#e03131'; $('cmtitle').textContent=t('needFields'); return }
    var link=$('cmlink').value.trim();
    if(done&&!/^https?:\/\//i.test(link)){ $('cmlink').style.borderColor='#e03131'; $('cmtitle').textContent=t('needLink'); $('cmlink').focus(); return }
    var row=[md,$('cmacc').value,$('cmtype').value,text,getPicks(),done,
             (MODAL.idx==null?uid():(PLAN[MODAL.idx][6]||uid())),$('cmlevel').value,link,
             (MODAL.idx==null?'':String(PLAN[MODAL.idx][9]||''))];
    if(MODAL.idx==null) PLAN.push(row); else PLAN[MODAL.idx]=row;
    qUp('plan',row);
    closeModal(); if(tab!=='plan') setTab('plan',true);
    afterEdit(md,row);
  }else{
    if(!text){ $('cmtext').style.borderColor='#e03131'; return }
    var task=[$('cmperson').value,md,text,done,(MODAL.idx==null?uid():(TASKS[MODAL.idx][4]||uid()))];
    if(MODAL.idx==null) TASKS.push(task); else TASKS[MODAL.idx]=task;
    qUp('tasks',task);
    closeModal(); afterEdit(null);
  }
});
$('cmdel').addEventListener('click',function(){
  if(!this.classList.contains('arm')){
    this.classList.add('arm'); this.querySelector('span').textContent=t('confirmDel');
    var b=this; setTimeout(function(){b.classList.remove('arm');b.querySelector('span').textContent=t('del')},2500);
    return;
  }
  if(MODAL.kind==='post'){ qDel('plan',PLAN[MODAL.idx][6]); PLAN.splice(MODAL.idx,1) }
  else { qDel('tasks',TASKS[MODAL.idx][4]); TASKS.splice(MODAL.idx,1) }
  closeModal(); afterEdit(null);
});
$('cmcancel').addEventListener('click',closeModal);
$('cmclose').addEventListener('click',closeModal);
$('cmodal').addEventListener('click',function(e){if(e.target===this)closeModal()});
$('caddpost').addEventListener('click',function(){openModal('post',null)});

app.addEventListener('click',function(e){
  var b=e.target.closest('[data-acc],[data-resp]');
  if(!b || b.hasAttribute('data-addacc')) return;
  if(b.hasAttribute('data-acc')){ filt.acc=b.getAttribute('data-acc'); buildSelects(); setTab('plan') }
  else{ filt.resp=b.getAttribute('data-resp'); $('cq').value=''; $('cclear').classList.remove('on'); buildSelects(); setTab('plan') }
});
app.addEventListener('click',function(e){
  var b=e.target.closest('[data-pe],[data-pd],[data-pt],[data-te],[data-td],[data-at],[data-addday],[data-addacc],[data-why],[data-sd],[data-day]');
  if(!b) return;
  if(b.hasAttribute('data-why')){ openWhy(parseInt(b.getAttribute('data-why'),10)); return }
  if(b.hasAttribute('data-sd')){ var nm=b.getAttribute('data-sd'); SHOWDONE[nm]=!SHOWDONE[nm]; render(true); return }
  if(b.hasAttribute('data-day')){
    var iso=b.getAttribute('data-day');
    filt.st=''; filt.shift=0;
    if(iso===isoOf(TODAY)){ filt.range='today'; filt.from=''; filt.to='' }
    else{ filt.range='custom'; filt.from=iso; filt.to=iso }
    $('cq').value=''; $('cclear').classList.remove('on');
    buildSelects(); render(true); return;
  }
  if(b.hasAttribute('data-pe')){ openModal('post',parseInt(b.getAttribute('data-pe'),10)); return }
  if(b.hasAttribute('data-te')){ openModal('task',parseInt(b.getAttribute('data-te'),10)); return }
  if(b.hasAttribute('data-at')){ openModal('task',null,b.getAttribute('data-at')); return }
  if(b.hasAttribute('data-addday')){ openModal('post',null,{md:b.getAttribute('data-addday')}); return }
  if(b.hasAttribute('data-addacc')){ openModal('post',null,{acc:b.getAttribute('data-addacc')}); return }
  if(b.hasAttribute('data-pt')){
    var pidx=parseInt(b.getAttribute('data-pt'),10), r=PLAN[pidx];
    if(isLate(r)&&!reasonOf(r)&&!r[5]){ openWhy(pidx); return }
    if(!r[5]&&!linkOf(r)){
      openModal('post',pidx);
      $('cmdone').classList.add('on');
      $('cmtitle').textContent=t('needLink');
      $('cmlink').style.borderColor='#e03131';
      setTimeout(function(){$('cmlink').focus()},120);
      return;
    }
    r[5]=r[5]?0:1; if(!r[6]) r[6]=uid();
    render(true); qUp('plan',r); return;
  }
  var isPlan=b.hasAttribute('data-pd');
  if(!b.classList.contains('arm')){
    b.classList.add('arm'); b.textContent=t('confirmDel');
    setTimeout(function(){b.classList.remove('arm');b.textContent='✕'},2500);
    return;
  }
  var i=parseInt(b.getAttribute(isPlan?'data-pd':'data-td'),10);
  if(isPlan){ qDel('plan',PLAN[i][6]); PLAN.splice(i,1) } else { qDel('tasks',TASKS[i][4]); TASKS.splice(i,1) }
  afterEdit(null);
});

/* ═════ ОРЫНДАЛМАҒАН ТАПСЫРМА: СЕБЕБІ ═════ */
var LATE_IDX=null;
function openWhy(idx){
  LATE_IDX=idx;
  var r=PLAN[idx];
  $('crsub').textContent=t('whySub').replace('{t}',r[3]).replace('{d}',dShort(r[0]));
  $('crtext').value=reasonOf(r);
  $('crtext').style.borderColor='';
  $('crdate').value=isoOf(shiftDays(TODAY,1));
  $('crdate').style.borderColor='';
  $('cremodal').classList.add('on');
  setTimeout(function(){$('crtext').focus()},80);
}
function whyReason(){
  var v=$('crtext').value.trim();
  if(!v){ $('crtext').style.borderColor='#e03131'; $('crsub').textContent=t('needWhy'); $('crtext').focus(); return null }
  return v;
}
function whySave(newMd){
  var r=PLAN[LATE_IDX];
  var why=whyReason(); if(why===null) return;
  r[9]=why;
  if(!r[6]) r[6]=uid();
  if(newMd) r[0]=newMd;
  $('cremodal').classList.remove('on');
  qUp('plan',r);
  afterEdit(newMd||r[0],r);
}
$('crkeep').addEventListener('click',function(){ whySave(null) });
$('crmove').addEventListener('click',function(){
  var md=isoToMd($('crdate').value);
  if(!md){ $('crdate').style.borderColor='#e03131'; $('crsub').textContent=t('needDate'); return }
  whySave(md);
});
$('crclose').addEventListener('click',function(){$('cremodal').classList.remove('on')});
$('cremodal').addEventListener('click',function(e){if(e.target===this)this.classList.remove('on')});

/* ═════ GOOGLE КЕСТЕМЕН СИНХРОН ═════ */
var PIN_MEM='', SYNC='idle', QUEUE=[], SENDING=false, qtmr=null, poller=null;
function ensureIds(){
  PLAN.forEach(function(r){if(!r[6])r[6]=uid()});
  TASKS.forEach(function(x){if(!x[4])x[4]=uid()});
}
function pinGet(){ if(PIN_MEM) return PIN_MEM; try{return localStorage.getItem('juz40_pin')||''}catch(e){return ''} }
function pinSet(v){ PIN_MEM=v; try{ if(v) localStorage.setItem('juz40_pin',v); else localStorage.removeItem('juz40_pin') }catch(e){} }
function linked(){ return !!SHEET_URL }
function syncStatus(){
  var box=$('csync'), txt=$('csynct'); if(!box) return;
  box.className='g-sync';
  var out;
  if(!linked()) out=t('syncLocal');
  else if(SYNC==='busy'){ box.classList.add('busy'); out=t('syncBusy') }
  else if(SYNC==='ok'){ box.classList.add('ok'); out=t('syncOk') }
  else if(SYNC==='err'){ box.classList.add('err'); out=t('syncErr') }
  else if(SYNC==='dirty'){ box.classList.add('dirty'); out=t('syncDirty').replace('{n}',DIRTY) }
  else out=pinGet()?t('syncIdle'):t('syncNoTok');
  txt.textContent=out;
}
function markDirty(){ DIRTY++; SYNC='dirty'; syncStatus() }
function qOp(op){
  if(!linked()){ markDirty(); return }
  QUEUE=QUEUE.filter(function(o){return !(o.s===op.s&&o.id===op.id)});
  QUEUE.push(op); markDirty();
  clearTimeout(qtmr); qtmr=setTimeout(flush,900);
}
function qUp(kind,row){ qOp({t:'up',s:kind,id:kind==='plan'?row[6]:row[4],row:row.slice()}) }
function qDel(kind,id){ qOp({t:'del',s:kind,id:id}) }
function post(payload){
  return fetch(SHEET_URL,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(payload)})
    .then(function(r){ if(!r.ok) throw new Error(r.status); return r.json() })
    .then(function(j){ if(j&&j.error) throw new Error(j.error); return j });
}
function flush(){
  if(SENDING||!QUEUE.length||!linked()) return;
  var pin=pinGet(); if(!pin){ openToken(); return }
  var batch=QUEUE; QUEUE=[]; SENDING=true; SYNC='busy'; syncStatus();
  post({pin:pin,ops:batch}).then(function(j){
    SENDING=false; DIRTY=0;
    if(j&&j.updated){ UPDATED=j.updated; applyI18n() }
    SYNC='ok'; syncStatus();
    setTimeout(function(){ if(SYNC==='ok'){SYNC='idle';syncStatus()} },3000);
    if(QUEUE.length) flush();
  }).catch(function(err){
    SENDING=false; QUEUE=batch.concat(QUEUE); SYNC='err'; syncStatus();
    if(String(err.message)==='pin'){ pinSet(''); openToken() }
  });
}
function applyData(j){
  if(!j) return false;
  var before=JSON.stringify([PLAN,TASKS]);
  if(j.plan) PLAN=j.plan;
  if(j.tasks) TASKS=j.tasks;
  if(j.updated) UPDATED=j.updated;
  ensureIds();
  applyI18n(); render(true);
  return JSON.stringify([PLAN,TASKS])!==before;
}
function pull(quiet){
  if(!linked()) return Promise.resolve(false);
  return fetch(SHEET_URL+'?t='+Date.now(),{cache:'no-store'})
    .then(function(r){ if(!r.ok) throw new Error(r.status); return r.json() })
    .then(function(j){ LOADING=false; var ch=applyData(j); if(!quiet){SYNC='idle';syncStatus()} return ch })
    .catch(function(){ LOADING=false; render(true); if(!quiet){SYNC='err';syncStatus()} return false });
}
function startPolling(){
  if(!linked()||poller) return;
  poller=setInterval(function(){
    if(DIRTY||SENDING||QUEUE.length) return;
    if($('cmodal').classList.contains('on')||$('ctokmodal').classList.contains('on')) return;
    if(document.hidden) return;
    pull(true);
  },POLL_SEC*1000);
}
function openToken(){
  $('ctok').value=pinGet();
  $('ctokmodal').classList.add('on');
  setTimeout(function(){$('ctok').focus()},80);
}
function setEdit(v){
  EDIT=!!v;
  $('cedittog').classList.toggle('on',EDIT);
  $('cedittog').querySelector('span').textContent=EDIT?t('editOn'):t('edit');
  $('cedbar').classList.toggle('on',EDIT);
  try{ if(EDIT) localStorage.setItem('juz40_edit','1'); else localStorage.removeItem('juz40_edit') }catch(e){}
  render(true); syncStatus();
}
var IC_MOON='<path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z"/>';
var IC_SUN='<circle cx="12" cy="12" r="4.2"/><path d="M12 2.6v2M12 19.4v2M2.6 12h2M19.4 12h2M5.3 5.3l1.5 1.5M17.2 17.2l1.5 1.5M18.7 5.3l-1.5 1.5M6.8 17.2l-1.5 1.5"/>';
function setTheme(dark){
  app.classList.toggle('dark',!!dark);
  $('cthemeic').innerHTML=dark?IC_SUN:IC_MOON;
  try{ localStorage.setItem('juz40_theme',dark?'dark':'light') }catch(e){}
}
$('ctheme').addEventListener('click',function(){ setTheme(!app.classList.contains('dark')) });

$('cedittog').addEventListener('click',function(){
  if(!EDIT&&linked()&&!pinGet()){ openToken(); return }
  setEdit(!EDIT);
});
$('ctoksave').addEventListener('click',function(){
  pinSet($('ctok').value.trim());
  $('ctokmodal').classList.remove('on');
  if(pinGet()){ setEdit(true); if(QUEUE.length) flush() } else syncStatus();
});
$('ctokforget').addEventListener('click',function(){ pinSet(''); $('ctok').value=''; $('ctokmodal').classList.remove('on'); setEdit(false) });
$('ctokclose').addEventListener('click',function(){$('ctokmodal').classList.remove('on')});
$('ctokmodal').addEventListener('click',function(e){if(e.target===this)this.classList.remove('on')});
$('cmore2').addEventListener('click',function(e){e.stopPropagation();$('cmenu').classList.toggle('on')});
document.addEventListener('click',function(e){ if(!e.target.closest('.g-more2')) $('cmenu').classList.remove('on') });
$('csave').addEventListener('click',function(){ $('cmenu').classList.remove('on'); clearTimeout(qtmr); if(QUEUE.length) flush(); else pull(false) });
$('creload').addEventListener('click',function(){ $('cmenu').classList.remove('on'); SYNC='busy'; syncStatus(); pull(false) });
$('ctokbtn').addEventListener('click',function(){ $('cmenu').classList.remove('on'); openToken() });
$('copensheet').addEventListener('click',function(){ $('cmenu').classList.remove('on'); if(SHEET_EDIT_URL) window.open(SHEET_EDIT_URL,'_blank') });
$('cseed').addEventListener('click',function(){
  $('cmenu').classList.remove('on');
  if(!linked()||!window.confirm(t('seedAsk'))) return;
  var pin=pinGet(); if(!pin){ openToken(); return }
  ensureIds(); SYNC='busy'; syncStatus();
  post({pin:pin,seed:true,plan:PLAN,tasks:TASKS}).then(function(j){ applyData(j); DIRTY=0; SYNC='ok'; syncStatus() })
    .catch(function(){ SYNC='err'; syncStatus() });
});
$('cexpjson').addEventListener('click',function(){
  $('cmenu').classList.remove('on');
  var data=JSON.stringify({updated:UPDATED||stamp(),plan:PLAN,tasks:TASKS});
  try{
    var u=URL.createObjectURL(new Blob([data],{type:'application/json'}));
    var a=document.createElement('a'); a.href=u; a.download='juz40-plan.json';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function(){URL.revokeObjectURL(u)},800);
  }catch(e){}
});
$('cimpbtn').addEventListener('click',function(){ $('cmenu').classList.remove('on'); $('cimp').click() });
$('cimp').addEventListener('change',function(){
  var f=this.files&&this.files[0]; if(!f) return;
  var rd=new FileReader();
  rd.onload=function(){
    try{
      var j=JSON.parse(rd.result);
      if(Array.isArray(j)) PLAN=j; else { if(j.plan) PLAN=j.plan; if(j.tasks) TASKS=j.tasks }
      ensureIds(); afterEdit(null);
      if(linked()&&pinGet()){ PLAN.forEach(function(r){qUp('plan',r)}); TASKS.forEach(function(x){qUp('tasks',x)}) }
    }catch(e){}
  };
  rd.readAsText(f); this.value='';
});
window.addEventListener('beforeunload',function(e){
  if(DIRTY>0||QUEUE.length){ e.preventDefault(); e.returnValue=t('leaveWarn'); return t('leaveWarn') }
});

/* ═════ СҮЗГІЛЕР ЖӘНЕ ВКЛАДКАЛАР ═════ */
var tmr=null;
$('ctabs').addEventListener('click',function(e){
  var b=e.target.closest('.g-tab'); if(b) setTab(b.getAttribute('data-t'),true);
});
$('cq').addEventListener('input',function(){
  $('cclear').classList.toggle('on',!!this.value);
  clearTimeout(tmr); tmr=setTimeout(function(){ if(tab!=='plan') setTab('plan',true); else render(true) },250);
});
$('cq').addEventListener('keydown',function(e){ if(e.key==='Enter'){clearTimeout(tmr); render(true); this.blur()} });
$('cclear').addEventListener('click',function(){ $('cq').value=''; this.classList.remove('on'); render(true); $('cq').focus() });
$('cadvtog').addEventListener('click',function(){
  var open=$('cadv').classList.toggle('on');
  this.classList.toggle('on',open);
});
$('cacc').addEventListener('change',function(){filt.acc=this.value;render(true)});
$('cresp').addEventListener('change',function(){filt.resp=this.value;render(true)});
$('crange').addEventListener('change',function(){
  filt.range=this.value; filt.shift=0;
  if(filt.range==='custom'){
    if(!filt.from) filt.from=isoOf(TODAY);
    if(!filt.to) filt.to=isoOf(shiftDays(TODAY,6));
    $('cadv').classList.add('on'); $('cadvtog').classList.add('on');
  }
  if(filt.st==='late') filt.st='';
  buildSelects(); render(true);
});
$('cfrom').addEventListener('change',function(){filt.from=this.value;filt.shift=0;render(true)});
$('cto').addEventListener('change',function(){filt.to=this.value;filt.shift=0;render(true)});
$('ctype').addEventListener('change',function(){filt.type=this.value;render(true)});
$('cpl').addEventListener('change',function(){filt.pl=this.value;buildSelects();render(true)});
$('clevel').addEventListener('change',function(){filt.lv=this.value;render(true)});
$('cchipPlan').addEventListener('click',function(){filt.st=filt.st==='plan'?'':'plan';render(true)});
$('cchipDone').addEventListener('click',function(){filt.st=filt.st==='done'?'':'done';render(true)});
$('cchipToday').addEventListener('click',function(){
  filt.range='today'; filt.shift=0; filt.st='';
  $('cq').value=''; $('cclear').classList.remove('on');
  buildSelects(); if(tab!=='plan') setTab('plan',true); else render(true);
});
$('cchipLate').addEventListener('click',function(){
  filt.st=filt.st==='late'?'':'late';
  if(filt.st==='late'){ $('cq').value=''; $('cclear').classList.remove('on') }
  if(tab!=='plan') setTab('plan',true); else render(true);
});
function stepRange(dir){
  if(filt.range==='all') return;
  if(filt.range==='custom'){
    var rg=rangeDates(); if(!rg) return;
    filt.from=isoOf(shiftDays(rg.a,dir*rg.len));
    filt.to=isoOf(shiftDays(rg.b,dir*rg.len));
    filt.shift=0; buildSelects();
  }else{
    filt.shift+=dir;
  }
  if(filt.st==='late') filt.st='';
  render(true);
}
$('cprevw').addEventListener('click',function(){ stepRange(-1) });
$('cnextw').addEventListener('click',function(){ stepRange(1) });
$('ctodayw').addEventListener('click',function(){$('cchipToday').click()});
$('creset').addEventListener('click',function(){
  filt={acc:'main',resp:'',range:'today',shift:0,from:'',to:'',type:'',pl:'',st:'',lv:''};
  $('cq').value=''; $('cclear').classList.remove('on');
  buildSelects(); render(true);
});
$('clang').addEventListener('click',function(e){
  var b=e.target.closest('button'); if(!b) return;
  var l=b.getAttribute('data-l'); if(l===lang) return;
  lang=l;
  this.classList.toggle('ru',lang==='ru');
  this.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x.getAttribute('data-l')===lang)});
  applyI18n(); render(true); syncStatus();
});

/* ═════ ІСКЕ ҚОСУ ═════ */
ensureIds();
var savedTheme='';
try{ savedTheme=localStorage.getItem('juz40_theme')||'' }catch(e){}
setTheme(savedTheme==='dark');
var remembered=false;
try{ remembered=!!localStorage.getItem('juz40_edit') }catch(e){}
EDIT=remembered&&(!linked()||!!pinGet());
$('cedittog').classList.toggle('on',EDIT);
$('cedbar').classList.toggle('on',EDIT);
if(!SHEET_EDIT_URL) $('copensheet').style.display='none';
LOADING=linked();
applyI18n();
setTab('plan',true);
syncStatus();
if(linked()){ pull(true).then(startPolling) }
document.addEventListener('visibilitychange',function(){
  if(!document.hidden&&linked()&&!DIRTY&&!QUEUE.length) pull(true);
});

})();
