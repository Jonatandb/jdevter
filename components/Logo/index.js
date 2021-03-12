import React from 'react'

const Logo = ({ width }) => {
  return (
    <>
      <img src='/Jdevter_logo.png' alt='Jdevter main logo' />
      <style jsx>
        {`
          img {
            width: ${width}px;
          }
        `}
      </style>
    </>
  )
}

export default Logo
