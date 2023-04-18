import Card from './Components/Card';
import CardImage from './Components/CardImage';
import './App.css';

export default function App() {
  return (
    <div className='container'>
      <Card
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        btnName="Go somewhere"
      >
        <CardImage
          src="https://picsum.photos/300/200"
          alt="Image cap"
        />
      </Card>
      <Card
        title="Special title treatment"
        text="With supporting text below as a natural lead-in to additional content."
        btnName="Go home"
      />
    </div>
  )
}