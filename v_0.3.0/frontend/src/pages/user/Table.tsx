import Table from 'react-bootstrap/Table'

const Table1 = () => {
    return(

        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Sija</th>
            <th>Nimi</th>
            <th>Kunta</th>
            <th>Aika</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Nimi Sukunimi</td>
            <td>Kangasala</td>
            <td>00:50:23</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Nimi Sukunimi</td>
            <td>Tampere</td>
            <td>01:12:43</td>
            </tr>
            <tr>
            <td>3</td>
            <td>Nimi Sukunimi</td>
            <td>Nokia</td>
            <td>01:33:23</td>
            </tr>
        </tbody>
        </Table>
    )
    }
    export default Table1;