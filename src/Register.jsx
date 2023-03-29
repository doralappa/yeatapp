import React, { useState } from 'react';

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name"> Full Name </label>
        <input 
        onChange={e => setName(e.target.value)}
        value={name} 
        name="name" 
        id="name" 
        placeholder="Full Name" />
        <label htmlFor="email">email</label>
        <input
        onChange={e => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password"> password </label>
        <input
        onChange={e => setPass(e.target.value)}
          value={pass}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
        {' '}
        Already have an account? Login here!{' '}
      </button>
    </div>
  );
};
