import React from "react";
import { connect } from "react-redux";
import { Header, LargeList } from "../../components/index";

const mapStateToProps = (state: { loggedUser: {} }) => {
  return {
    loggedUser: state.loggedUser,
  };
};

export interface props {
  loggedUser: any;
}

export class Dashboard extends React.Component<props> {
  render() {
    return (
      <div>
        <Header
          styles={{
            headerContainer: {
              height: "8vh",
              width: "100%",
              backgroundColor: "#768A9D",
              display: "flex",
              flexDirection: "row",
            },
            headerTextMain: {
              margin: 0,
              paddingTop: "2.5vh",
              paddingBottom: "2.5vh",
              paddingLeft: "1vw",
              paddingRight: "1vw",
              marginLeft: "2vw",
              alignSelf: "center",
              fontFamily: "Montserrat",
              color: "#000",
              backgroundColor: "#fff",
            },
            textContainer: {
              display: "flex",
            },
            iconStyle: {
              height: 20,
              width: 20,
              alignSelf: "center",
              cursor: "pointer",
            },
            imageContainer: {
              display: "flex",
              marginLeft: "1.5vw",
            },
            cartContainer: {
              marginLeft: "72vw",
              backgroundColor: "#61EC59",
              paddingLeft: "2.5vw",
              paddingRight: "2.5vw",
            },
            cartStyle: {
              fontFamily: "Montserrat",
            },
          }}
          headerTitle={"Olá " + this.props.loggedUser?.username}
        />
        <div style={{}}>
          <LargeList />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Dashboard);
