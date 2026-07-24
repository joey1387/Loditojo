import React from 'react';

export const DataPolicy: React.FC = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>LODITOJO — Data Policy</h1>
        <div style={styles.metaInfo}>
          <span><strong>Version:</strong> 1.1</span> | 
          <span><strong>Effective:</strong> July 2025</span> | 
          <span><strong>Last Updated:</strong> July 2026</span>
        </div>
      </header>

      {/* Table of Contents Quick Nav */}
      <nav style={styles.tocCard}>
        <h2 style={styles.tocTitle}>Table of Contents</h2>
        <ul style={styles.tocList}>
          <li><a href="#section-1" style={styles.link}>1. Introduction</a></li>
          <li><a href="#section-2" style={styles.link}>2. Who We Are</a></li>
          <li><a href="#section-3" style={styles.link}>3. Information We Collect</a></li>
          <li><a href="#section-4" style={styles.link}>4. How We Use Your Information</a></li>
          <li><a href="#section-5" style={styles.link}>5. Legal Basis for Processing</a></li>
          <li><a href="#section-6" style={styles.link}>6. How We Store Your Information</a></li>
          <li><a href="#section-7" style={styles.link}>7. International Data Transfers</a></li>
          <li><a href="#section-8" style={styles.link}>8. Who We Share Your Information With</a></li>
          <li><a href="#section-9" style={styles.link}>9. Your Rights Under NDPR 2023</a></li>
          <li><a href="#section-10" style={styles.link}>10. How to Make a Complaint</a></li>
          <li><a href="#section-11" style={styles.link}>11. Cookies and Tokens</a></li>
          <li><a href="#section-12" style={styles.link}>12. Children's Privacy</a></li>
          <li><a href="#section-13" style={styles.link}>13. Security Incidents</a></li>
          <li><a href="#section-14" style={styles.link}>14. Third Party Links</a></li>
          <li><a href="#section-15" style={styles.link}>15. Changes to This Policy</a></li>
          <li><a href="#section-16" style={styles.link}>16. Seller Data Responsibilities</a></li>
          <li><a href="#section-17" style={styles.link}>17. Payment Data</a></li>
          <li><a href="#section-18" style={styles.link}>18. Applicable Law</a></li>
          <li><a href="#section-19" style={styles.link}>19. Data Protection Officer</a></li>
          <li><a href="#section-20" style={styles.link}>20. Contact Us</a></li>
          <li><a href="#section-21" style={styles.link}>21. Glossary</a></li>
          <li><a href="#section-22" style={styles.link}>22. Version History</a></li>
        </ul>
      </nav>

      {/* Content Body */}
      <main style={styles.body}>
        <section id="section-1" style={styles.section}>
          <h2 style={styles.sectionTitle}>1. Introduction</h2>
          <p>Welcome to LODITOJO. We are committed to protecting your personal information and your right to privacy. This Data Policy explains how we collect, use, store, protect and share your information when you use our platform.</p>
          <p>This policy applies to all users of LODITOJO including Customers, Sellers, and Administrators.</p>
          <div style={styles.highlightBox}>
            <strong>By creating an account or using our services you agree to the terms of this Data Policy.</strong> If you do not agree, please do not use our platform.
          </div>
        </section>

        <section id="section-2" style={styles.section}>
          <h2 style={styles.sectionTitle}>2. Who We Are</h2>
          <p>LODITOJO is a Nigerian e-commerce platform that connects buyers and sellers.</p>
          <ul style={styles.list}>
            <li><strong>Business Name:</strong> LODITOJO Marketplace</li>
            <li><strong>Platform Type:</strong> B2C and C2C E-Commerce</li>
            <li><strong>Jurisdiction:</strong> Federal Republic of Nigeria</li>
            <li><strong>Website:</strong> <a href="https://loditojo-7t31.onrender.com" style={styles.link}>https://loditojo-7t31.onrender.com</a></li>
            <li><strong>Email:</strong> loditamaria@gmail.com</li>
          </ul>
        </section>

        <section id="section-3" style={styles.section}>
          <h2 style={styles.sectionTitle}>3. Information We Collect</h2>
          <h3>3.1 Information You Provide Directly</h3>
          <p><strong>Account Registration:</strong> Full name, Email address, Encrypted Password.</p>
          <p><strong>Profile Completion:</strong> Phone number, Delivery address (street, city, state, country).</p>
          <p><strong>Seller Application:</strong> Store name/description, Bank account details, Business information.</p>

          <h3>3.2 Information Collected Automatically</h3>
          <p>Usage Data (products viewed, search queries, actions taken) and Technical Data (IP address, device type, operating system, login timestamps).</p>

          <h3>3.3 Information from Third Parties</h3>
          <p>Payment status and transaction references from Paystack. Product images hosted securely via Cloudinary.</p>
        </section>

        <section id="section-5" style={styles.section}>
          <h2 style={styles.sectionTitle}>5. Legal Basis for Processing</h2>
          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Processing Activity</th>
                  <th style={styles.th}>Legal Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={styles.td}>Account Creation & Orders</td><td style={styles.td}>Contract Performance</td></tr>
                <tr><td style={styles.td}>OTP & Order Emails</td><td style={styles.td}>Contract Performance</td></tr>
                <tr><td style={styles.td}>Fraud Prevention & System Safety</td><td style={styles.td}>Legitimate Interests</td></tr>
                <tr><td style={styles.td}>Legal & Tax Compliance</td><td style={styles.td}>Legal Obligation</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="section-6" style={styles.section}>
          <h2 style={styles.sectionTitle}>6. How We Store Your Information</h2>
          <p>Data is stored securely across MongoDB Atlas, Cloudinary, and Render with AES-256 and TLS encryption.</p>

          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Data Type</th>
                  <th style={styles.th}>Retention Period</th>
                  <th style={styles.th}>Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={styles.td}>Account Information</td><td style={styles.td}>Until account is deleted</td><td style={styles.td}>Service Provision</td></tr>
                <tr><td style={styles.td}>Order & Payment Records</td><td style={styles.td}>7 years</td><td style={styles.td}>Nigerian Tax Law Compliance</td></tr>
                <tr><td style={styles.td}>OTP Codes</td><td style={styles.td}>10 minutes</td><td style={styles.td}>Security Verification</td></tr>
                <tr><td style={styles.td}>Session / Refresh Cookies</td><td style={styles.td}>7 days</td><td style={styles.td}>Secure Authentication</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="section-9" style={styles.section}>
          <h2 style={styles.sectionTitle}>9. Your Rights Under NDPR 2023</h2>
          <p>Under Nigerian Data Protection Regulations, you have full access to your data rights:</p>
          <ul style={styles.list}>
            <li><strong>Right to Access & Portability:</strong> Request a copy of your personal data in JSON format.</li>
            <li><strong>Right to Rectification:</strong> Edit your profile directly in settings.</li>
            <li><strong>Right to Erasure:</strong> Request permanent removal of your account and personal history.</li>
          </ul>

          <div style={styles.actionCard}>
            <h3>Need to exercise your data rights?</h3>
            <p style={{ fontSize: '14px', margin: '8px 0 16px' }}>Send an official request directly to our Data Protection Officer.</p>
            <a href="mailto:loditamaria@gmail.com?subject=Data%20Access%20/ %20Deletion%20Request" style={styles.button}>
              Submit Data Request
            </a>
          </div>
        </section>

        <section id="section-17" style={styles.section}>
          <h2 style={styles.sectionTitle}>17. Payment Data</h2>
          <p>All online payments are processed through <strong>Paystack</strong> (PCI-DSS Level 1 certified). LODITOJO <strong>never</strong> receives, processes, or stores your credit/debit card numbers, CVVs, or sensitive banking passwords on our servers.</p>
        </section>

        <section id="section-19" style={styles.section}>
          <h2 style={styles.sectionTitle}>19. Data Protection Officer & Contact</h2>
          <p>If you have queries or complaints regarding this policy:</p>
          <ul style={styles.list}>
            <li><strong>DPO Email:</strong> dpo@loditojo.com</li>
            <li><strong>General Enquiries:</strong> loditamaria@gmail.com</li>
            <li><strong>Response Window:</strong> Within 72 hours on business days</li>
            <li><strong>Postal Address:</strong> LODITOJO, ABUJA, Nigeria</li>
          </ul>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>© 2026 LODITOJO. All rights reserved. | Building Trust Through Transparency</p>
      </footer>
    </div>
  );
};

// CSS-in-JS inline styles for simple React drop-in
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px 16px',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#222',
    lineHeight: '1.6',
  },
  header: {
    borderBottom: '2px solid #eaeaea',
    paddingBottom: '16px',
    marginBottom: '24px',
  },
  title: {
    fontSize: '28px',
    margin: '0 0 8px 0',
    color: '#111',
  },
  metaInfo: {
    fontSize: '14px',
    color: '#666',
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },
  tocCard: {
    backgroundColor: '#f8f9fa',
    border: '1px solid #e9ecef',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '32px',
  },
  tocTitle: {
    fontSize: '18px',
    margin: '0 0 12px 0',
  },
  tocList: {
    columnCount: 2,
    columnGap: '20px',
    margin: 0,
    paddingLeft: '20px',
    fontSize: '14px',
  },
  section: {
    marginBottom: '32px',
  },
  sectionTitle: {
    fontSize: '20px',
    borderBottom: '1px solid #eee',
    paddingBottom: '6px',
    color: '#1a1a1a',
  },
  highlightBox: {
    backgroundColor: '#eef6ff',
    borderLeft: '4px solid #0066cc',
    padding: '12px 16px',
    margin: '16px 0',
    borderRadius: '0 4px 4px 0',
  },
  actionCard: {
    backgroundColor: '#fafafa',
    border: '1px dashed #ccc',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    marginTop: '20px',
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#0066cc',
    color: '#ffffff',
    padding: '10px 20px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  tableWrapper: {
    overflowX: 'auto',
    margin: '16px 0',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
    fontSize: '14px',
  },
  th: {
    backgroundColor: '#f1f3f5',
    padding: '10px',
    border: '1px solid #dee2e6',
  },
  td: {
    padding: '10px',
    border: '1px solid #dee2e6',
  },
  list: {
    paddingLeft: '20px',
  },
  link: {
    color: '#0066cc',
    textDecoration: 'none',
  },
  footer: {
    marginTop: '48px',
    paddingTop: '16px',
    borderTop: '1px solid #eee',
    textAlign: 'center',
    fontSize: '13px',
    color: '#777',
  },
};