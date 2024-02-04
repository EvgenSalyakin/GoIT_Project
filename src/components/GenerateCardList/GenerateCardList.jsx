import './GenerateCardList.styled.css'
import someStyle from './GenerateCardList.module.css'
//import classNames from 'classnames'
//import { Wrapper } from './Wrapper.styled'


//product.images &&

import imageCardEmpty from '../../assets/imgCardEmpty.jpeg'
const GenerateCardList = ({ data }) => {
  return data.map((product) => (
    //<div className={someStyle.container + " card"} key={product.id} style={{ width: '18rem' }}>
    //<div className={classNames('container', product.images ? [someStyle.active] : 'notActive')} key={product.id} style={{ width: '18rem' }}>
    <div className={`container ${product.images ? 'active' : 'notActive'}`} key={product.id} style={{ width: '18rem' }}>



      <img src={
        product.images
          ? product.images[0]
          : imageCardEmpty
      }
        className='card-img-top' alt='...' />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.type + " " + product.status + " " + product.value}</p>
        <a href="_" className="btn btn-primary">{product.price}</a>
      </div>
    </div >
  ))
}

export default GenerateCardList