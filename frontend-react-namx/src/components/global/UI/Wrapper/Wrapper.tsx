import React from 'react'
import PropTypes from 'prop-types'
// CSS
import './Wrapper.css'

const wrapper = (props: any) => {
    return (
        <div className="Wrapper">
            {props.children}
        </div>
    )
}

wrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.any,
        PropTypes.object,
        PropTypes.element
    ])
}

export default wrapper
