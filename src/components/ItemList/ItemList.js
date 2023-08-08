import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <div className='LisrGroup'>
            {products.map(prod => <Item Key = {prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList