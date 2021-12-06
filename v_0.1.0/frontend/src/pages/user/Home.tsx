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

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(homeSchema),
    });

  /*   useEffect(() => {
        // fetch data from backend
        const fetchLeagues = async () => {
            const response = await axios.get('http://localhost:8090/leagues')
            setLeagues(response.data)
        }
        // call function
        fetchLeagues();
    }, []); */

    // function that submits the form data and sends it to backend
    const onSubmitFunc = async (data: HomeType) => {
      console.log({ data });
      await axios.post(
        'http://localhost:8090/register', // check URL on the backend
        data,
      );
      reset();
    };

    // UI form visible to user in browser
    return (
      <Form onSubmit={handleSubmit(onSubmitFunc)}>
        <h2>Kilpailuun ilmoittautuminen</h2>
        <br />

        <Form.Group className="mb-3">
          <Form.Label>Etunimi *</Form.Label>
          <Form.Control {...register("firstName")} type="text" placeholder="etunimi" className={`form-control ${errors.firstName ? "is-invalid" : ""}`} />
          <Form.Text className="invalid-feedback">
            {errors.firstName?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sukunimi * </Form.Label>
          <Form.Control {...register("lastName")} type="text" placeholder="sukunimi" className={`form-control ${errors.lastName ? "is-invalid" : ""}`} />
          <Form.Text className="invalid-feedback">
            {errors.lastName?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sähköpostiosoite *</Form.Label>
          <Form.Control {...register("email")} type="email" placeholder="s-posti" className={`form-control ${errors.email ? "is-invalid" : ""}`} />
          <Form.Text className="invalid-feedback">
            {errors.email?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Lähetä!
        </Button>
      </Form>
    );
}

export default Home;
