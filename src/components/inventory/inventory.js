import Link from 'react-router-dom'
import { Button, Alert, Card, Spinner } from 'react-bootstrap'

export default function ({inventory, products}) {
    console.log("inventory in displaycomp:", inventory)
    console.log("tricky ternary : ", inventory.length)
    return (
        <div>
            {inventory.inventory.length >= 1 
            ? 
           ( inventory.inventory.map((item) => (
            <div key={item.id} style={{ display: "flex", flexWrap:"wrap", flexDirection: 'row'}}>      <Card style={{ width: '18rem' }} key={item.id}>
<Card.Body>
<Card.Title>{item.guid}</Card.Title>
<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
<Card.Text>
  Some quick example text to build on the card title and make up the bulk of
  the card's content.
</Card.Text>
<Card.Link href="#">You have: {item.qty}</Card.Link>
<Card.Link href="#">Another Link</Card.Link>
</Card.Body>
</Card> </div>
        ))
            
            )
        : <Spinner animation="grow" />
        }
        </div>
    )

}