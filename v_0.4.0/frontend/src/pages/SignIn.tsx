import React, { useContext } from 'react';

// import library for form making
import { useForm } from "react-hook-form";

// import yup library used for validation of form fields
import { yupResolver } from "@hookform/resolvers/yup";

// import library for backend queries
import axios from 'axios';

// import individual components used in this form from bootstrap
import Button from 'react-bootstrap/Button';

// notification library imports
import { toast } from 'react-toastify';

// import custom files
import { signInSchema, SignInType } from '../schema/signinSchema';
import { UserContext } from '../UserContext';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { signInUser } from '../rest';

const SignIn = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(signInSchema),
    });
    const { userData, setUserData } = useContext(UserContext);
    console.log(userData)

    // function that submits the form data and sends it to backend
    const onSubmitFunc = async (data: SignInType) => {
      console.log({ data });
      const resp = await signInUser(data)
      console.log(resp)

      // notify user and redirect on success
      if (resp.data?.loggedIn) {
        // set up user data context at this stage
        setUserData(resp.data)

        reset();
        toast.success(t('admin.alert.success'), {
          position: "top-center",
        });
        resp.data.role === 'ADMINISTRATOR' ? navigate("/admin/homepage") : navigate("/organization/homepage")
      } else {
        toast.error(t('admin.alert.reject'), {
          position: "top-center",
        });
      }
    };

    // UI form visible to user in browser
    return (
      <Form onSubmit={handleSubmit(onSubmitFunc)}>
        <h2>{t('admin.signin.title')}</h2>
        <br />

        <Form.Group className="mb-3">
          <Form.Label>{t('admin.signin.login')} *</Form.Label>
          <Form.Control {...register("login")} type="text" className={`form-control ${errors.login ? "is-invalid" : ""}`} />
          <Form.Text className="invalid-feedback">
            {errors.login?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>{t('admin.signin.password')} * </Form.Label>
          <Form.Control {...register("password")} type="password" className={`form-control ${errors.password ? "is-invalid" : ""}`} />
          <Form.Text className="invalid-feedback">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
        {t('admin.signin.button')}
        </Button>
      </Form>
    );
}

export default SignIn;
