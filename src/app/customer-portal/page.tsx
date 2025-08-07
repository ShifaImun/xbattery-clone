"use client";
import Link from "next/link";
import styles from "../page.module.css";

export default function CustomerPortal() {
  return (
    <div className={styles.customerPortalRoot}>
      <div className={styles.customerPortalContainer}>
        {/* Left Side */}
        <div className={styles.customerPortalLeft}>
          <div className={styles.customerPortalLogoWrap}>
            <img src="/logo1.webp" alt="Xbattery Logo" className={styles.customerPortalLogo} />
          </div>
          <h1 className={styles.customerPortalTitle}>Customer Portal</h1>
          <p className={styles.customerPortalSubtitle}>
            Manage your battery usage, view analytics, and stay informed.
          </p>
          <img src="https://customerappdev.xbattery.energy/_next/image?url=%2Fimages%2Flogin%2Flogin.png&w=2048&q=75" alt="Dashboard" className={styles.customerPortalDashboardImg} />
        </div>
        {/* Right Side */}
        <div className={styles.customerPortalRight}>
          <div className={styles.customerPortalLoginBox}>
            <h2 className={styles.customerPortalLoginTitle}>Login to your account</h2>
            <button className={styles.customerPortalLoginBtn}>Login</button>
            <div className={styles.customerPortalSupport}>
              Need help logging in? Contact our support team:<br />
              <a href="mailto:support@xbattery.energy" className={styles.customerPortalSupportEmail}>support@xbattery.energy</a>
            </div>
            <Link href="/" className={styles.customerPortalMainBtn}>
              Go to main website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}