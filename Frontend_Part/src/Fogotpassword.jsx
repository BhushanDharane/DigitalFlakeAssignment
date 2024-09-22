import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Fogotpassword = () => {
        const [email, setEmail] = useState('');
      
        const handleSubmit = async (event) => {
          event.preventDefault();
      
          // TODO: Implement logic to send password reset link
          try {
            const response = await fetch('/api/users/forgot-password', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email }),
            });
      
            if (response.ok) {
              // Handle successful password reset link sent
              console.log('Password reset link sent successfully!');
            } else {
              // Handle error sending password reset link
              console.error('Error sending password reset link:', response.status);
            }
          } catch (error) {
            console.error('Error sending password reset link:', error);
          }
        };
  return (
    <form onSubmit={handleSubmit} className="forgot-password-form">
    <h2 className="forgot-password-form__title">Did you forget password?</h2>
    <p className="forgot-password-form__description">Enter your email address and we'll send you a link to restore password</p>
    <div className="forgot-password-form__field">
      <label htmlFor="email" className="forgot-password-form__label">Email Address</label>
      <input
        type="email"
        id="email"
        className="forgot-password-form__input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
    <button type="submit" className="forgot-password-form__button">Request reset link</button>
   <Link to = "/"><p>Back to log in</p></Link>
  </form>
  )
}

export default Fogotpassword