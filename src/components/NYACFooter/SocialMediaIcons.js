import React from 'react';

import facebook from "../../images/social_media_icons/facebook.png"
import instagram from "../../images/social_media_icons/instagram.png"
import twitter from "../../images/social_media_icons/twitter.png"

const SocialMediaIcons = () => {
  return(
    <div className="social-media-icons">
      <a href="https://www.facebook.com/nyadventureclub/" target="_blank">
        <img src={facebook} />
      </a>
      <a href="https://www.instagram.com/nyadventureclub/" target="_blank">
        <img src={instagram} />
      </a>
      <a href="https://twitter.com/nyadventureclub">
        <img src={twitter} />
      </a>
    </div>
  )
}

export default SocialMediaIcons;
