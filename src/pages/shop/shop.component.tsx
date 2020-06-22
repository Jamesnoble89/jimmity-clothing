import React from 'react'
import { StoreCategory } from '../../types/product-types'
import { CATEGORIES } from '../../data/shop-data.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

interface ShopProps{
    
}

interface ShopState{
    categories: StoreCategory[]
}

class ShopPage extends React.Component<ShopProps, ShopState>{
    constructor(props: ShopProps){
        super(props);

        this.state = {categories: CATEGORIES}
    }

    render() {
        const {categories} = this.state
        return(
            <div className='shop-page'>
                {
                categories.map(({id, ...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
                }
            </div>
        )
    }
}

export default ShopPage