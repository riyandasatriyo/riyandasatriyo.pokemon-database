import React from 'react'
import { Stack } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PokeCard = ({pokemon}) => {
  //console.log(pokemon)
  return (
    pokemon.map((detail) => {
      return(
        <div key={detail.id}>
       <div className="wrapper">
              <div className="d-flex justify-content-around">
                <Stack direction="horizontal" gap={3}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={detail.sprites.front_default} />
                    <Card.Body>
                      <Card.Title>{detail.name}</Card.Title>
                      <Card.Text>
                        {detail.types.map(type =>{
                          return(
                            <div>{type.type.name}</div>
                          )
                        })}
                      </Card.Text>
                      <Button variant="primary">View Detail</Button>
                    </Card.Body>
                  </Card>
                </Stack>
              </div>
            </div>
            </div> 
      )
    })
    
  )
}

export default PokeCard