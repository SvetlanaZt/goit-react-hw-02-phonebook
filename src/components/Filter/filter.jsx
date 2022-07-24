import React from 'react';

export default function Filter({ value, onChange  }) {
 return(<label>Find contacts
  <input type="text" value={value} onChange={ onChange}></input>
</label>)
}
