import React from 'react';//about

const About = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerText}>About Our Shop</h1>
      </header>
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Welcome to Our Shop</h2>
        <p style={styles.sectionText}>
          At Our Shop, we offer a wide variety of high-quality products at unbeatable prices. 
          Whether you're looking for electronics, clothing, home goods, or more, we've got you covered. 
          Our mission is to provide an exceptional shopping experience to all our customers.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Our Moto</h2>
        <p style={styles.sectionText}>
          Our mission is to make shopping easier, faster, and more enjoyable for everyone. 
          We are committed to offering products that cater to your needs, backed by a user-friendly online shopping platform 
          and top-notch customer service.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Why Shop With Us?</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Quality Products: We offer carefully curated items that meet high standards of quality.</li>
          <li style={styles.listItem}>Fast Shipping: Enjoy quick delivery straight to your door with reliable shipping options.</li>
          <li style={styles.listItem}>Secure Shopping: Our website is secure and encrypted, ensuring your shopping experience is safe.</li>
          <li style={styles.listItem}>24/7 Customer Support: Our dedicated support team is available around the clock to assist you with any issues.</li>
        </ul>
      </section>
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Our Values</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Customer Satisfaction: We put our customers first, aiming to exceed your expectations.</li>
          <li style={styles.listItem}>Integrity: We are committed to honest and transparent business practices.</li>
          <li style={styles.listItem}>Innovation: We constantly update our product offerings to meet the latest trends and needs.</li>
          <li style={styles.listItem}>Responsibility: We strive to operate ethically, supporting sustainability and responsible sourcing.</li>
        </ul>
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
    color: 'black',
    fontSize: '2.5em',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: '25px',
  },
  sectionHeading: {
    color: ' ', // Tomato color for headings
    fontSize: '1.8em',
    marginBottom: '10px',
    borderBottom: '2px solid #D9AFD9',
    paddingBottom: '5px',
  },
  sectionText: {
    fontSize: '1.2em',
    lineHeight: '1.6',
    color: '#333333', // Dark gray text for better readability
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '30px',
  },
  listItem: {
    fontSize: '1.1em',
    color: '#555555', // Medium gray color for list items
    lineHeight: '1.6',
    marginBottom: '10px',
  },
  footer: {
    textAlign: 'center',
    marginTop: '40px',
    fontSize: '1em',
    color: '#777777', // Light gray footer text
  },
  footerText: {
    color: '', // Matching footer text with the header color
  },
};

export default About;