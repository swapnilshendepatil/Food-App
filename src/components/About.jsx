
import './About.css'
const About = () => {
  return (
    <div className="about-us">
      <section className="intro">
        <h1>About Us</h1>
        <p>Welcome to [Restaurant Name], where we serve the best [Cuisine Type] in town.</p>
      </section>

      <section className="history">
        <h2>Our History</h2>
        <p>[Restaurant Name] was founded in [Year] with a vision to provide delicious and authentic [Cuisine Type] dishes to our community. Our journey began with a passion for food and a dedication to quality.</p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>Our mission is to create a memorable dining experience for our customers by offering high-quality food, excellent service, and a warm, welcoming atmosphere.</p>
      </section>

      <section className="team">
        <h2>Meet the Team</h2>
        <p>Our team consists of talented chefs, friendly waitstaff, and dedicated management, all working together to ensure you have an exceptional dining experience.</p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>For reservations, catering, or any other inquiries, please contact us at [Phone Number] or [Email Address]. We look forward to serving you!</p>
      </section>
    </div>
  );
};

export default About;
