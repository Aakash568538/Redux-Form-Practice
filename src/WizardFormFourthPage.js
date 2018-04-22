import React from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

const WizardFormFourthPage = ({ values }) => {

    var users = JSON.parse(localStorage.getItem("users") || "[]");

    let valuesObject = {
        firstName: values.firstName,
        lastName: values.lastName,
        password: values.password,
        address: values.address,
        city: values.city,
        email: values.email,
        image: values.picture[0].preview,
        imageName: values.picture[0].name        
    }
    
    users.push(valuesObject);
    localStorage.setItem('users', JSON.stringify(users));
    return (
        <div>
            <h5>First Name: {values.firstName}</h5><br />
            <h5>Last Name: {values.lastName}</h5><br />
            <h5>Address: {values.address}</h5><br />
            <h5>City: {values.city}</h5><br />
            <h5>Email: {values.email}</h5><br />
            <h5>Password: {values.password}</h5>
            <img key={values.picture[0].name} src={values.picture[0].preview}
                style={{ width: '200px', maxWidth: '200px', 
                height: '200px', flexGrow: 1, opacity: 1.5 }} alt='' />
        </div>
    );
};
export default connect(state => ({
    values: getFormValues('wizard')(state)
}))(WizardFormFourthPage);
