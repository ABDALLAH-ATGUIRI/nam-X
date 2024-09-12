import React from 'react'
import PropTypes from 'prop-types'
// CSS
import './Title.css'

const title = (props: any) => {
  return (
    <h1 className="Title">
      {props.children}
    </h1>
  )
}

title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default title
