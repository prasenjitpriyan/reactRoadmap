import Header from "../components/Header";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  data: state.cardItems,
});
const mapDispatchToProps = (dispatch) => ({});

const connect2 = connect(mapStateToProps, mapDispatchToProps)(Header);
export default connect2;
