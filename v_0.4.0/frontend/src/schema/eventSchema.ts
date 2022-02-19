// import yup library used for validation of form fields
import * as yup from "yup";

// check required fields and generate individual error messages
export const categorySchema = yup.object().shape({
  namefi: yup.string().max(100, 'blah').required('Moikka moi'),
  nameen: yup.string().max(100).notRequired(),
  price1: yup.number().notRequired().transform(value => (isNaN(value) ? undefined : value)),
  duedate1: yup.date().notRequired().transform(value => (isNaN(value) ? undefined : value)),
  price2: yup.number().notRequired().transform(value => (isNaN(value) ? undefined : value)),
  duedate2: yup.date().notRequired().transform(value => (isNaN(value) ? undefined : value)),
  price3: yup.number().notRequired().transform(value => (isNaN(value) ? undefined : value)),
  duedate3: yup.date().notRequired().transform(value => (isNaN(value) ? undefined : value)),
  price4: yup.number().notRequired().transform(value => (isNaN(value) ? undefined : value)),
  duedate4: yup.date().notRequired().transform(value => (isNaN(value) ? undefined : value)),
  price5: yup.number().notRequired().transform(value => (isNaN(value) ? undefined : value)),
  duedate5: yup.date().notRequired().transform(value => (isNaN(value) ? undefined : value)),
  agecategory: yup.boolean().notRequired(),
});

// check required fields and generate individual error messages
export const eventSchema = yup.object().shape({
  namefi: yup.string().max(100, 'blah').required('Moikka moi'),
  nameen: yup.string().max(100).notRequired(),
  city: yup.string().max(100).required('Moikka moi'),
  address: yup.string().max(100).notRequired(),
  startdate: yup.date().required('Moikka moi').transform(value => (isNaN(value) ? undefined : value)),
  enddate: yup.date().notRequired().transform(value => (isNaN(value) ? undefined : value)),
  registrationduedate: yup.date().required('Moikka moi').transform(value => (isNaN(value) ? undefined : value)),
  managedbyorganization: yup.boolean().notRequired(),
  infotext: yup.string().max(2000).notRequired(),
  organizationId: yup.number().required('Moikka moi').transform(value => (isNaN(value) ? undefined : value)),
  categories: yup.array(categorySchema).default(() => ([])),//.required('Moikka moi').min(1).max(20),
});

// export type that exactly matches schema above
export type EventType = yup.InferType<typeof eventSchema>;
