import React from "react";

const Profile = ({ bio, bio_ref }) => (
  <div className="user-profile">
    <h3>Perfil</h3>
    <p className="cuote">{bio}</p>
    <p className="cuote_ref">
      <i>{bio_ref}</i>
    </p>
  </div>
);

export default Profile;
