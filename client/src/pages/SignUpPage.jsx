import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Github, Chrome, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Auth.module.css';

const SignUpPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.signupLayout}>
        <motion.div 
          className={styles.leftPane}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
           <Link to="/" className={styles.logo}>
            <div className={styles.logoIcon}>A</div>
            <span>DevAtlas</span>
          </Link>
          
          <div className={styles.paneContent}>
            <h1>Navigate the vast landscape of modern engineering.</h1>
            <p>Join thousands of architects mapping their way through microservices, frontend patterns, and cloud infrastructure.</p>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <h3>450+</h3>
                <p>Concepts</p>
              </div>
              <div className={styles.statItem}>
                <h3>12k+</h3>
                <p>Community</p>
              </div>
            </div>
          </div>
          <div className={styles.paneFooter}>
            © 2026 DevAtlas Inc. All rights reserved.
          </div>
        </motion.div>

        <motion.div 
          className={styles.rightPane}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.card}>
            <h1>Join the Atlas</h1>
            <p className={styles.subtitle}>Start your free 14-day trial, no credit card required.</p>

            <div className={styles.socialGrid}>
              <button className={styles.socialBtn}>
                <Github size={20} /> Github
              </button>
              <button className={styles.socialBtn}>
                <Chrome size={20} /> Google
              </button>
            </div>

            <div className={styles.divider}>
              <span>OR SIGN UP WITH EMAIL</span>
            </div>

            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label>Username</label>
                <div className={styles.inputWrapper}>
                  <User size={18} />
                  <input type="text" placeholder="jack_engineer" required />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Work Email</label>
                <div className={styles.inputWrapper}>
                  <Mail size={18} />
                  <input type="email" placeholder="jack@company.com" required />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Password</label>
                <div className={styles.inputWrapper}>
                  <Lock size={18} />
                  <input type="password" placeholder="Create a password" required />
                </div>
              </div>

              <div className={styles.requirements}>
                <div className={styles.reqItem}>
                  <CheckCircle size={14} /> At least 8 characters
                </div>
                <div className={styles.reqItem}>
                  <CheckCircle size={14} /> One special character
                </div>
                <div className={styles.reqItem}>
                  <CheckCircle size={14} /> One numerical digit
                </div>
              </div>

              <div className={styles.tos}>
                By signing up, you agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.
              </div>

              <Link to="/app" className={styles.submitBtn}>
                Create Account <ArrowRight size={18} />
              </Link>
            </form>

            <p className={styles.footerLink}>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ArrowRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default SignUpPage;
