import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  FaStore,
  FaShieldAlt,
  FaChartLine,
  FaHeadset,
  FaCheckCircle,
} from 'react-icons/fa';
import './BecomeSeller.css';

const BecomeSeller: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    category: 'phones',
    businessAddress: '',
    description: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API submission
      await new Promise((resolve) => setTimeout(resolve, 1200));
      toast.success('Seller application submitted! Our team will review your application soon.');
      navigate('/');
    } catch (err) {
      toast.error('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="seller-page">
      {/* Hero Header */}
      <section className="seller-hero">
        <h1>Sell Your Tech on Loditojo</h1>
        <p>
          Reach thousands of tech enthusiasts across Nigeria. Grow your business with our trusted marketplace platform.
        </p>
      </section>

      <div className="seller-container">
        {/* Value Proposition Cards */}
        <section className="seller-benefits">
          <h2>Why Partner With Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <FaStore className="benefit-icon" />
              <h3>Nationwide Reach</h3>
              <p>Direct access to verified gadget buyers nationwide.</p>
            </div>
            <div className="benefit-card">
              <FaShieldAlt className="benefit-icon" />
              <h3>Secure Payments</h3>
              <p>Guaranteed payouts directly to your bank account on every completed delivery.</p>
            </div>
            <div className="benefit-card">
              <FaChartLine className="benefit-icon" />
              <h3>Business Growth</h3>
              <p>Analytical tools to track your performance, inventory, and sales growth.</p>
            </div>
            <div className="benefit-card">
              <FaHeadset className="benefit-icon" />
              <h3>Dedicated Support</h3>
              <p>24/7 account support to resolve issues and streamline your operations.</p>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="seller-form-section">
          <h2>Apply to Become a Vendor</h2>
          <p className="form-subtext">Fill out the details below and our vendor onboard team will get in touch within 24 hours.</p>

          <form onSubmit={handleSubmit} className="seller-form">
            <div className="form-row">
              <div className="form-group">
                <label>Business Name *</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="e.g. DexTech Electronics"
                  required
                />
              </div>
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="vendor@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 800 000 0000"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Primary Product Category *</label>
              <select name="category" value={formData.category} onChange={handleChange}>
                <option value="phones">Smartphones & Tablets</option>
                <option value="laptops">Laptops & Computers</option>
                <option value="accessories">Gadget Accessories</option>
                <option value="gaming">Gaming & Consoles</option>
                <option value="audio">Audio & Sound Systems</option>
              </select>
            </div>

            <div className="form-group">
              <label>Physical Address / City *</label>
              <input
                type="text"
                name="businessAddress"
                value={formData.businessAddress}
                onChange={handleChange}
                placeholder="e.g. Computer Village, Ikeja, Lagos"
                required
              />
            </div>

            <div className="form-group">
              <label>Tell Us About Your Inventory / Business</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Describe the products you sell, current stock volume, or brand partnerships..."
              />
            </div>

            <button type="submit" className="submit-seller-btn" disabled={loading}>
              {loading ? 'Submitting Application...' : 'Submit Vendor Application'}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default BecomeSeller;