import React from "react";
import logoMenu from "../../assets/icons/cardapio.png";

export interface props {
  styles: {
    headerContainer: any;
    headerTextMain: any;
    textContainer: any;
    imageContainer: any;
    iconStyle: any;
    cartContainer: any;
    cartStyle: any;
  };
  headerTitle: string;
}

function index(props: props) {
  const { styles, headerTitle } = props;
  return (
    <div style={styles.headerContainer}>
      <div style={styles.imageContainer}>
        <img src={logoMenu} alt="menu" style={styles.iconStyle} />
      </div>
      <div style={styles.textContainer}>
        <h2 style={styles.headerTextMain}>{headerTitle}</h2>
      </div>
      <div style={styles.cartContainer}>
        <h3 style={styles.cartStyle}>cart</h3>
      </div>
    </div>
  );
}

export default index;
