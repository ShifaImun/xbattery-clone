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
        <Link href="/blog" className={styles.heroNavLink} style={{ color: '#00eaff' }}>Blog</Link>
        <Link href="/whitepapers" className={styles.heroNavLink}>Whitepapers</Link>
      </div>
      <a className={styles.customerPortalBtn} href="/customer-portal">Customer Portal</a>
    </nav>
  );
}

export default function Blog() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '100px', background: '#fff', minHeight: '100vh' }}>
        {/* Main Title */}
        <div className={styles.blogMainTitle + " " + styles.fadeIn}>
          <h1>Engineering blogs</h1>
        </div>

        {/* Blog Posts Grid */}
        <div className={styles.blogPostsGrid + " " + styles.fadeIn}>
          {/* First Blog Post */}
          <div className={styles.blogPostCard}>
            <div className={styles.blogPostImage}>
              <img src="https://images.ctfassets.net/6sce2o5alp4f/7qua5Ajg4XjONgGXfMUP2O/9f59ae04553ddd188a781be8d73921b5/download__6_.png" alt="Switched Capacitor Based Active Balancing" />
            </div>
            <div className={styles.blogPostContent}>
              <div className={styles.blogPostMeta}>
                <span className={styles.blogPostDate}>Published July 7, 2025</span>
                <span className={styles.blogPostAuthor}>by Xbattery Engineering Team</span>
              </div>
              <h2 className={styles.blogPostTitle}>Switched Capacitor Based Active Balancing: A Guide</h2>
              <p className={styles.blogPostDesc}>Active charge balancing in Li-ion battery packs improves efficiency, battery life, and safety. Learn how it works and why it&apos;s essential for energy storage systems.</p>
            </div>
          </div>

          {/* Second Blog Post */}
          <div className={styles.blogPostCard}>
            <div className={styles.blogPostImage}>
              <img src="https://images.ctfassets.net/6sce2o5alp4f/5NRrXUhV8MDubEcNGn1Gxo/a3617941cb4ccc144b719338b3949580/Active_Charge_Balancing_of_Li-ion_Batteries__1_.png" alt="Active Charge Balancing of Li-ion Batteries" />
            </div>
            <div className={styles.blogPostContent}>
              <div className={styles.blogPostMeta}>
                <span className={styles.blogPostDate}>Published May 15, 2025</span>
                <span className={styles.blogPostAuthor}>by Xbattery Engineering Team</span>
              </div>
              <h2 className={styles.blogPostTitle}>Active Charge Balancing of Li-ion Batteries: A Guide</h2>
              <p className={styles.blogPostDesc}>Active charge balancing in Li-ion battery packs improves efficiency, battery life, and safety. Learn how it works and why it&apos;s essential for energy storage systems.</p>
            </div>
          </div>

          {/* Third Blog Post */}
          <div className={styles.blogPostCard}>
            <div className={styles.blogPostImage}>
              <img src="https://images.ctfassets.net/6sce2o5alp4f/XN6IYw3E9lFuVIxCcF3ZL/12fa91d0b12bf91584ec692abc7e687a/Untitled_design.png" alt="Role of Contactors in BESS and BMS" />
            </div>
            <div className={styles.blogPostContent}>
              <div className={styles.blogPostMeta}>
                <span className={styles.blogPostDate}>Published April 2, 2025</span>
                <span className={styles.blogPostAuthor}>by Xbattery Engineering Team</span>
              </div>
              <h2 className={styles.blogPostTitle}>Role of Contactors in BESS and BMS</h2>
              <p className={styles.blogPostDesc}>In a BESS, contactors (K1-K4) manage safe connections for charging and discharging. The BMS controls them, enabling pre-charge, load/charge switching, and isolation during faults for system safety.</p>
            </div>
          </div>

          {/* Fourth Blog Post */}
          <div className={styles.blogPostCard}>
            <div className={styles.blogPostImage}>
              <img src="https://images.ctfassets.net/6sce2o5alp4f/lxyTlj23brDgrO8z7ClgJ/c6be9ca01fc537be45093b89c94dc497/Untitled_design__12_.png" alt="SOC Estimation with TCN + Transformer" />
            </div>
            <div className={styles.blogPostContent}>
              <div className={styles.blogPostMeta}>
                <span className={styles.blogPostDate}>Published October 18, 2024</span>
                <span className={styles.blogPostAuthor}>by Xbattery Engineering Team</span>
              </div>
              <h2 className={styles.blogPostTitle}>Battery Pack Protection for Stationary Storage</h2>
              <p className={styles.blogPostDesc}>The hybrid CNN-GRU-TCN model enhances State of Charge (SOC) estimation in LiFePO4 batteries, emphasizing data normalization, architecture, training, and evaluation for better battery management and performance.</p>
            </div>
          </div>

          {/* Fifth Blog Post */}
          <div className={styles.blogPostCard}>
            <div className={styles.blogPostImage}>
              <img src="https://images.ctfassets.net/6sce2o5alp4f/2dWugxGyK5ehn1oPblMeEZ/5c7a8d4ab00ef4dbfbdac1fe2bfcb954/934623__1_.png" alt="Digital Twins for enhancing BESS performance" />
            </div>
            <div className={styles.blogPostContent}>
              <div className={styles.blogPostMeta}>
                <span className={styles.blogPostDate}>Published September 20, 2024</span>
                <span className={styles.blogPostAuthor}>by Xbattery Engineering Team</span>
              </div>
              <h2 className={styles.blogPostTitle}>Overview of Cell Balancing with Reinforcement Learning</h2>
              <p className={styles.blogPostDesc}>This blog explores Digital Twins, their role in Battery Energy Storage Systems (BESS), and how Azure Digital Twins enhance BESS operations, improving efficiency, monitoring, and predictive maintenance.</p>
            </div>
          </div>

          

          {/* Seventh Blog Post */}
          <div className={styles.blogPostCard}>
            <div className={styles.blogPostImage}>
              <img src="https://images.ctfassets.net/6sce2o5alp4f/2AdWivGSkUDbwTveUcwFAH/42746d6f4ce9327cc2080ba3dd7e1b27/Untitled_design__10_.png" alt="Grid-Scale Energy Storage Solutions" />
            </div>
            <div className={styles.blogPostContent}>
              <div className={styles.blogPostMeta}>
                <span className={styles.blogPostDate}>Published July 30, 2024</span>
                <span className={styles.blogPostAuthor}>by Xbattery Engineering Team</span>
              </div>
              <h2 className={styles.blogPostTitle}>Transforming LiFePO4 Battery Management System</h2>
              <p className={styles.blogPostDesc}>Comprehensive analysis of grid-scale energy storage technologies, their implementation challenges, and the role they play in modern power systems and renewable energy integration.</p>
            </div>
          </div>

          {/* Eighth Blog Post */}
          <div className={styles.blogPostCard}>
            <div className={styles.blogPostImage}>
              <img src="https://images.ctfassets.net/6sce2o5alp4f/6DDOtkwOFV44IsGTaBpaXy/d4ffb7018eddf9903479dc915a219b31/blog2hero.png" alt="EV Battery Technology Trends" />
            </div>
            <div className={styles.blogPostContent}>
              <div className={styles.blogPostMeta}>
                <span className={styles.blogPostDate}>Published July 10, 2024</span>
                <span className={styles.blogPostAuthor}>by Xbattery Engineering Team</span>
              </div>
              <h2 className={styles.blogPostTitle}>SOC Estimation with TCN + Transformer</h2>
              <p className={styles.blogPostDesc}>Latest trends in electric vehicle battery technology, including new chemistries, fast charging developments, and the future of EV energy storage systems.</p>
            </div>
          </div>
          {/* Sixth Blog Post */}
          <div className={styles.blogPostCard}>
            <div className={styles.blogPostImage}>
              <img src="https://images.ctfassets.net/6sce2o5alp4f/6I7VYQbpAnBJjPyIkovPJ7/e5d9255d0ba8dba589ac53136e5ff253/Untitled_design__8_.png" alt="Advanced Battery Management Systems" />
            </div>
            <div className={styles.blogPostContent}>
              <div className={styles.blogPostMeta}>
                <span className={styles.blogPostDate}>Published August 15, 2024</span>
                <span className={styles.blogPostAuthor}>by Xbattery Engineering Team</span>
              </div>
              <h2 className={styles.blogPostTitle}>Digital Twins for enhancing BESS performance</h2>
              <p className={styles.blogPostDesc}>Exploring the latest developments in BMS technology, including real-time monitoring, predictive analytics, and intelligent control systems for optimal battery performance and safety.</p>
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