import React, { FunctionComponent } from 'react';
import {StoreCategory} from '../../types/product-types'
import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.styles.scss'

const CollectionPreview: FunctionComponent<StoreCategory>  = ({title, items}) => (

    
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4).map((item) => (
                    <CollectionItem key={item.id} {...item} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;