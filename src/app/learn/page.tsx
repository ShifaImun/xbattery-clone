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
        <Link href="/learn" className={styles.heroNavLink} style={{ color: '#00eaff' }}>Learn</Link>
        <Link href="/whitepapers" className={styles.heroNavLink}>Whitepapers</Link>
      </div>
      <a className={styles.customerPortalBtn} href="/customer-portal">Customer Portal</a>
    </nav>
  );
}

export default function Learn() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '100px', background: '#fff', minHeight: '100vh' }}>
        <div className={styles.learnMainTitle + " " + styles.fadeIn}>
          <h1>Explore the topics</h1>
        </div>
        <div className={styles.learnTopicsGrid + " " + styles.fadeIn}>
          {/* Energy Storage */}
          <div className={styles.learnTopicCard + " " + styles.fadeIn} style={{ background: '#eaf7e7' }}>
            <div>
              <h2>Energy Storage</h2>
              <ul>
                <li>Battery Energy Storage System</li>
                <li>Emerging LDES Technologies</li>
                <li>Understanding BMS in ESS</li>
                <li>Economics of Energy Storage</li>
              </ul>
            </div>
            <img src="https://xbattery.energy/images/comp5/box1.svg" alt="Energy Storage" className={styles.learnTopicImg} />
          </div>
          {/* Renewable Energy */}
          <div className={styles.learnTopicCard + " " + styles.fadeIn} style={{ background: '#e6f4fb' }}>
            <div>
              <h2>Renewable Energy</h2>
              <ul>
                <li>Solar Energy</li>
                <li>Wind Energy</li>
                <li>Geothermal Energy</li>
                <li>Environmental Impact</li>
              </ul>
            </div>
            <img src="https://xbattery.energy/images/comp5/box2.svg" alt="Renewable Energy" className={styles.learnTopicImg} />
          </div>
          {/* Electricity */}
          <div className={styles.learnTopicCard + " " + styles.fadeIn} style={{ background: '#e6effb' }}>
            <div>
              <h2>Electricity</h2>
              <ul>
                <li>India&apos;s Electricity Sector</li>
                <li>Power Purchase Agreement</li>
                <li>Indian Electricity Terminologies</li>
                <li>Why Our Power Goes Out</li>
              </ul>
            </div>
            <img src="https://xbattery.energy/images/comp5/box3.svg" alt="Electricity" className={styles.learnTopicImg} />
          </div>
          {/* Electric Vehicles */}
          <div className={styles.learnTopicCard + " " + styles.fadeIn} style={{ background: '#e6f6fb' }}>
            <div>
              <h2>Electric Vehicles</h2>
              <ul>
                <li>EV vs ICE Costs</li>
                <li>EV Charging</li>
                <li>Indian EV Market</li>
                <li>EVs and the Environment</li>
              </ul>
            </div>
            <img src="https://xbattery.energy/images/comp5/box4.svg" alt="Electric Vehicles" className={styles.learnTopicImg} />
          </div>
          {/* Batteries */}
          <div className={styles.learnTopicCard + " " + styles.fadeIn} style={{ background: '#fcfbe6' }}>
            <div>
              <h2>Batteries</h2>
              <ul>
                <li>Understanding Lithium</li>
                <li>Emerging Battery Technologies</li>
                <li>Understanding LFP Batteries</li>
                <li>Future of Lithium UPS</li>
              </ul>
            </div>
            <img src="https://xbattery.energy/images/comp5/box5.svg" alt="Batteries" className={styles.learnTopicImg} />
          </div>
          {/* Grid */}
          <div className={styles.learnTopicCard + " " + styles.fadeIn} style={{ background: '#f7f3e7' }}>
            <div>
              <h2>Grid</h2>
              <ul>
                <li>Renewable Integration</li>
                <li>Smart Grid</li>
                <li>Understanding Smart Meters</li>
                <li>On-Grid vs Off-Grid</li>
              </ul>
            </div>
            <img src="https://xbattery.energy/images/comp5/box6.svg" alt="Grid" className={styles.learnTopicImg} />
          </div>
        </div>
        {/* Footer Section with Learn and Company Info (compact) */}
        <section className={styles.blogFooterSection + " " + styles.compactFooter + " " + styles.fadeIn}>
          <div className={styles.blogFooterContent}>
            {/* Learn Section */}
            <div className={styles.blogFooterLearn}>
              <Link href="/learn" className={styles.blogFooterLearnTitleLink}><h2 className={styles.blogFooterLearnTitle}>Learn</h2></Link>
              <div className={styles.blogFooterLearnGrid}>
                <div className={styles.blogFooterLearnCategory}>
                  <h3>Energy Storage</h3>
                  <ul>
                    <li>Battery Energy Storage System</li>
                    <li>Emerging LDES Technologies</li>
                    <li>Understanding BMS in ESS</li>
                    <li>Economics of Energy Storage</li>
                  </ul>
                </div>
                <div className={styles.blogFooterLearnCategory}>
                  <h3>Renewable Energy</h3>
                  <ul>
                    <li>Solar Energy</li>
                    <li>Wind Energy</li>
                    <li>Geothermal Energy</li>
                    <li>Environmental Impact</li>
                  </ul>
                </div>
                <div className={styles.blogFooterLearnCategory}>
                  <h3>Electricity</h3>
                  <ul>
                    <li>India&apos;s Electricity Sector</li>
                    <li>Power Purchase Agreement</li>
                    <li>Indian Electricity Terminologies</li>
                    <li>Why Our Power Goes Out</li>
                  </ul>
                </div>
                <div className={styles.blogFooterLearnCategory}>
                  <h3>Electric Vehicles</h3>
                  <ul>
                    <li>EV vs ICE Costs</li>
                    <li>EV Charging</li>
                    <li>Indian EV Market</li>
                    <li>EVs and the Environment</li>
                  </ul>
                </div>
                <div className={styles.blogFooterLearnCategory}>
                  <h3>Batteries</h3>
                  <ul>
                    <li>Understanding Lithium</li>
                    <li>Emerging Battery Technologies</li>
                    <li>Understanding LFP Batteries</li>
                    <li>Future of Lithium UPS</li>
                  </ul>
                </div>
                <div className={styles.blogFooterLearnCategory}>
                  <h3>Grid</h3>
                  <ul>
                    <li>Renewable Integration</li>
                    <li>Smart Grid</li>
                    <li>Understanding Smart Meters</li>
                    <li>On-Grid vs Off-Grid</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Company Info Section */}
            <div className={styles.blogFooterCompany}>
              <div className={styles.blogFooterCompanyInfo}>
                <h2 className={styles.blogFooterCompanyTitle}>Xbattery™</h2>
                <p className={styles.blogFooterCompanyDesc}>
                  Xbattery is building lithium battery packs in India, including electronics and software, to help businesses, EVs and grids store energy affordably and access it on demand.
                </p>
              </div>
              <div className={styles.blogFooterLinks}>
                <div className={styles.blogFooterLinkColumn}>
                  <h3>Products</h3>
                  <ul>
                    <li><Link href="/">Xbattery 5kWh</Link></li>
                    <li><Link href="/bharat-bms">BharatBMS</Link></li>
                  </ul>
                </div>
                <div className={styles.blogFooterLinkColumn}>
                  <h3>Resources</h3>
                  <ul>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/whitepapers">Whitepapers</Link></li>
                    <li><Link href="/learn">Learn</Link></li>
                    <li><a href="#">API</a></li>
                  </ul>
                </div>
                <div className={styles.blogFooterLinkColumn}>
                  <h3>Company</h3>
                  <ul>
                    <li><Link href="/about">About</Link></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Media</a></li>
                    <li><a href="#">Support</a></li>
                  </ul>
                </div>
              </div>
              <div className={styles.blogFooterSocials}>
                <a href="#" className={styles.blogFooterSocialIcon} aria-label="X"><span>✖️</span></a>
                <a href="#" className={styles.blogFooterSocialIcon} aria-label="LinkedIn"><span>🔗</span></a>
                <a href="#" className={styles.blogFooterSocialIcon} aria-label="Email"><span>📧</span></a>
              </div>
              <div className={styles.blogFooterCopyright}>
                <span>© 2025 Xbattery Energy Private Limited. All rights reserved.</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 