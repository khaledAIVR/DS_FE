/* eslint-disable react/prop-types */
import React from 'react';
import { Field } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import { MenuItem, InputLabel } from '@material-ui/core';

import useStyles from '../styles/UserFormStyles';

const Label = ({ children }) => <InputLabel shrink>{children}</InputLabel>;
const TextAreaComponent = ({ label, ...rest }) => (
  <>
    <Label>{label}</Label>
    <TextField multiline rows={4} {...rest} />
  </>
);
const UserFormFields = () => {
  const classes = useStyles();

  return (
    <div className={classes.fields}>
      <Field
        className={classes.field}
        component={TextField}
        variant="outlined"
        required
        fullWidth
        name="software_type"
        type="text"
        label="Type of Software"
      />
      <Field
        className={classes.field}
        component={TextField}
        variant="outlined"
        required
        fullWidth
        name="cost"
        type="number"
        label="Software Cost Per Year for one User"
      />
      <Field
        className={classes.field}
        component={TextField}
        variant="outlined"
        required
        fullWidth
        name="budget"
        type="number"
        label="Company Budget per Year"
      />

      <Field
        className={classes.field}
        component={TextField}
        variant="outlined"
        required
        fullWidth
        name="number_of_users"
        type="number"
        label="Number of Users in the Company"
      />

      <Label>Company Size</Label>
      <Field
        className={classes.field}
        component={Select}
        variant="outlined"
        required
        fullWidth
        name="company_size"
        label="Company Size"
        defaultValue="small"
      >
        <MenuItem value="small">Small</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="large">Large</MenuItem>
      </Field>

      <Field
        className={classes.field}
        component={TextAreaComponent}
        variant="outlined"
        required
        fullWidth
        name="software_description"
        label="Software Description"
      />

      <Field
        className={classes.field}
        component={TextAreaComponent}
        variant="outlined"
        required
        fullWidth
        name="software_requirements"
        label="Software Requirements"
      />
    </div>
  );
};
export default UserFormFields;
