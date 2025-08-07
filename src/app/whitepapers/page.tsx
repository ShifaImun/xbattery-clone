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
        <Link href="/whitepapers" className={styles.heroNavLink} style={{ color: '#00eaff' }}>Whitepapers</Link>
      </div>
      <a className={styles.customerPortalBtn} href="/customer-portal">Customer Portal</a>
    </nav>
  );
}

export default function Whitepapers() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '100px', background: '#fff', minHeight: '100vh' }}>
        {/* Main Title */}
        <div className={styles.whitepapersMainTitle + " " + styles.fadeIn}>
          <h1>Whitepapers</h1>
        </div>

        {/* Whitepapers Grid */}
        <div className={styles.whitepapersPostsGrid + " " + styles.fadeIn}>
          {/* First Whitepaper */}
          <div className={styles.whitepaperPostCard}>
            <div className={styles.whitepaperPostImage}>
              <img src="https://images.ctfassets.net/6sce2o5alp4f/7qua5Ajg4XjONgGXfMUP2O/9f59ae04553ddd188a781be8d73921b5/download__6_.png" alt="Hybrid Deep Learning Model for SOC Estimation" />
            </div>
            <div className={styles.whitepaperPostContent}>
              <h2 className={styles.whitepaperPostTitle}>Hybrid Deep Learning Model for SOC Estimation in LiFePO4 Batteries</h2>
              <p className={styles.whitepaperPostDesc}>Deep-Learning-Based SoC Estimation for LiFePO4 Batteries Using CNN-GRU-TCN Hybrid Architecture</p>
              <button className={styles.whitepaperReadMoreBtn}>
                Read more →
              </button>
            </div>
          </div>

          {/* Second Whitepaper */}
          <div className={styles.whitepaperPostCard}>
            <div className={styles.whitepaperPostImage}>
              <img src="https://images.ctfassets.net/6sce2o5alp4f/5NRrXUhV8MDubEcNGn1Gxo/a3617941cb4ccc144b719338b3949580/Active_Charge_Balancing_of_Li-ion_Batteries__1_.png" alt="Battery Energy Storage Systems for Telecom" />
            </div>
            <div className={styles.whitepaperPostContent}>
              <h2 className={styles.whitepaperPostTitle}>Battery Energy Storage Systems: Replacing Diesel Generators in Telecom</h2>
              <p className={styles.whitepaperPostDesc}>Battery Energy Storage Systems (BESS) replacing Diesel Generators for Telecom Companies</p>
              <button className={styles.whitepaperReadMoreBtn}>
                Read more →
              </button>
            </div>
          </div>
        </div>

        {/* Footer Section with Learn and Company Info */}
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
                    <li>India's Electricity Sector</li>
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
                    <li><a href="#">Learn</a></li>
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