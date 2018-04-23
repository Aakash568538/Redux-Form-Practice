import React from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

const WizardFormFourthPage = ({ values }) => {

    function getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
    
        var ctx = canvas.getContext("2d");
    
        var dataURL = canvas.toDataURL("image/png");
    
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }

    var imgData = getBase64Image(values.picture[0].preview);

    var users = JSON.parse(localStorage.getItem("users") || "[]");

    let valuesObject = {
        firstName: values.firstName,
        lastName: values.lastName,
        password: values.password,
        address: values.address,
        city: values.city,
        email: values.email,
        picture: imgData
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
