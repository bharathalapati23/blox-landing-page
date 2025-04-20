import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
  phone: string;
  [key: string]: string; // Index signature to allow dynamic access
}

interface SubmitStatus {
  success: boolean;
  error: string | null;
}

export default function ModalForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    message: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ success: false, error: null });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({ success: false, error: null });

    try {
      // Build URL with query parameters
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzzu9KzPIz-7W9Dl6eAEJVKNhrWA904fCmplLTXNbV2wdpc1VQeecWfr1cfrT8Bz_jR/exec';
      const url = new URL(scriptURL);
      
      // Create a FormData object for the fetch request
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      // Send as a form submission, which is better supported by Google Apps Script
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        body: formDataToSend
      });
      
      // Since no-cors doesn't provide a useful response status,
      // we assume success if no error was thrown
      setSubmitStatus({ success: true, error: null });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        service: '',
        message: '',
        phone: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        success: false, 
        error: 'Failed to submit form. Please try again later.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 md:py-8 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* Left side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Get in touch</h2>
          <p className="text-gray-500">
            Want to know more about our services? or have something in mind? Please reach out to us!
          </p>
        </div>

        {/* Right side - Form */}
        <div className="p-4 md:p-6 rounded-2xl shadow-lg border border-gray-200" style={{ 
          backgroundImage: 'linear-gradient(135deg, #FFC4C9 0%, white 30%)'
        }}>
          {submitStatus.success ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-medium text-green-600 mb-2">Thank You!</h3>
              <p className="text-gray-600">Your message has been submitted successfully. We'll get back to you soon.</p>
            </div>
          ) : (
            <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  What service are you interested in?
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select project type</option>
                  <option value="luxury">Luxury Homes</option>
                  <option value="nri">NRI Services</option>
                  <option value="buy">Buy Property</option>
                  <option value="sell">Sell Property</option>
                  <option value="rent">Rent Property</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                ></textarea>
              </div>

              {submitStatus.error && (
                <div className="text-red-500 text-sm">{submitStatus.error}</div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-black text-white py-3 rounded-lg transition-colors ${
                  loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'
                }`}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 