"use client";
import styles from "../page.module.css";
import Link from "next/link";


function Navbar() {
    return (
      <nav className={styles.heroHeader} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)' }}>
        <div className={styles.heroLogo}>
          <Link href="/">
            <img src="/logo1.webp" alt="Xbattery Logo" width={140} height={40} />
          </Link>
        </div>
        <div className={styles.heroNav}>
          <Link href="/#energy-storage" className={styles.heroNavLink}>Energy Storage</Link>
          <Link href="/bharat-bms" className={styles.heroNavLink}>BharatBMS</Link>
          <Link href="/about" className={styles.heroNavLink}>About</Link>
          <Link href="/blog" className={styles.heroNavLink}>Blog</Link>
          <Link href="/whitepapers" className={styles.heroNavLink}>Whitepapers</Link>
        </div>
        <a className={styles.customerPortalBtn} href="#">Customer Portal</a>
      </nav>
    );
  }

function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContent}>
        <div className={styles.footerSocials}>
          <a href="#" className={styles.footerSocialIcon} aria-label="Email"><span>📧</span></a>
          <a href="#" className={styles.footerSocialIcon} aria-label="X"><span>✖️</span></a>
          <a href="#" className={styles.footerSocialIcon} aria-label="LinkedIn"><span>🔗</span></a>
        </div>
        <div className={styles.footerColumns}>
          <div className={styles.footerCol}>
            <div className={styles.footerLogoWrap}>
              <img src="/logo1.webp" alt="Xbattery Logo" className={styles.footerLogo} />
            </div>
            <p className={styles.footerDesc}>
              Xbattery™ is building lithium battery packs in India, including electronics and software, to help businesses, EVs and grids store energy affordably and access it on demand.
            </p>
          </div>
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Products</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/">Xbattery 5kWh</Link></li>
              <li><Link href="/bharat-bms">BharatBMS</Link></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Resources</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/whitepapers">Whitepapers</Link></li>
              <li><a href="#">Learn</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Company</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/about">About</Link></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Media</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <span>© 2025 Xbattery Energy Private Limited. All rights reserved. <a href="#">Terms and Privacy</a>.</span>
      </div>
    </footer>
  );
}

export default function About() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
      {/* Hero Video Section */}
      <section className={styles.aboutHeroSection + " " + styles.fadeIn}>
        <video
          className={styles.aboutHeroVideo}
          src="https://xbattery.energy/videos/about/1.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className={styles.aboutHeroOverlay}>
          <h1 className={styles.aboutHeroTitle + " " + styles.fadeIn}>Coding for 10,000+ Lithium Cells. One Platform.</h1>
          <button className={styles.aboutHeroBtn + " " + styles.fadeIn}>Our message</button>
        </div>
      </section>
      {/* Xbattery Section */}
      <section className={styles.aboutXbatterySection + " " + styles.fadeIn}>
        <h2 className={styles.aboutXbatteryTitle + " " + styles.fadeIn} style={{ color: '#3ecbff' }}>Xbattery</h2>
        <p className={styles.aboutXbatteryDesc + " " + styles.fadeIn}>
          Xbattery is building lithium battery packs in India, including electronics and software, to help businesses, EVs and grids store energy affordably and access it on demand.
        </p>
        <div className={styles.aboutXbatteryIcons}>
          <div className={styles.aboutXbatteryIconBlock + " " + styles.fadeIn}>
            <span className={styles.aboutXbatteryIcon}>🔬</span>
            <div>Scientific Rigor with Human Touch</div>
          </div>
          <div className={styles.aboutXbatteryIconBlock + " " + styles.fadeIn}>
            <span className={styles.aboutXbatteryIcon}>🌱</span>
            <div>Sustainability & Clean Energy Focus</div>
          </div>
          <div className={styles.aboutXbatteryIconBlock + " " + styles.fadeIn}>
            <span className={styles.aboutXbatteryIcon}>💸</span>
            <div>Economic Sustainability</div>
          </div>
        </div>
      </section>
      {/* Leadership & Team Section */}
      <section className={styles.aboutTeamSection + " " + styles.fadeIn}>
        <div className={styles.aboutTeamWrap}>
          <div className={styles.aboutTeamLeaders + " " + styles.fadeIn}>
            <h3 className={styles.aboutTeamLeadersTitle + " " + styles.fadeIn}>Meet Our Leadership Team</h3>
            <p className={styles.aboutTeamLeadersDesc + " " + styles.fadeIn}>Learn more about the executives leading Xbattery.</p>
            <button className={styles.aboutTeamLeadersBtn + " " + styles.fadeIn}>Meet Our Leaders</button>
          </div>
          <div className={styles.aboutTeamJoin + " " + styles.fadeIn}>
            <h3 className={styles.aboutTeamJoinTitle + " " + styles.fadeIn}>Join Our Team</h3>
            <p className={styles.aboutTeamJoinDesc + " " + styles.fadeIn}>Make Xbattery the best chapter of your career.</p>
            <button className={styles.aboutTeamJoinBtn + " " + styles.fadeIn}>View Open Opportunities</button>
          </div>
        </div>
      </section>
      {/* Our Story Section */}
      <section className={styles.aboutStorySection + " " + styles.fadeIn}>
        <div className={styles.aboutStoryImgWrap}>
          <img className={styles.aboutStoryImg} src="https://xbattery.energy/_next/image?url=%2Fimages%2Fabout%2Fgroup.png&w=1920&q=75" alt="Our Story Group" />
          <h2 className={styles.aboutStoryTitle + " " + styles.fadeIn}>Our Story</h2>
        </div>
      </section>
      {/* CEO Story Section */}
      <section className={styles.aboutCeoSection + " " + styles.fadeIn}>
        <div className={styles.aboutCeoProfile + " " + styles.fadeIn}>
          <img className={styles.aboutCeoImg} src="https://xbattery.energy/_next/image?url=%2Fimages%2Fabout%2Fteams%2Fshortimages%2F1.png&w=256&q=75" alt="Satish Reddy" />
          <div>
            <h3 className={styles.aboutCeoName + " " + styles.fadeIn}>Satish Reddy</h3>
            <div className={styles.aboutCeoRole + " " + styles.fadeIn}>Founder & CEO</div>
          </div>
        </div>
        <div className={styles.aboutCeoText + " " + styles.fadeIn}>
          <p>Climate change is one of the existential risks for humanity. I believe technology plays major role in fighting the crisis. How we generate and consume energy plays a big part in this. India has set an ambitious goal of generating 50% of its energy from renewable sources by 2030. To achieve this, we need to have the supporting technology in place. Of course, we made great progress in renewable energy generation, and we are on the right path. But there is a crucial piece missing: energy storage which makes renewable energy more efficient.</p>
          <p>India needs to create advanced battery technology to support this. Producing battery cells and BMS locally is critical. With these advancements, building large-scale battery packs is not just possible—it's within reach.</p>
          <p>The vision of Xbattery is clear: to make India self-reliant in battery technology. One of the key products of this vision is BharatBMS, our state-of-the-art BMS that can be used to build battery packs of any size and works with wide battery chemistries. Creating such a unified BMS is no easy task, and we are fully aware of the challenges.</p>
          <p>To achieve this, I believe perseverance must remain our core value. We have already developed key technologies like BharatBMS and secured initial partnerships, but this is a tough journey, and we are committed to take on.</p>
          <p>We are excited to launch our first energy storage product for homes and businesses, featuring the BharatBMS. If you want early access, send an email to <a href="mailto:support@xbattery.energy">support@xbattery.energy</a>.</p>
        </div>
      </section>
      {/* Leadership Team Section */}
      <section className={styles.aboutLeadersSection + " " + styles.fadeIn}>
        <h2 className={styles.aboutLeadersTitle + " " + styles.fadeIn}><span style={{ color: '#3ecbff' }}>The Xbattery Leadership Team</span></h2>
        <div className={styles.aboutLeadersWrap}>
          <div className={styles.aboutLeaderCard + " " + styles.fadeIn}>
            <img className={styles.aboutLeaderImg} src="https://xbattery.energy/_next/image?url=%2Fimages%2Fabout%2Fteams%2Fshortimages%2F1.png&w=256&q=75" alt="Satish Reddy" />
            <div>
              <h3 className={styles.aboutLeaderName + " " + styles.fadeIn}>Satish Reddy, CEO of Xbattery <span>🔗</span></h3>
              <p className={styles.aboutLeaderDesc + " " + styles.fadeIn}>Satish Reddy leads Xbattery as founder and CEO. He spent 15 years in tech, working at Microsoft before starting his own company. His first venture, Pascalcase, grew to 35 people and hit $500K in annual revenue within 5 years. Now he's switched gears completely. Instead of building software, he's tackling something bigger: India's power backup problems. His experience scaling companies and building solid teams comes in handy when you're trying to change how energy storage works in India.</p>
            </div>
          </div>
          <div className={styles.aboutLeaderCard + " " + styles.fadeIn}>
            <img className={styles.aboutLeaderImg} src="https://xbattery.energy/_next/image?url=%2Fimages%2Fabout%2Fleaders%2F2.png&w=1200&q=75" alt="Sonu Mishra" />
            <div>
              <h3 className={styles.aboutLeaderName + " " + styles.fadeIn}>Sonu Mishra, CTO of Xbattery <span>🔗</span></h3>
              <p className={styles.aboutLeaderDesc + " " + styles.fadeIn}>Sonu Mishra brings hands-on battery expertise to Xbattery as co-founder and CTO. After getting his Master's in Embedded Systems from Stuttgart, he spent 5 years at Bosch Germany working on energy systems and battery management. Now back in India, he's putting his German engineering experience to work on local power problems. Turns out, designing chips and battery systems for one of Germany's biggest tech companies is pretty useful when you're building power backup solutions for Indian conditions.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Clean Energy Section */}
      <section className={styles.aboutCleanSection + " " + styles.fadeIn}>
        <h2 className={styles.aboutCleanTitle + " " + styles.fadeIn}><span style={{ color: '#3ecbff' }}>Building India's Clean Energy Backbone</span></h2>
        <div className={styles.aboutCleanSubtitle + " " + styles.fadeIn}>Engineered in India for India</div>
        <div className={styles.aboutCleanImgWrap}>
          <img className={styles.aboutCleanImg} src="https://xbattery.energy/_next/image?url=%2Fimages%2Fabout%2Fgroup2.png&w=1920&q=75" alt="Xbattery Team Banner" />
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}