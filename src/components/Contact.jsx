import  { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Contact Us</h1>
      {submitted ? (
        <div>
          <h2>Thank you for contacting us!</h2>
          <p>We have received your message and will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Enter name'
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='enter email'
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px', marginTop: '5px', height: '100px' }}
              />
            </label>
          </div>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#FFF', border: 'none', cursor: 'pointer' }}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
