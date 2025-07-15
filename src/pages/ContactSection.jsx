import { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // New state for tracking submission status ('success', 'error', or null)
  const [status, setStatus] = useState(null);

  // Updated handleSubmit with validation feedback
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_z8ny776', 'template_aeupprm', formData, 'vIMQoydSnLexGVBbw')
      .then((result) => {
        console.log('Email sent:', result.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.error('Error sending email:', error.text);
        setStatus('error');
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Always open to new challenges and collaborations. Feel free to reach out anytime!
          </p>
        </div>

        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full py-3 px-4 rounded-md bg-gray-800 border-gray-700 text-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full py-3 px-4 rounded-md bg-gray-800 border-gray-700 text-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Send Message
            </button>
            {/* Display validation feedback */}
            {status === 'success' && (
              <p className="mt-4 text-center text-green-400">
                Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-center text-red-400">
                There was an error sending your message, please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
