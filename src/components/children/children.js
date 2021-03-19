import Link from 'react-router-dom'
import { Button, CardGroup, Card, Spinner } from 'react-bootstrap'

export default function ({children, products}) {
    return (
        <CardGroup>
            {products.products.length >= 1 && children.children.length >= 1 
            ? 
           ( children.children.map((child) => (
            <div key={child.id} style={{ display: "flex", flexWrap:"wrap", flexDirection: 'row'}}>      <Card style={{ width: '18rem' }} key={child.id}>
<Card.Body>
<Card.Title>{child.first_name} {child.last_name}</Card.Title>
<Card.Subtitle className="mb-2 text-muted">{child.birthdate.slice(0,10)}</Card.Subtitle>
<Card.Text>
 {/* {
     child.products.map((product)=>{
         products.products.filter(prod => prod.guid === product.guid)[0].product
         i do not have time to finish this now
     })
 } */}
</Card.Text>
<Card.Link href="#">Upcoming size change: {child.next_size_date.slice(0,10)}</Card.Link>
</Card.Body>
</Card> </div>
        ))
            
            )
        : <Spinner animation="grow" />
        }
        </CardGroup>
    )

}