import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'

import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'

import CollectionPreview from '../collection-preview/collection-preview.component'

import './collections-overview.style.scss'


const CollectionOverview = ({collections}) => (
    <div className="collections-overview">
    {
        collections.map(({id,...otherCollectionsProps}) => (
        <CollectionPreview key={id} {...otherCollectionsProps}/>
        ))
    }
</div>
)

const mapStateToProps = createStructuredSelector ({
    collections:selectCollectionsForPreview,
    })
    
    export default connect(mapStateToProps)(CollectionOverview);