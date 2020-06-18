import React from 'react'
import {Section} from '../../types/section-types'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

interface tempProp{
}

interface state{
    sections: Array<Section>
}

class Directory extends React.Component<tempProp, state> {
    constructor(props: tempProp){
        super(props);

        this.state = {

          
            //for testing needs claened
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {this.state.sections.map(section =>( <MenuItem imageUrl={section.imageUrl} title={section.title} size={section.size} id={section.id} linkUrl={section.linkUrl}/>))}
            </div>
        ) 
    }
}

export default Directory;