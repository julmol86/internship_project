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

const SaveButton = () => {
    /* const navigate = useNavigate(); */
    const { t } = useTranslation();
    /* const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(organizationSchema), */
    /* }); */

    // function that submits the form data and sends it to backend
    /* const onSubmitFunc = async (data: OrganizationType) => {
        console.log({ data });
        try {
            await createOrganization(data);
            reset();
            navigate("/admin/homepage");
            toast.success(t('admin.createorganization.alert.success'), {
              position: "top-center",
            });
        } catch (e) {
            toast.error(t('admin.createorganization.alert.reject'), {
              position: "top-center",
            });
        }
    }; */

    return(
        <>
          
            <Button variant="primary" type="submit">
              {t('admin.createorganization.form.button')}
            </Button>
          
        </>
    )
}

export default SaveButton;
