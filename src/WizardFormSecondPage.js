import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import Dropzone from 'react-dropzone';

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <div>
      <h4>
        Image Upload
    </h4>
      <form onSubmit={handleSubmit}>
        <Field name="picture" component={props =>
          <Dropzone
            {...props.input}
            multiple={false}
            onDrop={(filesToUpload) => {
              this.files = filesToUpload;
              return props.input.onChange(filesToUpload);
            }}
          >
            {this.files ?
              <div>
                {this.files.map((file, i) => <img key={file.name} src={file.preview}
                  style={{ width: '200px', maxWidth: '200px', height: '200px', flexGrow: 1, opacity: 1.5 }} alt='' />)}
              </div>
              :
              <div style={{ cursor: 'pointer' }}>click to select file to upload.</div>
            }
          </Dropzone>
        } type="file" />
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
        </button>
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
})(WizardFormSecondPage);
