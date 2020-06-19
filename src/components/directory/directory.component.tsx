import React from 'react'
import {Section} from '../../types/section-types'
import {Sections} from '../../data/sections.data'
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
          sections: Sections
        }
          
            //for testing needs claened
            
    }

    render() {
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) =>( <MenuItem id={id} {...otherSectionProps}/>))}
            </div>
        ) 
    }
}

export default Directory;