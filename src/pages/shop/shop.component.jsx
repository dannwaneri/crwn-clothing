import React from "react";

import {Route} from "react-router-dom";

import CollectionPage from '../../pages/collection/collection.component'

import CollectionOverview from '../../components/collections-overview/collections-overview.component'

import './shop.style.scss';


const ShopPage = ({match}) => {
    return(
            <div className="shop-page">
            <Route exact path = {`${match.path}`} component={CollectionOverview} />
            <Route exact path = {`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        );
}

export default ShopPage;