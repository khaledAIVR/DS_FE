/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { Fragment } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import UserForm from '../components/UserForm';

const UserContainer = ({ initialValues, setResult }) => {
  const validationSchema = Yup.object({
    software_type: Yup.string().required('Required'),
    cost: '',
    budget: '',
    number_of_user: '',
    company_size: '',
    software_description: Yup.string().required('Required'),
    software_requirements: Yup.string().required('Required'),
  });

  const preprocessRequestData = (values) => {
    const total = values.budget - values.cost * values.number_of_users;

    const data = `We are ${values.company_size} we need: ${
      values.software_requirements
    } with this software our total is ${
      total > 0 ? `positive ${total}` : `negative ${total}`
    }, we are interested in: ${values.software_description}`;

    const processedData = data.replace(/\n/g, ' ');
    return { data: processedData };
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Make a POST request with the form values

    console.log('data: ', preprocessRequestData(values));

    axios
      .post('http://217.160.44.217:80/pred', preprocessRequestData(values))

      .then((response) => {
        setSubmitting(false);
        setResult(response.data[0]);
      })
      .catch((error) => {
        setSubmitting(false);
        console.error(error); // Handle any errors
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, ...rest }) => (
        <Fragment>
          <UserForm {...rest} />
        </Fragment>
      )}
    </Formik>
  );
};

export default UserContainer;
