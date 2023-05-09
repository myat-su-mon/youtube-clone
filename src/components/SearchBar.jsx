import { Paper, TextField } from '@mui/material';
import React, { useState } from 'react'

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    }

    const handleSubmit = (event) => {
      const {onFormSubmit} = props;
      onFormSubmit(searchTerm);
      event.preventDefault();
    }

  return (
    <Paper elevation={6} style={{padding:'25px'}}>
        <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Search..." onChange={handleChange}>

            </TextField>
        </form>
    </Paper>
  )
}

export default SearchBar