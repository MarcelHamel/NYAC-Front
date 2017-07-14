import React from 'react';

const BackToTopLink = () => {
  const pushToTop = () => {
    document.querySelector('body').scrollTop = 0;
  }

  return (
    <div className='back-to-top-link'>
      <a onClick={pushToTop}>Back To Top</a>
    </div>
  )
};

export default BackToTopLink;
