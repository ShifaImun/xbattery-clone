"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const howItWorksTabs = [
  {
    label: "Normal Operation",
    title: "Normal Operation",
    desc: "The 5kWh Xbattery powers your home and charges from the grid or solar when available.",
  },
  {
    label: "During Power Outages",
    title: "During Power Outages",
    desc: "When the grid goes down, Xbattery automatically switches to backup mode, keeping your home powered.",
  },
  {
    label: "Power Restoration",
    title: "Power Restoration",
    desc: "Once the grid power is restored, the 5kWh Xbattery automatically switches back to normal mode, ensuring a smooth and seamless transition.",
  },
  {
    label: "Solar Integration",
    title: "Solar Integration",
    desc: "Xbattery works with solar panels to store excess energy and power your home day and night.",
  },
];

export default function Home() {
  const [howTab, setHowTab] = useState(2); 
  return (
    <>
      <div className={styles.heroContainer}>
        <video
          className={styles.heroVideo}
          src="https://xbattery.energy/videos/Xbattery-Hd.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className={styles.heroOverlay}>
          <header className={styles.heroHeader}>
            <div className={styles.heroLogo}>
              {/* Replace with actual logo if available */}
              <Image src="/logo1.webp" alt="Xbattery Logo" width={140} height={40} />
            </div>
            <nav className={styles.heroNav}>
              <a href="#energy-storage">Energy Storage</a>
              <Link href="/bharat-bms" className={styles.heroNavLink}>BharatBMS</Link>
              <a href="/about">About</a>
              <a href="/blog">Blog</a>
              <a href="/whitepapers">Whitepapers</a>
            </nav>
           <a className={styles.customerPortalBtn} href="/customer-portal">Customer Portal</a>
          </header>
          <main className={styles.heroMain}>
            <h1 className={styles.heroTitle + ' ' + styles.fadeIn} style={{ color: '#fff' }}>Introducing BharatBMS</h1>
            <p className={styles.heroSubtitle}>
              Scalable up to 800V for EVs, home backup, and energy storage
            </p>
          </main>
        </div>
      </div>
      
      <section className={styles.bharatBmsSection}>
        <div className={styles.bharatBmsContent}>
          <div className={styles.bharatBmsImageWrap}>
            <img
              className={styles.bharatBmsImage}
              src="https://xbattery.energy/_next/image?url=%2Fimages%2Fhero%2Fbharat%2Fchip1.png&w=1080&q=75"
          alt="BharatBMS Chip"
            />
          </div>
          <div className={styles.bharatBmsTextWrap}>
          <h2 className={styles.bharatBmsTitle} style={{ color: '#00eaff', margin: '12px 0' }}>
  BharatBMS
</h2>




            <p className={styles.bharatBmsDesc}>
              India&apos;s first universal Battery Management System scales from 5kWh setups to megawatt applications, offering modular upgrades and reliable performance in tough power conditions.
            </p>
            <p className={styles.bharatBmsDesc}>
              Made in India with local components, it ensures fast support and customization while driving innovation in energy storage and EV products.
            </p>
            <a className={styles.knowMoreBtn} href="#">Know More →</a>
          </div>
        </div>
      </section>
      <section id="energy-storage" className={styles.xbatteryVideoSection}>
  <div className={styles.videoOverlayContainer}>
    <video
      className={styles.xbatteryVideo}
      src="https://videos.ctfassets.net/6sce2o5alp4f/4XvTyv2fI9Gv0uBFJNq17G/9e856c6ed770a4be0f72a2a04f5ac382/XBattery_1080p.mp4"
      autoPlay
      loop
      muted
      playsInline
      controls={false}
      preload="auto"
    />
    <div className={styles.videoTextOverlay}>
      <h1>Power Your Home 24/7</h1>
      <p>High-performance lithium battery packs designed for India</p>
      <button className={styles.ctaButton}>Get Notified</button>
    </div>
  </div>
</section>

      <section className={styles.capacitySection}>
      <h2 className={styles.capacityTitle} style={{ margin: '12px 0' }}>
  <span className={styles.animatedGradientText}>
    Capacity As Per Your Needs
  </span>
</h2>


        <p className={styles.capacitySubtitle}>
          Xbattery&apos;s 5kWh system is designed to grow with your needs. Simply add more batteries to expand capacity and keep up with your power demands.
        </p>
        <div className={styles.capacityBatteryWrap}>
          <span className={styles.capacityValue}>5kWh</span>
          
      
        <img
          className={styles.capacityArcImg}
          src="/img.png"
          alt="Appliance Arc"
        />
        </div>
      </section>
      <section className={styles.kwhFeatureSection}>
        <div className={styles.kwhFeatureContent}>
          
          <div className={styles.kwhFeatureTextWrap}>
            <h2 className={styles.kwhFeatureTitle + ' ' + styles.fadeIn}>Xbattery 5kWh</h2>
            
            <ul className={styles.kwhFeatureList}>
              <li><span className={styles.checkmark}>✔</span> Powers your home for up to a day during outages.</li>
              <li><span className={styles.checkmark}>✔</span> Stops charging automatically when the battery is full.</li>
              <li><span className={styles.checkmark}>✔</span> Intelligent Modes
              Adjusts for power cuts and restores seamlessly.</li>
              <li><span className={styles.checkmark}>✔</span> Add modules as your energy needs grow.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.howItWorksSection}>
        <h2 className={styles.howItWorksTitle} style={{ margin: '12px 0' }}>
  <span className={styles.animatedGradientText}>
    How It Works
  </span>
</h2>


        <p className={styles.howItWorksSubtitle}>
          You&apos;re covered at every stage of an outage. Its intelligent modes kick in before the power goes out, ensuring your stays powered through any disruption.
        </p>
        <div className={styles.howItWorksMediaWrap}>
          <video
            className={styles.howItWorksVideo}
            src="https://xbattery.energy/videos/steps/1.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload="auto"
          />
        </div>
        <div className={styles.howItWorksTabsWrap}>
          {howItWorksTabs.map((tab, idx) => (
            <button
              key={tab.label}
              className={
                howTab === idx
                  ? styles.howItWorksTabActive
                  : styles.howItWorksTab
              }
              onClick={() => setHowTab(idx)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className={styles.howItWorksTabContent}>
          <h3 className={styles.howItWorksTabTitle}>{howItWorksTabs[howTab].title}</h3>
          <p className={styles.howItWorksTabDesc}>{howItWorksTabs[howTab].desc}</p>
        </div>
      </section>
      <section className={styles.reliableStorageSection}>
      <h2 className={styles.reliableStorageTitle} style={{ color: 'black', margin: '12px 0' }}>
  Reliable Energy Storage for Your Home
</h2>

        <p className={styles.reliableStorageSubtitle + ' ' + styles.whiteText}>
          Xbattery blends seamlessly into your home, occupying minimal space while providing reliable energy storage. It helps manage energy efficiently, lowers electricity bills, and ensures dependable backup power during outages.
        </p>
      </section>
      <section className={styles.learnHubSection}>
        <div className={styles.learnHubContent}>
        <h2 className={styles.learnHubTitle} style={{ color: 'white', margin: '12px 0' }}>
  Learn Energy Storage, Batteries and more
</h2>

          <p className={styles.learnHubSubtitle}>
            Get insights into energy, energy storage, and how they work. Our learning hub simplifies these concepts to help you understand and make the most of sustainable energy.
          </p>
          <a className={styles.learnHubBtn} href="#">Xbattery Learn Hub →</a>
        </div>
      </section>
      <section className={styles.latestBlogsSection}>
        <h2 className={styles.latestBlogsTitle + ' ' + styles.fadeIn}>
          <span className={styles.animatedGradientText}>Latest Blogs</span>
        </h2>
        <div className={styles.blogsGrid}>
          <a className={styles.blogCard} href="https://xbattery.energy/blog/switched-capacitor-baseges.ctfassets.net/6d-active-balancing" target="_blank" rel="noopener noreferrer">
            <img className={styles.blogCardImg} src="https://images.ctfassets.net/6sce2o5alp4f/7qua5Ajg4XjONgGXfMUP2O/9f59ae04553ddd188a781be8d73921b5/download__6_.png" alt="Switched Capacitor Based Active Balancing" />
            <div className={styles.blogCardInfo}>
              <div className={styles.blogCardMeta}>
                <span className={styles.blogCardDate}>Jul 7, 2025</span>
                <span className={styles.blogCardTag}>Active Balancing</span>
              </div>
              <h3 className={styles.blogCardTitle + ' ' + styles.fadeIn}>Switched Capacitor Based Active Balancing: A Guide</h3>
              <p className={styles.blogCardDesc}>Active charge balancing in Li-ion battery packs improves efficiency, battery life, and safety. Learn how it works and why...</p>
              <span className={styles.blogCardReadMore}>Read More →</span>
            </div>
          </a>
          <a className={styles.blogCard} href="https://xbattery.energy/blog/active-charge-balancing-of-li-ion-battery-packs-an-in-depth-guide" target="_blank" rel="noopener noreferrer">
            <img className={styles.blogCardImg} src="https://images.ctfassets.net/6sce2o5alp4f/5NRrXUhV8MDubEcNGn1Gxo/a3617941cb4ccc144b719338b3949580/Active_Charge_Balancing_of_Li-ion_Batteries__1_.png" alt="Active Charge Balancing of Li-ion Batteries" />
            <div className={styles.blogCardInfo}>
              <div className={styles.blogCardMeta}>
                <span className={styles.blogCardDate}>May 15, 2025</span>
                <span className={styles.blogCardTag}>Li-ion Battery Packs</span>
              </div>
              <h3 className={styles.blogCardTitle + ' ' + styles.fadeIn}>Active Charge Balancing of Li-ion Batteries: A Guide</h3>
              <p className={styles.blogCardDesc}>Active charge balancing in Li-ion battery packs improves efficiency, battery life, and safety. Learn how it works and why...</p>
              <span className={styles.blogCardReadMore}>Read More →</span>
            </div>
          </a>
          <a className={styles.blogCard} href="https://xbattery.energy/blog/the-role-of-contactors-in-battery-energy-storage-systems-bess-and-battery" target="_blank" rel="noopener noreferrer">
            <img className={styles.blogCardImg} src="https://images.ctfassets.net/6sce2o5alp4f/XN6IYw3E9lFuVIxCcF3ZL/12fa91d0b12bf91584ec692abc7e687a/Untitled_design.png" alt="Role of Contactors in BESS and BMS" />
            <div className={styles.blogCardInfo}>
              <div className={styles.blogCardMeta}>
                <span className={styles.blogCardDate}>Apr 2, 2025</span>
                <span className={styles.blogCardTag}>BESS</span>
              </div>
              <h3 className={styles.blogCardTitle + ' ' + styles.fadeIn}>Role of Contactors in BESS and BMS</h3>
              <p className={styles.blogCardDesc}>In a BESS, contactors (K1–K4) manage safe connections for charging and discharging. The BMS controls them, enabling pr...</p>
              <span className={styles.blogCardReadMore}>Read More →</span>
            </div>
          </a>
        </div>
        <div className={styles.blogsButtonWrap}>
          <a className={styles.blogsViewAllBtn} href="#">View All Blogs →</a>
        </div>
      </section>
      <section className={styles.newsletterSection}>
        <h2 className={styles.newsletterTitle + ' ' + styles.fadeIn}>
          <span className={styles.animatedGradientText}>Get the updates from Xbattery</span>
        </h2>
        <form className={styles.newsletterForm} onSubmit={e => e.preventDefault()}>
          <input className={styles.newsletterInput} type="email" placeholder="Enter your email" required />
          <button className={styles.newsletterBtn} type="submit">Get Notified</button>
        </form>
      </section>
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
                <li><a href="#">Xbattery 5kWh</a></li>
                <li><a href="#">BharatBMS</a></li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.footerColTitle}>Resources</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Whitepapers</a></li>
                <li><a href="#">Learn</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.footerColTitle}>Company</h4>
              <ul className={styles.footerLinks}>
                <li><a href="#">About</a></li>
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
    </>
  );
}
