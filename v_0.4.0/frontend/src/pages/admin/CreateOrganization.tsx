// import library for form making
import { useForm } from "react-hook-form";

// import yup library used for validation of form fields
import { yupResolver } from "@hookform/resolvers/yup";

// notification library imports
import { toast } from 'react-toastify';

import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { createOrganization } from "../../rest";
import { organizationSchema, OrganizationType } from "../../schema/organizationSchema";
import Form from 'react-bootstrap/Form';

import SaveButton from "./SaveButton";

const CreateOrganization = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(organizationSchema),
    });

    // function that submits the form data and sends it to backend
    const onSubmitFunc = async (data: OrganizationType) => {
        console.log({ data });
        try {
            await createOrganization(data);
            reset();
            navigate("/admin/homepage");
            toast.success(t('admin.create.alert.success'), {
              position: "top-center",
            });
        } catch (e) {
            toast.error(t('admin.create.alert.reject'), {
              position: "top-center",
            });
        }
    };

    return(
        <>
          <Button variant="primary" onClick={() => navigate("/admin/homepage")}>
            {t('admin.button.homepage')}
          </Button>
          <Form onSubmit={handleSubmit(onSubmitFunc)}>
            <h2 className= "my-3">{t('admin.createorganization.form.title')}</h2>
            <br />

            <Form.Group className="mb-3 col-5">
              <Form.Label>{t('admin.createorganization.form.name')} *</Form.Label>
              <Form.Control {...register("name")} type="text" className={`form-control ${errors.name ? "is-invalid" : ""}`} />
              <Form.Text className="invalid-feedback">
                {errors.name?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-5">
              <Form.Label>{t('admin.createorganization.form.email')} *</Form.Label>
              <Form.Control {...register("email")} type="text" className={`form-control ${errors.email ? "is-invalid" : ""}`} />
              <Form.Text className="invalid-feedback">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-5">
              <Form.Label>{t('admin.createorganization.form.regnumber')}</Form.Label>
              <Form.Control {...register("regnumber")} type="text" className={`form-control ${errors.regnumber ? "is-invalid" : ""}`} />
              <Form.Text className="invalid-feedback">
                {errors.regnumber?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-5">
              <Form.Label>{t('admin.createorganization.form.phone')}</Form.Label>
              <Form.Control {...register("phone")} type="text" className={`form-control ${errors.phone ? "is-invalid" : ""}`} />
              <Form.Text className="invalid-feedback">
                {errors.phone?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-5">
              <Form.Label>{t('admin.createorganization.form.address')}</Form.Label>
              <Form.Control {...register("address")} type="text" className={`form-control ${errors.address ? "is-invalid" : ""}`} />
              <Form.Text className="invalid-feedback">
                {errors.address?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-5">
              <Form.Label>{t('admin.createorganization.form.bic')}</Form.Label>
              <Form.Control {...register("bic")} type="text" className={`form-control ${errors.bic ? "is-invalid" : ""}`} />
              <Form.Text className="invalid-feedback">
                {errors.bic?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-5">
              <Form.Label>{t('admin.createorganization.form.iban')}</Form.Label>
              <Form.Control {...register("iban")} type="text" className={`form-control ${errors.iban ? "is-invalid" : ""}`} />
              <Form.Text className="invalid-feedback">
                {errors.iban?.message}
              </Form.Text>
            </Form.Group>

            

            {/* <Button variant="primary" type="submit">
              {t('admin.createorganization.form.button')}
            </Button> */}
            <SaveButton/>
          </Form>
          
        </>
    )
}

export default CreateOrganization;
