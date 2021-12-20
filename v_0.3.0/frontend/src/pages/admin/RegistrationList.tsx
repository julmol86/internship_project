import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import Table from 'react-bootstrap/Table'
import { UserContext } from '../../UserContext';

const RegistrationList = () => {
    // initialize regList variable with empty array, similar to -> const regList = []
    const [regList, setRegList] = useState([]);
    const { userData } = useContext(UserContext);
    console.log(userData)

    // called when component is mount to DOM
    // dependency array is empty, so called only once
    useEffect(() => {
        // fetch data from backend
        const fetchRegList = async () => {
            const response = await axios.get('http://localhost:8090/registrationList')
            setRegList(response.data)
        }
        // call function
        fetchRegList();
    }, []);

    const RenderRows = (): JSX.Element => {
        return (
            <tbody>
                {regList.sort((a, b) => a.lastName.localeCompare(b.lastName)).map((x, idx) => (
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{x.firstName}</td>
                        <td>{x.lastName}</td>
                        <td>{x.email}</td>
                    </tr>
                ))}
            </tbody>
        )
    }

    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Etunimi</th>
                    <th>Sukunimi</th>
                    <th>S-posti</th>
                </tr>
            </thead>
            <RenderRows />
        </Table>
    )
}

export default RegistrationList;