import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Github, Chrome } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Auth.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>A</div>
          <span>DevAtlas</span>
        </Link>
        <div className={styles.navLinks}>
          <Link to="/docs">Documentation</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/signup" className={styles.signupBtn}>Sign up</Link>
        </div>
      </header>

      <main className={styles.main}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1>Welcome Back</h1>
          <p className={styles.subtitle}>Continue your journey through the engineering map.</p>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <div className={styles.inputWrapper}>
                <Mail size={18} />
                <input type="email" placeholder="jack@devatlas.com" required />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.labelRow}>
                <label>Password</label>
                <Link to="/forgot-password" className={styles.forgot}>Forgot Password?</Link>
              </div>
              <div className={styles.inputWrapper}>
                <Lock size={18} />
                <input type="password" placeholder="••••••••" required />
              </div>
            </div>

            <Link to="/app" className={styles.submitBtn}>
               Unlock DevAtlas
            </Link>
          </form>

          <div className={styles.divider}>
            <span>OR CONTINUE WITH</span>
          </div>

          <div className={styles.socialGrid}>
            <button className={styles.socialBtn}>
              <Github size={20} /> Github
            </button>
            <button className={styles.socialBtn}>
              <Chrome size={20} /> Google
            </button>
          </div>

          <p className={styles.footerLink}>
            Don't have an account? <Link to="/signup">Sign up for free</Link>
          </p>
        </motion.div>
      </main>

      <footer className={styles.bottomFooter}>
        <div className={styles.footerLinks}>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/status">System Status</Link>
        </div>
        <p>© 2026 DevAtlas Inc.</p>
      </footer>
    </div>
  );
};

export default LoginPage;
