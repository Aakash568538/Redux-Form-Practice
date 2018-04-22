import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const WizardFormThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (  
    <form onSubmit={handleSubmit}>
      <Field name="email" type="text" placeholder="Email" component={renderField}
        label="Email" />
      <Field name="password" type="password" component={renderField} label="Password" />
      <Field name="confirmPassword" type="password" component={renderField} label="Confirm Password" />
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting} className="next">Submit</button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormThirdPage);
