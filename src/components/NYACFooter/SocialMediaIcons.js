import React from 'react';

import facebook from "../../images/social_media_icons/facebook.png"
import instagram from "../../images/social_media_icons/instagram.png"
import email from "../../images/social_media_icons/email.png"

const SocialMediaIcons = (props) => {
  return(
    <div className="social-media-icons">
      <a href="https://www.facebook.com/groups/newyorkadventureclub/" target="_blank">
        <img src={facebook} />
      </a>
      <a href="https://www.instagram.com/nyadventureclub/" target="_blank">
        <img src={instagram} />
      </a>
      <img src={email} onClick={props.displayContactModal} />
    </div>
  )
}

export default SocialMediaIcons;
