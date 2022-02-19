import Card from 'react-bootstrap/Card'

//import myFile from './documents/results.pdf'
import { FileEarmarkPdf } from 'react-bootstrap-icons'

const Events = () => {
    return(
        <>
        <Card border="secondary">
        <Card.Header>12/01/2022</Card.Header>
        <Card.Body>
            <Card.Title>Event</Card.Title>
            <Card.Text>
            Information
            </Card.Text>
            <Card.Link href="http://localhost:3000">Ilmoittaudu</Card.Link>
            
            
        </Card.Body>
        </Card>
        <br/>
        <Card border="secondary">
        <Card.Header>12/01/2022</Card.Header>
        <Card.Body>
            <Card.Title>Event</Card.Title>
            <Card.Text>
            Information
            </Card.Text>
            {/* <Card.Link href={myFile}>Tulos</Card.Link> */}
            <Card.Link>Tulos</Card.Link>
            <Card.Link href="http://localhost:3000">Ilmoittaudu</Card.Link>
            <FileEarmarkPdf href="http://localhost:3000" size={42}/>
            
            
        </Card.Body>
        </Card>
        </>
        
    )
     
}
    
   
  export default Events;