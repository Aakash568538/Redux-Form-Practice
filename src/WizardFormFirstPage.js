import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const WizardFormFirstPage = props => {
  const { handleSubmit } = props;
  return (
    <div>
      <h4>
        User Details
    </h4>
      <form onSubmit={handleSubmit}>
        <Field
          name="firstName"
          type="text"
          component={renderField}
          label="First Name"
        />
        <Field
          name="lastName"
          type="text"
          component={renderField}
          label="Last Name"
        />
        <Field
          name="address"
          type="text"
          component={renderField}
          label="Address"
        />
        <Field
          name="city"
          type="text"
          component={renderField}
          label="City"
        />
        <div>
          <button type="submit" className="next">Next</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
