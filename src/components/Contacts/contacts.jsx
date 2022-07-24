import React from 'react';
import PropTypes from 'prop-types';
import css from './contacts.module.css'

export default function Contacts({ value, onDelete}) {
    return (
        <ul>
            {value.map(item => (
            <li className={css.item} key={item.id}>{item.name}: {item.number}
                        <button className={css.button} onClick={() => onDelete(item.id)}>Delete </button></li>
            ))}
        </ul> 
    )
}

Contacts.propTypes = {
    value: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
};