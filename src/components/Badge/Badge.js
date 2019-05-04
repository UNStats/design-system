import React from 'react';
import { badgeType } from '../../types';
import SmartLink from '../SmartLink';
import UnlinkedBadge from './UnlikedBadge';

const Badge = ({ badge, ...props }) => {
  if (badge.href) {
    return (
      <SmartLink
        {...props}
        style={{ display: 'inline-block' }}
        href={badge.href}
      >
        <UnlinkedBadge color={badge.color} text={badge.text} />
      </SmartLink>
    );
  }
  return <UnlinkedBadge {...props} color={badge.color} text={badge.text} />;
};

Badge.propTypes = {
  badge: badgeType.isRequired,
};

export default Badge;
