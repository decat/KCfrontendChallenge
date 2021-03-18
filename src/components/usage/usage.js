import Link from 'react-router-dom'
import { Button, Spinner, Card } from 'react-bootstrap'

export default function ({usage}) {
    console.log("usage in displaycomp:", usage)
    console.log("tricky ternary : ", usage.length)
    return (
        <div>
            {usage.usage.length >= 1 
            ? 
           ( usage.usage.map((item) => (
            <div key={item.id} style={{ display: "flex", flexWrap:"wrap", flexDirection: 'row'}}>    <Card style={{ width: '18rem' }} key={item.id}>
<Card.Body>
<Card.Title>{item.guid}</Card.Title>
<Card.Subtitle className="mb-2 text-muted">{item.brand}</Card.Subtitle>
<Card.Text>
  {item.desc}
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