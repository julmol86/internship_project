import React, { useEffect, useState } from 'react';

// import library for form making
import { useForm } from "react-hook-form";

// import yup library used for validation of form fields
import { yupResolver } from "@hookform/resolvers/yup";

// import library for backend queries
import axios from 'axios';

// import individual components used in this form from bootstrap
import Button from 'react-bootstrap/Button';

// import custom files
import { homeSchema, HomeType } from '../../schema/homeSchema';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const history = useHistory();
    const { t } = useTranslation();
    const [leagues, setLeagues] = useState([]);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(homeSchema),
    });

    useEffect(() => {
        // fetch data from backend
        const fetchLeagues = async () => {
            const response = await axios.get('http://localhost:8090/leagues')
            setLeagues(response.data)
        }
        // call function
        fetchLeagues();
    }, []);

    // function that submits the form data and sends it to backend
    const onSubmitFunc = async (data: HomeType) => {
      console.log({ data });
      await axios.post(
        'http://localhost:8090/register', // check URL on the backend
        data,
      );
      reset();
      history.push("/registrationsuccess");
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
          <Form.Control {...register("email")} type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} />
          <Form.Text className="invalid-feedback">
            {errors.email?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 col-5">
          <Form.Label>{t('user.home.form.league')} * </Form.Label>
          <Form.Select {...register("league")} defaultValue="" className={`form-control ${errors.league ? "is-invalid" : ""}`}>
            <option value="" disabled hidden>-- {t('user.home.form.choose')} --</option>
            {leagues.map(x => <option value={x.leagueKey}>{x.leagueName}</option>)}
          </Form.Select>
          <Form.Text className="invalid-feedback">
            {errors.league?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
        {t('user.home.form.button')}
        </Button>
      </Form>
    );
}

export default Home;
