import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';

const ProfileVerified = () => {
  return (
    <div className="profile-hd__check">
      <FaCheckSquare className="profile-hd__icon" />
      <p className="profile-hd__text">Verified</p>
    </div>
  );
};

export default ProfileVerified;
