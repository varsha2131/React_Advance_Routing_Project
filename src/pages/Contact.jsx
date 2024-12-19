import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerText}>Contact Us</h1>
      </header>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Our Contact Information</h2>
        <p style={styles.text}>
          Feel free to reach out to us through any of the following methods:
        </p>
        <ul style={styles.list}>
          <li>📞 Phone: +91 9898898998</li>
          <li>📧 Email: support@ourshop.com</li>
          <li>🏢 Address: 1234 Shop St., Kukatpally, Hyderabad 50008</li>
        </ul>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Follow Us</h2>
        <div style={styles.socialMedia}>
          <a href="https://facebook.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerText}>&copy; 2024 Our Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    padding: '30px',
    maxWidth: '900px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    backgroundColor: '#D9AFD9', // Tomato color for header
    padding: '20px',
    borderRadius: '8px',
  },
  headerText: {
    color: ' black',
    fontSize: '2.5em',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: '25px',
  },
  sectionHeading: {
    color: 'black',
    fontSize: '1.8em',
    marginBottom: '10px',
    borderBottom: '2px solid #D9AFD9',
    paddingBottom: '5px',
  },
  text: {
    fontSize: '1.1em',
    color: '#333333',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  socialMedia: {
    display: 'flex',
    gap: '15px',
  },
  socialLink: {
    fontSize: '1.2em',
    color: 'black',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  footer: {
    textAlign: 'center',
    marginTop: '40px',
    fontSize: '1em',
    color: '#777777',
  },
  footerText: {
    color: 'black',
  },
};

export default Contact;