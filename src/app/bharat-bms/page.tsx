"use client";
import Link from "next/link";
import styles from "../page.module.css";

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
      <a className={styles.customerPortalBtn} href="/customer-portal">Customer Portal</a>
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

export default function BharatBMS() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
      {/* Hero Section */}
      <section className={styles.bharatBmsHeroSection + " " + styles.fadeIn}>
        <div className={styles.bharatBmsHeroBg} />
        <div className={styles.bharatBmsHeroContent}>
          <div className={styles.bharatBmsHeroText}>
            <h1 className={styles.bharatBmsHeroTitle + " " + styles.fadeIn}>
              <span style={{ color: "#00eaff" }}>Introducing </span>
              <span style={{ color: "#a259ff" }}>BharatBMS</span>
            </h1>
            <p className={styles.bharatBmsHeroSubtitle + " " + styles.fadeIn}>
              India&apos;s first scalable high-voltage Battery Management System up to 800 volts for EVs and energy storage
            </p>
          </div>
          <div className={styles.bharatBmsHeroImgWrap}>
            <img
              className={styles.bharatBmsHeroImg}
              src="https://xbattery.energy/_next/image?url=%2Fimages%2Fbharatbms%2Fhero.png&w=1920&q=75"
              alt="BharatBMS Hero"
            />
          </div>
        </div>
      </section>
      {/* Description Section */}
      <section className={styles.bharatBmsDescSection + " " + styles.fadeIn}>
        <p className={styles.bharatBmsDescText + " " + styles.fadeIn}>
          BharatBMS is India&apos;s first universal high-voltage Battery Management System (BMS architecture) up to 800 volts for EVs and energy storage that scales effortlessly from home applications to industrial installations and EVs. It&apos;s as effective in a 5kWh home backup system as it is in megawatt-scale battery packs.
        </p>
      </section>
      {/* Features Section */}
      <section className={styles.bharatBmsFeaturesSection + " " + styles.fadeIn}>
        <h2 className={styles.bharatBmsFeaturesTitle + " " + styles.fadeIn} style={{ color: '#3ecbff' }}>Features</h2>
        <div className={styles.bharatBmsFeaturesGrid}>
          <div className={styles.bharatBmsFeatureCard + " " + styles.fadeIn}>
            <div className={styles.bharatBmsFeatureIcon}>🔋</div>
            <h3 className={styles.bharatBmsFeatureTitle}>Cell Monitoring & Balancing</h3>
            <p className={styles.bharatBmsFeatureDesc}>Supports up to 18 series cells with passive balancing for equalization. Voltage accuracy: ±2mV.</p>
          </div>
          <div className={styles.bharatBmsFeatureCard + " " + styles.fadeIn}>
            <div className={styles.bharatBmsFeatureIcon}>💻</div>
            <h3 className={styles.bharatBmsFeatureTitle}>Communication & Control</h3>
            <p className={styles.bharatBmsFeatureDesc}>CAN FD, UART, SPI, and Ethernet for real-time processing and remote monitoring.</p>
          </div>
          <div className={styles.bharatBmsFeatureCard + " " + styles.fadeIn}>
            <div className={styles.bharatBmsFeatureIcon}>🛡️</div>
            <h3 className={styles.bharatBmsFeatureTitle}>Safety Features</h3>
            <p className={styles.bharatBmsFeatureDesc}>ISO 26262 compliant protection for voltage, current, and temperature with fault diagnostics.</p>
          </div>
          <div className={styles.bharatBmsFeatureCard + " " + styles.fadeIn}>
            <div className={styles.bharatBmsFeatureIcon}>🌡️</div>
            <h3 className={styles.bharatBmsFeatureTitle}>Thermal Management</h3>
            <p className={styles.bharatBmsFeatureDesc}>Real-time temperature sensing and thermal runaway detection for high-temperature control.</p>
          </div>
          <div className={styles.bharatBmsFeatureCard + " " + styles.fadeIn}>
            <div className={styles.bharatBmsFeatureIcon}>📈</div>
            <h3 className={styles.bharatBmsFeatureTitle}>Scalability</h3>
            <p className={styles.bharatBmsFeatureDesc}>Modular architecture supports series and parallel setups for larger energy storage needs.</p>
          </div>
          <div className={styles.bharatBmsFeatureCard + " " + styles.fadeIn}>
            <div className={styles.bharatBmsFeatureIcon}>📊</div>
            <h3 className={styles.bharatBmsFeatureTitle}>Diagnostics and Monitoring</h3>
            <p className={styles.bharatBmsFeatureDesc}>Real-time data visualization and lifecycle analytics for better battery management.</p>
          </div>
        </div>
      </section>
      {/* Software Section */}
      <section className={styles.bharatBmsSoftwareSection + " " + styles.fadeIn}>
        <h2 className={styles.bharatBmsSoftwareTitle + " " + styles.fadeIn} style={{ color: '#3ecbff' }}>Software</h2>
        <div className={styles.bharatBmsFeaturesGrid}>
          <div className={styles.bharatBmsFeatureCard + " " + styles.fadeIn}>
            <div className={styles.bharatBmsFeatureIcon}>📉</div>
            <h3 className={styles.bharatBmsFeatureTitle}>SOC/SOH Estimation</h3>
            <p className={styles.bharatBmsFeatureDesc}>Accurate algorithms for State-of-Charge and State-of-Health calculation, ensuring reliable battery status reporting.</p>
          </div>
          <div className={styles.bharatBmsFeatureCard + " " + styles.fadeIn}>
            <div className={styles.bharatBmsFeatureIcon}>💾</div>
            <h3 className={styles.bharatBmsFeatureTitle}>Software Framework</h3>
            <p className={styles.bharatBmsFeatureDesc}>Optimized in C for high efficiency and real-time performance, suitable for demanding applications.</p>
          </div>
          <div className={styles.bharatBmsFeatureCard + " " + styles.fadeIn}>
            <div className={styles.bharatBmsFeatureIcon}>⚙️</div>
            <h3 className={styles.bharatBmsFeatureTitle}>Customizable API</h3>
            <p className={styles.bharatBmsFeatureDesc}>Open API for seamless integration and tailoring system behavior to specific applications.</p>
          </div>
        </div>
      </section>
      {/* Info Cards Section */}
      <section className={styles.bharatBmsInfoSection + " " + styles.fadeIn}>
        <div className={styles.bharatBmsInfoCard + " " + styles.fadeIn}>
          <h3 className={styles.bharatBmsInfoTitle} style={{ color: '#3ecbff' }}>Smart, Simple, Scalable</h3>
          <p className={styles.bharatBmsInfoDesc}>Think of it as a building block system. Starting with a home installation? The basic module handles your needs perfectly. Growing to a larger system? Just add expansion boards – the main controller automatically recognizes and adapts to the new capacity. No complicated reconfiguration needed.</p>
        </div>
        <div className={styles.bharatBmsInfoCard + " " + styles.fadeIn}>
          <h3 className={styles.bharatBmsInfoTitle} style={{ color: '#3ecbff' }}>Built for Indian Conditions</h3>
          <p className={styles.bharatBmsInfoDesc}>India&apos;s power conditions can be challenging – from voltage fluctuations to complete outages. Our system handles these scenarios smoothly, protecting your batteries while keeping your power flowing. The electronics are designed to handle our climate, from dusty summers to humid monsoons.</p>
        </div>
        <div className={styles.bharatBmsInfoCard + " " + styles.fadeIn}>
          <h3 className={styles.bharatBmsInfoTitle} style={{ color: '#3ecbff' }}>Made in India</h3>
          <p className={styles.bharatBmsInfoDesc}>We are proud to say that every circuit board is manufactured and tested in India, with most components sourced locally. This isn&apos;t just about self-reliance – it means faster support and better adaptability to local needs. Our team in Hyderabad can quickly modify the design based on user feedback and local requirements.</p>
        </div>
      </section>
      {/* Partnership Section */}
      <section className={styles.bharatBmsPartnerSection + " " + styles.fadeIn}>
        <div className={styles.bharatBmsPartnerCard + " " + styles.fadeIn}>
          <h3 className={styles.bharatBmsPartnerTitle} style={{ color: '#3ecbff' }}>Partnership with OEMs</h3>
          <p className={styles.bharatBmsPartnerDesc}>We are excited to announce that we are opening partnerships with OEMs across India. Starting January 2025, we will be working with energy storage and EV manufacturers to integrate BharatBMS into their products. This collaboration will help standardize battery management across the industry while allowing OEMs to focus on their core strengths in battery and system development.</p>
        </div>
        <div className={styles.bharatBmsPartnerImages}>
          <img className={styles.bharatBmsPartnerImg} src="https://xbattery.energy/_next/image?url=%2Fimages%2Fbharatbms%2F1.png&w=828&q=75" alt="OEM Board 1" />
          <img className={styles.bharatBmsPartnerImg} src="https://xbattery.energy/_next/image?url=%2Fimages%2Fbharatbms%2F2.png&w=828&q=75" />
          <img className={styles.bharatBmsPartnerImg} src="https://xbattery.energy/_next/image?url=%2Fimages%2Fbharatbms%2F3.png&w=828&q=75" alt="OEM Board 3" />
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}