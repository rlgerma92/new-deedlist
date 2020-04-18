import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import './styles-custom.scss';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: '❌ ';
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

const SignupForm = () => {
  return (
    <>
      <h2>Sign Up</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false,
          jobType: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email addresss`')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()

            .oneOf(['need', 'deed'], 'Invalid Option')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className="container">
            <div className="left">
              <TextInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="First"
              />
              <TextInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Last"
              />
            </div>
            <div className="right">
              <TextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="user@example.com"
              />
              <Select label="Here for a..." name="jobType">
                <option value="">Need</option>
                <option value="designer">Deed</option>
              </Select>
            </div>
          </div>
          <div className="center">
            <Checkbox name="acceptedTerms">
              I accept the terms and conditions
            </Checkbox>

            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default SignupForm;
