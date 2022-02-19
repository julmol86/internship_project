import { useEffect, useState, useContext } from 'react';
import Table from 'react-bootstrap/Table'
import { getAllEventsAndCategories } from '../../rest'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { formatDateToString } from '../../utils'
import { UserContext } from '../../UserContext';

const RegEventList = () => {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);
    const { t, i18n } = useTranslation();
    const organizationId = userData.role === "ORGANIZATION" ? userData.organizationId : undefined

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await getAllEventsAndCategories(organizationId)
            setEvents(response.data)
        }
        fetchEvents();
      }, [organizationId]);

    const RenderRows = (): JSX.Element => {
        return (
            <tbody>
                {events.map((x, idx) => (
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{i18n.language === 'en' ? x.nameEn : x.nameFi}</td>
                        <td>{formatDateToString(x.startDate)}</td>
                        <td>{x.organizationName}</td>
                        <td>
                          <Button variant="primary" onClick={() => navigate(`/${userData.role === "ORGANIZATION" ? 'organization' : 'admin'}/event/${x.id}/registrationlist`)}>
                            {t('admin.regeventlist.button.registrations')}
                          </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        )
    }

    return(
        <>
          <Button variant="primary" onClick={() => navigate(`/${userData.role === "ORGANIZATION" ? 'organization' : 'admin'}/homepage`)}>
            {t('admin.button.homepage')}
          </Button>
          <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nimi</th>
                    <th>Alkupvm</th>
                    <th>Järjestäjä</th>
                    <th>Ilmoittautumislista</th>
                </tr>
            </thead>
            <RenderRows />
          </Table>
        </>
    )
}

export default RegEventList;