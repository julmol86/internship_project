import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import { getAllOrganizations } from '../../rest'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

const UsersList = () => {
    // initialize organizations variable with empty array, similar to -> const organizations = []
    const [organizations, setAllOrganizations] = useState([]);
    const navigate = useNavigate();
    const { t } = useTranslation();

    // called when component is mount to DOM
    // dependency array is empty, so called only once
    useEffect(() => {
        // fetch data from backend
        const fetchOrganizations = async () => {
            const response = await getAllOrganizations()
            setAllOrganizations(response.data)
        }
        // call function
        fetchOrganizations();
      }, []);

    const RenderRows = (): JSX.Element => {
        return (
            <tbody>
                {organizations.sort((a, b) => a.name.localeCompare(b.name)).map((x, idx) => (
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{x.name}</td>
                        <td>{x.email}</td>
                        <td>{x.regnumber}</td>
                        <td>
                          <Button variant="primary" onClick={() => navigate(`/admin/eventlist?organization=${x.id}`)}>
                            {t('admin.userlist.button.events')}
                          </Button>
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
                    <th>S-posti</th>
                    <th>Y-tunnus</th>
                    <th>Tapahtumat</th>
                </tr>
            </thead>
            <RenderRows />
          </Table>
        </>
    )
}

export default UsersList;