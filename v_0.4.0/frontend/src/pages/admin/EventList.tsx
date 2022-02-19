import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import { getAllEventsAndCategories } from '../../rest'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from "react-router-dom";
import { formatDateToString } from '../../utils'

const EventList = () => {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [searchParams, ] = useSearchParams();
    const organization = searchParams.get('organization')

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await getAllEventsAndCategories(organization)
            setEvents(response.data)
        }
        fetchEvents();
      }, [organization]);

    const RenderRows = (): JSX.Element => {
        return (
            <tbody>
                {events.map((x, idx) => (
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{i18n.language === 'en' ? x.nameEn : x.nameFi}</td>
                        <td>{x.city}</td>
                        <td>{x.address}</td>
                        <td>{formatDateToString(x.startDate)}</td>
                        <td>{formatDateToString(x.endDate)}</td>
                        <td>{formatDateToString(x.registrationDueDate)}</td>
                        <td>{x.infoText}</td>
                        <td>{x.organizationName}</td>
                        <td>
                          {x.categories.map(y => (
                            <>
                              <div>{i18n.language === 'en' ? y.nameEn : y.nameFi}</div>
                              <div>{y.price1} / {formatDateToString(y.dueDate1)}</div>
                              <div>{y.price2} / {formatDateToString(y.dueDate2)}</div>
                              <div>{y.price3} / {formatDateToString(y.dueDate3)}</div>
                              <div>{y.price4} / {formatDateToString(y.dueDate4)}</div>
                              <div>{y.price5} / {formatDateToString(y.dueDate5)}</div>
                            </>
                          ))}
                        </td>
                    </tr>
                ))}
            </tbody>
        )
    }

    return(
        <>
          <Button variant="primary" onClick={() => navigate("/admin/homepage")}>
            {t('admin.button.homepage')}
          </Button>
          <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nimi</th>
                    <th>Kaupunki</th>
                    <th>Osoite</th>
                    <th>Alkupvm</th>
                    <th>Loppupvm</th>
                    <th>Ilm. pvm</th>
                    <th>Lisätiedot</th>
                    <th>Järjestäjä</th>
                    <th>Sarjat ja hinnat</th>
                </tr>
            </thead>
            <RenderRows />
          </Table>
        </>
    )
}

export default EventList;