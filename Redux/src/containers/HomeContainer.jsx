import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../services/actions/Actions";

const mapStateToProps = (state) => ({
  //data: state.cardItems,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeFromCartHandler: (data) => dispatch(removeFromCart(data)),
});

const connect1 = connect(mapStateToProps, mapDispatchToProps)(Home);
export default connect1;
