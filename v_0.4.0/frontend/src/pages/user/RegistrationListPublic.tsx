import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import { getRegistrationList } from '../../rest'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const RegistrationListPublic = () => {
    const { eventId } = useParams();   // URL parameter
    const [regList, setRegList] = useState([]);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    // called when component is mount to DOM
    // dependency array is empty, so called only once
    useEffect(() => {
        // fetch data from backend
        const fetchRegList = async () => {
            const response = await getRegistrationList(eventId, true)
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
                        <td>{i18n.language === 'en' ? x.nameEn : x.nameFi}</td>
                    </tr>
                ))}
            </tbody>
        )
    }

    return(
        <>
          <Button variant="primary" onClick={() => navigate("/")}>
            {t('admin.button.homepage')}
          </Button>
          <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Etunimi</th>
                    <th>Sukunimi</th>
                    <th>Sarja</th>
                </tr>
            </thead>
            <RenderRows />
          </Table>
        </>
    )
}

export default RegistrationListPublic;