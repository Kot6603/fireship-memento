
// making a card in js 
const Card = ({ image, selected, onClick }) => {
  return (
    <div className="card">
      <div className={selected && 'selected'}>
        <img alt="face-card" src={image} className="card-face" />
        <img alt="back-card" src={'/assets/fireship.png'} className="card-back" onClick={onClick} />
      </div>
    </div>
  )
}

export default Card
