import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Genders', label: 'Genders' },
  { value: 'countries', label: 'Countries' },
  { value: 'Payments', label: 'Payments' },
];

const ComboBox = ({ onChange }) => {
  return (
    <Select
      options={options}
      placeholder="Selecciona una opción"
      onChange={onChange} // Configura el evento onChange proporcionado por react-select
    />
  );
};

export default ComboBox;
