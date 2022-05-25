import React from 'react'
import PropTypes from 'prop-types'
function Hero({ text, bgColor, textColor }) {
  const styles = {
    backgroundColor:bgColor,
    color:textColor
  }

  return (
    <header style={styles} >
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Hero.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95"
}

Hero.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Hero