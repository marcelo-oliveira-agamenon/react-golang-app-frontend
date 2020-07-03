import React from "react";
import { connect } from "react-redux";
import { Header, LargeList } from "../../components/index";
import {
  headerContainer,
  headerTextMain,
  textContainer,
  iconStyle,
  imageContainer,
  cartContainer,
  cartStyle,
} from "./styles";

const mapStateToProps = (state: { loggedUser: {} }) => {
  return {
    loggedUser: state.loggedUser,
  };
};

export interface props {
  loggedUser: any;
}

function Dashboard(props: props) {
  return (
    <div>
      <Header
        styles={{
          headerContainer: headerContainer,
          headerTextMain: headerTextMain,
          textContainer: textContainer,
          iconStyle: iconStyle,
          imageContainer: imageContainer,
          cartContainer: cartContainer,
          cartStyle: cartStyle,
        }}
        headerTitle={"Olá " + props.loggedUser?.username}
      />
      <div style={{}}>
        <LargeList />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, null)(Dashboard);
