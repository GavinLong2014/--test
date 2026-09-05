import {
  ArrowDownRight,
  Building2,
  CheckCircle2,
  Languages,
  MapPin,
  ShieldCheck,
  UsersRound,
  Wrench,
} from 'lucide-react';

const venues = [
  ['篮球馆', 'Basketball Hall'],
  ['排球馆', 'Volleyball Hall'],
  ['艺术体操馆', 'Rhythmic Gymnastics Hall'],
  ['游泳馆', 'Swimming Pool'],
  ['壁球室', 'Squash Courts'],
  ['高尔夫练习室', 'Golf Practice Room'],
  ['击剑练习室', 'Fencing Room'],
  ['乒乓球室', 'Table Tennis Room'],
  ['室外田径场', 'Outdoor Track & Field'],
  ['室外多功能运动场', 'Outdoor Multi-sport Field'],
  ['儿童活动场地', "Children's Activity Area"],
];

const principles = [
  {
    number: '01',
    icon: ShieldCheck,
    zh: '安全优先',
    en: 'Safety first',
    text: '通过日常巡检、风险预防和清晰指引，让每一次活动都从安全开始。',
  },
  {
    number: '02',
    icon: Wrench,
    zh: '可靠运营',
    en: 'Reliable operations',
    text: '关注设施状态、器材维护与空间准备，确保教学和活动顺畅进行。',
  },
  {
    number: '03',
    icon: UsersRound,
    zh: '协作支持',
    en: 'Collaborative support',
    text: '连接教师与行政后勤团队，把现场需求转化为及时、可执行的安排。',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="site-nav" aria-label="主导航">
          <a className="brand" href="#home" aria-label="返回首页">
            <span className="brand-mark">SF</span>
            <span>
              SPORTS FACILITIES
              <small>场馆运营</small>
            </span>
          </a>
          <div className="nav-links">
            <a href="#about">关于我</a>
            <a href="#venues">管理范围</a>
            <a href="#approach">工作理念</a>
          </div>
        </nav>

        <div className="court-lines" aria-hidden="true">
          <span className="court-circle" />
          <span className="court-arc" />
        </div>

        <div className="hero-content">
          <div className="eyebrow"><span /> FACILITY OPERATIONS · 国际学校</div>
          <h1>
            让每一处运动空间
            <span>安全、有序、随时就绪。</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-en">
              Creating safe, well-prepared spaces<br />
              where every student can move, learn and thrive.
            </p>
            <a className="discover" href="#about">
              了解更多 <ArrowDownRight size={20} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-stamp" aria-hidden="true">
          <span>READY</span>
          <strong>365</strong>
          <small>安全 · 秩序 · 支持</small>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-label">01 / ABOUT</div>
        <div className="about-grid">
          <div>
            <p className="kicker">体育场馆管理员</p>
            <h2>专业管理空间，<br />用心支持教育。</h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              我是中国大陆一所国际学校的行政后勤人员，负责学校体育楼、室外运动场地以及体育器材与设施的日常管理。
            </p>
            <p>
              我的工作连接空间、设备与人。从开放前的场地检查，到课程和活动期间的现场支持，再到设施维护与跨部门协调，我致力于让师生获得安全、顺畅且专业的运动体验。
            </p>
            <div className="language-note">
              <Languages size={22} aria-hidden="true" />
              <div>
                <strong>中英双语协作</strong>
                <span>English with teachers · 中文与行政后勤同事沟通</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="venues section" id="venues">
        <div className="section-head">
          <div className="section-label light">02 / SCOPE</div>
          <div>
            <p className="kicker orange">SPACES I MANAGE</p>
            <h2>从室内场馆到户外场地</h2>
          </div>
          <p>覆盖体育教学、训练、比赛与儿童活动所需的多样化空间。</p>
        </div>

        <div className="venue-grid">
          {venues.map(([zh, en], index) => (
            <article className="venue-card" key={en}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{zh}</h3>
                <p>{en}</p>
              </div>
              <CheckCircle2 size={18} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="approach section" id="approach">
        <div className="section-label">03 / APPROACH</div>
        <div className="approach-title">
          <div>
            <p className="kicker">HOW I WORK</p>
            <h2>把复杂的日常，<br />变成稳定的体验。</h2>
          </div>
          <div className="role-card">
            <Building2 size={26} aria-hidden="true" />
            <span>ROLE</span>
            <strong>Sports Facilities<br />Administrator</strong>
            <small><MapPin size={15} aria-hidden="true" /> International School · China</small>
          </div>
        </div>

        <div className="principle-grid">
          {principles.map(({ number, icon: Icon, zh, en, text }) => (
            <article className="principle" key={number}>
              <div className="principle-top">
                <span>{number}</span>
                <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3>{zh}</h3>
              <p className="principle-en">{en}</p>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-mark">SF</div>
        <div>
          <strong>SPORTS FACILITIES ADMINISTRATOR</strong>
          <span>用可靠的场馆运营，支持每一次运动与成长。</span>
        </div>
        <p>SAFE · READY · SUPPORTIVE</p>
      </footer>
    </main>
  );
}
