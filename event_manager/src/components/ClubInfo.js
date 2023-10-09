// components/ClubInfo.js

import React from 'react';

const ClubInfo = ({ clubName, clubHead }) => {
  return (
    <tr>
      <td className='text-xl'>{clubName}</td>
      <td>{clubHead}</td>
    </tr>
  );
};

export default ClubInfo;
