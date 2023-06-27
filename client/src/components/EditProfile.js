import React, { useState } from 'react';

function EditProfile({ developer }) {
  const [name, setName] = useState(developer.name);
  const [email, setEmail] = useState(developer.email);
  const [oldPassword, setOldPassword] = useState(developer.password);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
    console.log(developer.id)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (oldPassword !== developer.password) {
      setPasswordError(true);
    } else {
      const developerData = {
        name,
        email,
        password,
      };

      fetch(`/developers/${developer.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(developerData),
      })
        .then((response) => {
          if (response.ok) {
            setIsSubmitted(true);
          } else {
            console.log('Profile update failed.');
          }
        })
        .catch((error) => {
          console.error('Error updating profile:', error);
        });
    }
  };

  if (isSubmitted) {
    return <div>Profile Updated Successfully!</div>;
  }

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Old Password:
          <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
        </label>
        <br />
        <label>
          New Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        {passwordError && <p>Password does not match current password.</p>}
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default EditProfile;