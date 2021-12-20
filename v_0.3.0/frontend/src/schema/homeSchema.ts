// import yup library used for validation of form fields
import * as yup from "yup";

// check required fields and generate individual error messages
export const homeSchema = yup.object().shape({
  firstName: yup.string().required('Etunimi-kentän täyttäminen on pakollista'),
  lastName: yup.string().required('Sukunimi-kentän täyttäminen on pakollista'),
  email: yup.string().email('Sähköpostiosoite on virheellinen').required('Sähköpostiosoite-kentän täyttäminen on pakollista'),
  league: yup.string().required('Sarja-kentän täyttäminen on pakollista'),
});

// export type that exactly matches schema above
export type HomeType = yup.InferType<typeof homeSchema>;
