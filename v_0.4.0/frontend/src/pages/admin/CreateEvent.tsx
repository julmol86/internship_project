import { useEffect, useState } from 'react';

// import library for form making
import { useForm } from "react-hook-form";

// import yup library used for validation of form fields
import { yupResolver } from "@hookform/resolvers/yup";

// notification library imports
import { toast } from 'react-toastify';

import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { createEvent, getOrganizations } from "../../rest";
import { eventSchema, EventType } from "../../schema/eventSchema";
import Form from 'react-bootstrap/Form';

import SaveButton from './SaveButton';

const CreateEvent = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [organizations, setOrganizations] = useState([]);
    const [categoryNumber, setCategoryNumber] = useState(1);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(eventSchema),
    });

    // called when component is mount to DOM
    // dependency array is empty, so called only once
    useEffect(() => {
      // fetch data from backend
      const fetchOrganizations = async () => {
          const response = await getOrganizations()
          setOrganizations(response.data)
      }
      // call function
      fetchOrganizations();
    }, []);

    const Categories = () => {
        let categories = [];
        for (let i = 0; i < categoryNumber; i++) {
            categories = [
                ...categories,
                <>
                  <hr/>
                  <h4 className= "my-3">{t('admin.createevent.form.category.header') + ' ' + (i + 1)}</h4>
                  <Form>
                    <Form.Group className="mb-3 col-5">
                      <Form.Label>{t('admin.createevent.form.category.namefi')} *</Form.Label>
                      <Form.Control {...register(`categories[${i}].namefi`)} type="text" className={`form-control ${errors.categories && errors.categories[i]?.namefi ? "is-invalid" : ""}`}/>
                      <Form.Text className="invalid-feedback">
                        {errors.categories ? errors.categories[i]?.namefi?.message : ''}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-5">
                      <Form.Label>{t('admin.createevent.form.category.nameen')}</Form.Label>
                      <Form.Control {...register(`categories[${i}].nameen`)} type="text" className={`form-control ${errors.categories && errors.categories[i]?.nameen ? "is-invalid" : ""}`}/>
                      <Form.Text className="invalid-feedback">
                        {errors.categories ? errors.categories[i]?.nameen?.message : ''}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-5">
                      <Form.Label>{t('admin.createevent.form.category.price1')}</Form.Label>
                      <Form.Control {...register(`categories[${i}].price1`)} type="number" className={`form-control ${errors.categories && errors.categories[i]?.price1 ? "is-invalid" : ""}`}/>
                      <Form.Text className="invalid-feedback">
                        {errors.categories ? errors.categories[i]?.price1?.message : ''}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-5">
                      <Form.Label>{t('admin.createevent.form.category.duedate1')}</Form.Label>
                      <Form.Control {...register(`categories[${i}].duedate1`)} type="date" className={`form-control ${errors.categories && errors.categories[i]?.duedate1 ? "is-invalid" : ""}`}/>
                      <Form.Text className="invalid-feedback">
                        {errors.categories ? errors.categories[i]?.duedate1?.message : ''}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-5">
                      <Form.Label>{t('admin.createevent.form.category.price2')}</Form.Label>
                      <Form.Control {...register(`categories[${i}].price2`)} type="number" className={`form-control ${errors.categories && errors.categories[i]?.price2 ? "is-invalid" : ""}`}/>
                      <Form.Text className="invalid-feedback">
                        {errors.categories ? errors.categories[i]?.price2?.message : ''}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-5">
                      <Form.Label>{t('admin.createevent.form.category.duedate2')}</Form.Label>
                      <Form.Control {...register(`categories[${i}].duedate2`)} type="date" className={`form-control ${errors.categories && errors.categories[i]?.duedate2 ? "is-invalid" : ""}`}/>
                      <Form.Text className="invalid-feedback">
                        {errors.categories ? errors.categories[i]?.duedate2?.message : ''}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-5">
                      <Form.Label>{t('admin.createevent.form.category.price3')}</Form.Label>
                      <Form.Control {...register(`categories[${i}].price3`)} type="number" className={`form-control ${errors.categories && errors.categories[i]?.price3 ? "is-invalid" : ""}`}/>
                      <Form.Text className="invalid-feedback">
                        {errors.categories ? errors.categories[i]?.price3?.message : ''}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-5">
                      <Form.Label>{t('admin.createevent.form.category.duedate3')}</Form.Label>
                      <Form.Control {...register(`categories[${i}].duedate3`)} type="date" className={`form-control ${errors.categories && errors.categories[i]?.duedate3 ? "is-invalid" : ""}`}/>
                      <Form.Text className="invalid-feedback">
                        {errors.categories ? errors.categories[i]?.duedate3?.message : ''}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-5">
                      <Form.Label>{t('admin.createevent.form.category.price4')}</Form.Label>
                      <Form.Control {...register(`categories[${i}].price4`)} type="number" className={`form-control ${errors.categories && errors.categories[i]?.price4 ? "is-invalid" : ""}`}/>
                      <Form.Text className="invalid-feedback">
                        {errors.categories ? errors.categories[i]?.price4?.message : ''}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-5">
                      <Form.Label>{t('admin.createevent.form.category.duedate4')}</Form.Label>
                      <Form.Control {...register(`categories[${i}].duedate4`)} type="date" className={`form-control ${errors.categories && errors.categories[i]?.duedate4 ? "is-invalid" : ""}`}/>
                      <Form.Text className="invalid-feedback">
                        {errors.categories ? errors.categories[i]?.duedate4?.message : ''}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-5">
                      <Form.Label>{t('admin.createevent.form.category.price5')}</Form.Label>
                      <Form.Control {...register(`categories[${i}].price5`)} type="number" className={`form-control ${errors.categories && errors.categories[i]?.price5 ? "is-invalid" : ""}`}/>
                      <Form.Text className="invalid-feedback">
                        {errors.categories ? errors.categories[i]?.price5?.message : ''}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-5">
                      <Form.Label>{t('admin.createevent.form.category.duedate5')}</Form.Label>
                      <Form.Control {...register(`categories[${i}].duedate5`)} type="date" className={`form-control ${errors.categories && errors.categories[i]?.duedate5 ? "is-invalid" : ""}`}/>
                      <Form.Text className="invalid-feedback">
                        {errors.categories ? errors.categories[i]?.duedate5?.message : ''}
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3 col-5">
                      <Form.Label>{t('admin.createevent.form.category.agecategory')}</Form.Label>
                      <Form.Check {...register(`categories[${i}].agecategory`)} type="checkbox" />
                      <Form.Text className="invalid-feedback">
                        {errors.categories ? errors.categories[i]?.agecategory?.message : ''}
                      </Form.Text>
                    </Form.Group>
                  </Form>
                </>
            ]
        }
        return <>{categories}</>
    }

    // function that submits the form data and sends it to backend
    const onSubmitFunc = async (data: EventType) => {
        console.log({ data });
        try {
            await createEvent(data);
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
            <h2 className= "my-3">{t('admin.createevent.form.title')}</h2>
            <br />

            <Form.Group className="mb-3 col-5">
              <Form.Label>{t('admin.createevent.form.event.organizationId')} *</Form.Label>
              <Form.Select {...register("organizationId")} defaultValue="" className={`form-control ${errors.organizationId ? "is-invalid" : ""}`}>
                <option value="" disabled hidden>-- {t('admin.createevent.form.event.chooseOrganization')} --</option>
                {organizations.map(x => <option value={x.id}>{x.name}</option>)}
              </Form.Select>
              <Form.Text className="invalid-feedback">
                {errors.organizationId?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-5">
              <Form.Label>{t('admin.createevent.form.event.namefi')} *</Form.Label>
              <Form.Control {...register("namefi")} type="text" className={`form-control ${errors.namefi ? "is-invalid" : ""}`} />
              <Form.Text className="invalid-feedback">
                {errors.namefi?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-5">
              <Form.Label>{t('admin.createevent.form.event.nameen')}</Form.Label>
              <Form.Control {...register("nameen")} type="text" className={`form-control ${errors.nameen ? "is-invalid" : ""}`} />
              <Form.Text className="invalid-feedback">
                {errors.nameen?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-5">
              <Form.Label>{t('admin.createevent.form.event.city')} *</Form.Label>
              <Form.Control {...register("city")} type="text" className={`form-control ${errors.city ? "is-invalid" : ""}`} />
              <Form.Text className="invalid-feedback">
                {errors.city?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-5">
              <Form.Label>{t('admin.createevent.form.event.address')}</Form.Label>
              <Form.Control {...register("address")} type="text" className={`form-control ${errors.address ? "is-invalid" : ""}`} />
              <Form.Text className="invalid-feedback">
                {errors.address?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-5">
              <Form.Label>{t('admin.createevent.form.event.startdate')} *</Form.Label>
              <Form.Control {...register("startdate")} type="date" className={`form-control ${errors.startdate ? "is-invalid" : ""}`} />
              <Form.Text className="invalid-feedback">
                {errors.startdate?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-5">
              <Form.Label>{t('admin.createevent.form.event.enddate')}</Form.Label>
              <Form.Control {...register("enddate")} type="date" className={`form-control ${errors.enddate ? "is-invalid" : ""}`} />
              <Form.Text className="invalid-feedback">
                {errors.enddate?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-5">
              <Form.Label>{t('admin.createevent.form.event.registrationduedate')} *</Form.Label>
              <Form.Control {...register("registrationduedate")} type="date" className={`form-control ${errors.registrationduedate ? "is-invalid" : ""}`} />
              <Form.Text className="invalid-feedback">
                {errors.registrationduedate?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-5">
              <Form.Label>{t('admin.createevent.form.event.managedbyorganization')}</Form.Label>
              <Form.Check {...register("managedbyorganization")} type="checkbox" />
              <Form.Text className="invalid-feedback">
                {errors.managedbyorganization?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-5">
              <Form.Label>{t('admin.createevent.form.event.infotext')}</Form.Label>
              <Form.Control {...register("infotext")} as="textarea" rows={3} className={`form-control ${errors.infotext ? "is-invalid" : ""}`} />
              <Form.Text className="invalid-feedback">
                {errors.infotext?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 col-5">
              <Form.Label>{t('admin.createevent.form.event.categoryNumber')}</Form.Label>
              <Form.Control value={categoryNumber} type="number" onChange={e => setCategoryNumber(parseInt(e.target.value))} />
            </Form.Group>

            <Categories />
            <hr/>
            <SaveButton/>
          </Form>
        </>
    )
}

export default CreateEvent;
