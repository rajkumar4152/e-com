import React,{Component}from 'react';
import { Route } from 'react-router-dom';
import {updateCollections} from '../../redux/shop/shop.actions';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {firestore,convertCollectionsSnapsshotToMap} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const {updateCollections} = this.props;
   const collectionRef =firestore.collection('collection');
  this.unsubscribeFromSnapshot= collectionRef.onSnapshot(async snapshot =>{
    const collectionsMap= convertCollectionsSnapsshotToMap(snapshot);
    updateCollections(collectionsMap)
   })
  }
  render(){
  const {match} = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
    }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => 
  dispatch(updateCollections(collectionsMap))
});

export default connect(null,mapDispatchToProps)(ShopPage);