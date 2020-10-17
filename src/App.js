import React from 'react';
import './styles/App.scss';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import Container from 'react-bootstrap/Container';
import {Route, Switch, Redirect} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import {connect} from 'react-redux';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import Account from './pages/Account';
import { selectCurrentUser } from './redux/user/user.selectors';
// import WhiteOverlay from './components/WhiteOverlay';
import Footer from './components/Footer';
import CartPopup from './components/CartPopup';
import SignInDropdown from './components/SignInDropdown';
import SearchPage from './pages/SearchPage';
import ScrollToTop from './components/ScrollToTop';

class App extends React.Component {



  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // setCurrentUser(user)
      

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })

        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  // const [currentUser, setCurrentUser] = useState(null);
  // // const [shop] = useState(SHOP_DATA);

  // useEffect() {

  // }\\

  render() {
    return (
      <React.Fragment>
        <ScrollToTop/>
        <Header/>
        <div className="additional-space"></div>
        <Container>
          {/* <WhiteOverlay/> */}
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/catalog" component={CatalogPage}/>
            <Route path="/product/:productId" component={ProductPage}/>
            <Route path="/cart" component={CartPage}/>
            <Route path="/search/:searchName" component={SearchPage}/>
            <Route path="/signin" render={() => 
              this.props.currentUser ? (
                <Redirect to="/account"/>
              ) : (
                <SignInPage/>
              )
            }/>
            <Route path="/signup" render={() => 
              this.props.currentUser ? (
                <Redirect to="/account"/>
              ) : (
                <SignUpPage/>
              )
            }/>
            <Route path="/account" render={() => 
              this.props.currentUser ? (
                <Account/>
              ) : (
                <Redirect to="/signin"/>
              )
            }/>
            <Route component={HomePage}/>
          </Switch>
        </Container> 
        <CartPopup/>
        <SignInDropdown/>
        <Footer/>

  
      </React.Fragment>
    )
  }


}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
}) 

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
