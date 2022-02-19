import { useEffect, useState, useContext } from 'react';
import Table from 'react-bootstrap/Table'
import { getRegistrationList, registrationPayment } from '../../rest'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { UserContext } from '../../UserContext';

const RegistrationList = () => {
    const { eventId } = useParams();   // URL parameter
    const [regList, setRegList] = useState([]);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const { userData } = useContext(UserContext);

    // called when component is mount to DOM
    // dependency array is empty, so called only once
    useEffect(() => {
        // fetch data from backend
        const fetchRegList = async () => {
            const response = await getRegistrationList(eventId)
            setRegList(response.data)
        }
        // call function
        fetchRegList();
    }, [eventId]);

    const RenderRows = (): JSX.Element => {
        return (
            <tbody>
                {regList.sort((a, b) => a.lastName.localeCompare(b.lastName)).map((x, idx) => (
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{x.firstName}</td>
                        <td>{x.lastName}</td>
                        <td>{x.email}</td>
                        <td>{i18n.language === 'en' ? x.nameEn : x.nameFi}</td>
                        <td>{x.sportsClub}</td>
                        <td>{x.phoneNumber}</td>
                        <td>
                          <Form.Check
                            checked={x.paymentReceived}
                            type='checkbox'
                            onChange={async (e) => {
                              const newValue = e.target.checked
                              const res = await registrationPayment(x.id, newValue)
                              if (res.status === 200) {
                                setRegList(regList.map(r => r.id === x.id ? { ...r, paymentReceived: newValue } : r))
                              }
                            }}
                          />
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
                    <th>Etunimi</th>
                    <th>Sukunimi</th>
                    <th>S-posti</th>
                    <th>Sarja</th>
                    <th>Seura</th>
                    <th>Puhelin</th>
                    <th>Maksettu</th>
                </tr>
            </thead>
            <RenderRows />
          </Table>
        </>
    )
}

export default RegistrationList;