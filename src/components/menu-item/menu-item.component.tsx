import React, { FunctionComponent } from 'react';
import {Section} from '../../types/section-types';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';
import {RouteComponentProps} from 'react-router'



const MenuItem: FunctionComponent<Section & RouteComponentProps> = ({imageUrl, size, title, linkUrl, history, match}) =>(
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem)