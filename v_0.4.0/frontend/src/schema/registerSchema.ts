// import yup library used for validation of form fields
import * as yup from "yup";

// check required fields and generate individual error messages
export const registerSchema = yup.object().shape({
  firstName: yup.string().required('Etunimi-kentän täyttäminen on pakollista'),
  lastName: yup.string().required('Sukunimi-kentän täyttäminen on pakollista'),
  email: yup.string().email('Sähköpostiosoite on virheellinen').required('Sähköpostiosoite-kentän täyttäminen on pakollista'),
  birthDate: yup.date().notRequired().transform(value => (isNaN(value) ? undefined : value)),
  sportsClub: yup.string(),
  phoneNumber: yup.string(),
  address: yup.string().required('tämän kentän täyttäminen on pakollista'),
  city: yup.string().required('tämän kentän täyttäminen on pakollista'),
  postalCode: yup.string().required('tämän kentän täyttäminen on pakollista'),
  country: yup.string().required('tämän kentän täyttäminen on pakollista'),
  categoryId: yup.number().required('Sarja-kentän täyttäminen on pakollista').transform(value => (isNaN(value) ? undefined : value)),
  notVisibleToPublic: yup.boolean().notRequired(),
  acceptTerms: yup.boolean().oneOf([true], 'tämän kentän täyttäminen on pakollista'),
});

// export type that exactly matches schema above
export type RegisterType = yup.InferType<typeof registerSchema>;
