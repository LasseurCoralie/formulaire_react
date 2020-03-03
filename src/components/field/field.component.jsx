import React from 'react';
import PropTypes from 'prop-types';

export const Field = ({ name, placeholder, type, value, changeValue }) => {
    const handleChange = (evt) => {
        changeValue(evt.target.name, evt.target.value);
    }
    
    return (
        <label>
            <input
                id={name}
                name={name}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={handleChange}
            />
            {placeholder}
        </label>
    );
};

Field.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};
