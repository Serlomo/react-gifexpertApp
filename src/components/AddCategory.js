import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValeu, setinputValeu] = useState('');

    const handleInputChange = (e) => {
        setinputValeu(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories( cats => [inputValeu, ...cats]);

        if (inputValeu.trim().length > 2 ) {
            setCategories(cats => [inputValeu, ...cats]);
            setinputValeu('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValeu }
                onChange={ handleInputChange }
                />   
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

