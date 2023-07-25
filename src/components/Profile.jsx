import React from 'react';
import { useParams } from 'react-router-dom';

function Profile() {

  const user_id = useParams();
  
  return (
    <div>Profile</div>
  )

}

export default Profile