import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import library for form making
import { useForm } from "react-hook-form";

// import yup library used for validation of form fields
import { yupResolver } from "@hookform/resolvers/yup";

// import individual components used in this form from bootstrap
import Button from 'react-bootstrap/Button';

// import custom files
import { registerSchema, RegisterType } from '../../schema/registerSchema';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { getEventCategories, registerCompetitor } from '../../rest'
import { firstLetterToUppercase } from '../../utils'
import { formatDateToString } from '../../utils'

const Registration = () => {
    const { eventId } = useParams();   // URL parameter
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [categories, setCategories] = useState([]);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(registerSchema),
    });

    useEffect(() => {
        // fetch data from backend
        const fetchCategories = async () => {
            const response = await getEventCategories(eventId)
            setCategories(response.data)
        }
        // call function
        fetchCategories();
    }, [eventId]);

    // function that submits the form data and sends it to backend
    const onSubmitFunc = async (data: RegisterType) => {
      await registerCompetitor({
        ...data,
        firstName: firstLetterToUppercase(data.firstName),
        lastName: firstLetterToUppercase(data.lastName),
      } as RegisterType);
      reset();
      navigate("/registrationsuccess");
    };

    // UI form visible to user in browser
    return (
      <Form onSubmit={handleSubmit(onSubmitFunc)}>
        <h2 className= "my-3">{t('user.home.form.title')}</h2>
        <br />

        <Form.Group className="mb-3 col-5">
          <Form.Label>{t('user.home.form.fname')} *</Form.Label>
          <Form.Control {...register("firstName")} type="text" className={`form-control ${errors.firstName ? "is-invalid" : ""}`} />
          <Form.Text className="invalid-feedback">
            {errors.firstName?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-5">
          <Form.Label>{t('user.home.form.lname')} * </Form.Label>
          <Form.Control {...register("lastName")} type="text" className={`form-control ${errors.lastName ? "is-invalid" : ""}`} />
          <Form.Text className="invalid-feedback">
            {errors.lastName?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-5">
          <Form.Label>{t('user.home.form.email')} *</Form.Label>
          <Form.Control {...register("email")} type="text" className={`form-control ${errors.email ? "is-invalid" : ""}`} />
          <Form.Text className="invalid-feedback">
            {errors.email?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-5">
          <Form.Label>{t('user.home.form.birthDate')}</Form.Label>
          <Form.Control {...register("birthDate")} type="date" className={`form-control ${errors.birthDate ? "is-invalid" : ""}`} />
          <Form.Text className="invalid-feedback">
            {errors.birthDate?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-5">
          <Form.Label>{t('user.home.form.sportsClub')}</Form.Label>
          <Form.Control {...register("sportsClub")} type="text" className={`form-control ${errors.sportsClub ? "is-invalid" : ""}`} />
          <Form.Text className="invalid-feedback">
            {errors.sportsClub?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-5">
          <Form.Label>{t('user.home.form.phoneNumber')}</Form.Label>
          <Form.Control {...register("phoneNumber")} type="text" className={`form-control ${errors.phoneNumber ? "is-invalid" : ""}`} />
          <Form.Text className="invalid-feedback">
            {errors.phoneNumber?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-5">
          <Form.Label>{t('user.home.form.address')} *</Form.Label>
          <Form.Control {...register("address")} type="text" className={`form-control ${errors.address ? "is-invalid" : ""}`} />
          <Form.Text className="invalid-feedback">
            {errors.address?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-5">
          <Form.Label>{t('user.home.form.city')} *</Form.Label>
          <Form.Control {...register("city")} type="text" className={`form-control ${errors.city ? "is-invalid" : ""}`} />
          <Form.Text className="invalid-feedback">
            {errors.city?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-5">
          <Form.Label>{t('user.home.form.postalCode')} *</Form.Label>
          <Form.Control {...register("postalCode")} type="text" className={`form-control ${errors.postalCode ? "is-invalid" : ""}`} />
          <Form.Text className="invalid-feedback">
            {errors.postalCode?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-5">
          <Form.Label>{t('user.home.form.country')} *</Form.Label>
          <Form.Control {...register("country")} type="text" className={`form-control ${errors.country ? "is-invalid" : ""}`} />
          <Form.Text className="invalid-feedback">
            {errors.country?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-5">
          <Form.Label>{t('user.home.form.category')} * </Form.Label>
          <Form.Select {...register("categoryId")} defaultValue="" className={`form-control ${errors.categoryId ? "is-invalid" : ""}`}>
            <option value="" disabled hidden>-- {t('user.home.form.choose')} --</option>
            {categories.map(x => <option value={x.id}>{i18n.language === 'en' ? x.nameEn : x.nameFi}, {x.price} EUR, {t('user.home.form.priceValidTill')}: {formatDateToString(x.dueDate)} </option>)}
          </Form.Select>
          <Form.Text className="invalid-feedback">
            {errors.categoryId?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-5">
          <Form.Label>{t('user.home.form.notVisibleToPublic')}</Form.Label>
          <Form.Check {...register("notVisibleToPublic")} type="checkbox" />
          <Form.Text className="invalid-feedback">
            {errors.notVisibleToPublic?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-5">
          <Form.Label>{t('user.home.form.acceptTerms')}</Form.Label>
          <Form.Check {...register("acceptTerms")} type="checkbox" className="is-invalid" />
          <Form.Text className="invalid-feedback">
            {errors.acceptTerms?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
        {t('user.home.form.button')}
        </Button>
      </Form>
    );
}

export default Registration;