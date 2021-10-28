import React from 'react';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';


import {fetchCollectionsStartASync} from '../../redux/shop/shop.actions';


import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container'

import CollectionContainer from '../collection/collection.container';


class ShopPage extends React.Component {

    componentDidMount() {
    const {fetchCollectionsStartASync} = this.props;
    fetchCollectionsStartASync()
  }

  render() {
    const { match} = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component = {CollectionContainer}
        />
      </div>
    );
  }
}




const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartASync: () =>  dispatch(fetchCollectionsStartASync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
