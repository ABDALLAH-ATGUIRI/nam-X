import React from 'react'
import PropTypes from 'prop-types'
// CSS
import './Subtitle.css'

const subtitle = (props: any) => {
    return (
        <h2 className="Subtitle">
            {props.children}
        </h2>
    )
}

subtitle.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
}

export default subtitle
