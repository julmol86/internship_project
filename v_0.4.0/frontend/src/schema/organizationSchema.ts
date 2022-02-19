// import yup library used for validation of form fields
import * as yup from "yup";

// check required fields and generate individual error messages
export const organizationSchema = yup.object().shape({
  name: yup.string().required('Moikka moi'),
  email: yup.string().email('Sähköpostiosoite on virheellinen').required('Moikka moi'),
  regnumber: yup.string().notRequired(),
  phone: yup.string().notRequired(),
  address: yup.string().notRequired(),
  bic: yup.string().notRequired(),
  iban: yup.string().notRequired(),
});

// export type that exactly matches schema above
export type OrganizationType = yup.InferType<typeof organizationSchema>;
