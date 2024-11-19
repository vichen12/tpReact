import { FC } from 'react'
import { Card } from 'react-bootstrap'
interface ItemProduct {
  nombre: string
  imagen: string
  precio: number
}

interface IPropsProductsList {
  arrayItems: ItemProduct[]
}

export const ProductsList: FC<IPropsProductsList> = ({ arrayItems }) => {
  return (
    <div
      className='p-1 m-3 border rounded d-grid gap-2'
      style={{
        gridTemplateColumns: 'repeat(2,1fr)',
        justifyItems: 'center',
        alignItems: 'center',
      }}
    >
      {arrayItems.map((item, index) => (
        <Card style={{ width: '18rem' }} key={index}>
          <Card.Img variant='top' src={item.imagen} />
          <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>${item.precio}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}
