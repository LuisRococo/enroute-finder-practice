import React, { FC } from 'react';
import { IconType } from 'react-icons/lib';

export interface ProfileHeadItemIterface {
  title: string;
  Icon: IconType;
  content?: string;
}

const ProfileHeadItem: FC<ProfileHeadItemIterface> = ({
  title,
  Icon,
  content,
}) => {
  return (
    <div className="profile-hd__item">
      <Icon className="profile-hd__item-icon" />
      <p className="profile-hd__item-title">{title}</p>
      <p className="profile-hd__item-content">{content}</p>
    </div>
  );
};

export default ProfileHeadItem;
