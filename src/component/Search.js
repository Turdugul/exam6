import React from 'react';
import {Field, reduxForm}  from 'redux-form';
const Search = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} class="d-flex">
            <Field class="form-control me-2" type="search" name="search" placeholder="Search" aria-label="Search" component="input" />
            
            <button class="btn btn-outline-success ml-2" type="submit">Search</button>
        </form>
    );
};


export default reduxForm({form:"search"})(Search);