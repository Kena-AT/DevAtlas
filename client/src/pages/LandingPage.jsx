import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Cpu, Shield, Zap, Github, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './LandingPage.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const LandingPage = () => {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <motion.nav 
        className={styles.nav}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.logo}>
          <div className={styles.logoIcon}>A</div>
          <span>DevAtlas</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <Link to="/docs">Documentation</Link>
          <Link to="/login" className={styles.loginBtn}>Login</Link>
          <Link to="/signup" className={styles.getStartedNav}>Get Started</Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header className={styles.hero}>
        <motion.div 
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className={styles.badge}>v1.0 Now Live</motion.span>
          <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
            Your interactive map of <br />
            <span className={styles.gradientText}>modern software engineering</span> <br />
            knowledge
          </motion.h1>
          <motion.p variants={fadeInUp} className={styles.heroSubtitle}>
            DevAtlas centralizes frameworks, patterns, and infrastructure guides <br />
            to help you build better systems, faster than ever before.
          </motion.p>
          <motion.div variants={fadeInUp} className={styles.heroActions}>
            <Link to="/signup" className={styles.primaryBtn}>
              Get Started <ArrowRight size={18} />
            </Link>
            <Link to="/docs" className={styles.secondaryBtn}>
              Read Documentation
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className={styles.visualWrapper}>
             {/* Abstract UI Mockup matching screenshot 1 */}
             <div className={styles.uiMock}>
                <div className={styles.mockHeader}>
                  <div className={styles.mockDots}><span /><span /><span /></div>
                </div>
                <div className={styles.mockBody}>
                  <div className={styles.mockSidebar} />
                  <div className={styles.mockContent}>
                    <div className={styles.mockLine} style={{ width: '40%' }} />
                    <div className={styles.mockLine} style={{ width: '80%' }} />
                    <div className={styles.mockBox} />
                  </div>
                </div>
             </div>
          </div>
        </motion.div>
      </header>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <motion.div 
          className={styles.sectionHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className={styles.sectionTitle}>The toolkit for modern architects</h2>
          <p className={styles.sectionSubtitle}>Everything you need to navigate the ecosystem in one place.</p>
        </motion.div>

        <motion.div 
          className={styles.featureGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.blue}`}>
              <Cpu size={24} />
            </div>
            <h3>Node Dashboards</h3>
            <p>Interactive views for every domain from Frontend to Integration.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.purple}`}>
              <Zap size={24} />
            </div>
            <h3>Micro-Reference</h3>
            <p>Fast access to code snippets and patterns without the noise.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.featureCard}>
            <div className={`${styles.featureIcon} ${styles.green}`}>
              <BookOpen size={24} />
            </div>
            <h3>Curated Wisdom</h3>
            <p>Tested best practices distilled into actionable engineering guides.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <motion.div 
          className={styles.ctaCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to map your engineering journey?</h2>
          <p>Join over 10,000+ developers building with DevAtlas.</p>
          <Link to="/signup" className={styles.btnWhite}>
            Get Started Now
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>A</div>
              <span>DevAtlas</span>
            </div>
            <p>Mapping the landscape of modern <br /> software engineering.</p>
            <div className={styles.socials}>
              <Github size={20} />
              <Twitter size={20} />
              <Linkedin size={20} />
            </div>
          </div>
          <div className={styles.footerGrid}>
            <div className={styles.footerCol}>
              <h4>Product</h4>
              <Link to="/features">Features</Link>
              <Link to="/integrations">Integrations</Link>
              <Link to="/changelog">Changelog</Link>
            </div>
            <div className={styles.footerCol}>
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className={styles.footerCol}>
              <h4>Legal</h4>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2026 DevAtlas Inc. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <span>Support</span>
            <span>Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
