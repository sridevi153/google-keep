import React from 'react'

function Header(props) {
    const logo = <img src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png' alt='logo' />
  return (
    <div className='header'>
      {logo}
      <h4>Keep</h4>
    </div>
  );
}

export default Header;