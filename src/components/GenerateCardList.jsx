import imageCardEmpty from '../assets/imgCardEmpty.jpeg'
const GenerateCardList = ({ data }) =>
  data.map((product) => (
    <div className="card" key={product.id} style={{ width: '18rem' }}>
      {product.images && <img src={product.images
        ? product.images[0]
        : imageCardEmpty}
        className='card-img-top' alt='...' />}
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.type + " " + product.status + " " + product.value}</p>
        <a href="_" className="btn btn-primary">{product.price}</a>
      </div>
    </div>
  ))

export default GenerateCardList