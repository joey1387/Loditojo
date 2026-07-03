import "./Register.css";

const Register = () => {
  return (
    <section className="auth-page">

      <div className="auth-card">

        <h1>Create Account</h1>

        <p>
          Join Loditojo Gadgets today.
        </p>

       <form className="auth-form" autoComplete="off">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <h3>Delivery Address</h3>

          <input
            type="text"
            placeholder="Street"
          />

          <div className="address-row">

            <input
              type="text"
              placeholder="City"
            />

            <input
              type="text"
              placeholder="State"
            />

          </div>

          <input
            type="text"
            placeholder="Country"
          />

          <label className="checkbox">

            <input type="checkbox" />

            I agree to the Terms & Conditions

          </label>

          <label className="checkbox">

            <input type="checkbox" />

            Send me exclusive offers and updates

          </label>

          <button>

            Create Account

          </button>

        </form>

      </div>

    </section>
  );
};

export default Register;