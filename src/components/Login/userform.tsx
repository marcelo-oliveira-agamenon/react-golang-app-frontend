import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../ducks/auth";
import { useHistory } from "react-router-dom";

const mapStateToProps = (state: {
  apiToken: {
    token: string;
  };
  error: {
    data: {
      error: string;
    };
  };
}) => {
  return {
    apiToken: state.apiToken,
    error: state.error,
  };
};

export interface props {
  apiToken: {
    token: string;
  };
  error: {
    data: {
      error: string;
    };
  };
  login: (username: string, password: string) => Promise<string>;
}

function Userform(props: props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.login(username, password).then((response) => {
      if (response !== undefined) {
        history.push("/dashboard");
      } else {
        setUsername("");
        setPassword("");
        return;
      }
    });
  };

  return (
    <div
      style={{
        border: "1.2px solid #707070",
        width: "18vw",
        height: "",
        padding: "2.2rem 2.5rem",
        borderRadius: "30px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label
          style={{
            marginBottom: "2vh",
            fontFamily: "Roboto, sans-serif",
            fontSize: "1.3vw",
          }}
        >
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          style={{
            padding: "0.3rem",
            borderRadius: "3px",
            outline: "none",
            borderColor: "#707070",
            borderWidth: "1.15px",
          }}
          placeholder="Insert your username"
        />
        <label
          style={{
            marginBottom: "2vh",
            fontFamily: "Open Sans, sans-serif",
            fontSize: "1.3vw",
            marginTop: "2vh",
          }}
        >
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={{
            padding: "0.3rem",
            borderRadius: "5px",
            outline: "none",
            borderWidth: "1.15px",
            borderColor: "#707070",
          }}
          placeholder="Insert your password"
        />
        <button
          type="submit"
          style={{
            marginLeft: "4vw",
            marginTop: "3vh",
            textTransform: "capitalize",
            fontFamily: "Roboto, sans-serif",
            fontSize: "1.2vw",
            width: "10vw",
            backgroundColor: "#28CC21",
            borderRadius: "19px",
            borderStyle: "none",
            height: "4.5vh",
            color: "#fff",
            letterSpacing: "2px",
            fontWeight: "lighter",
            outline: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
      {console.log("a", props)}
      {props.apiToken.token === "" ? (
        <h3
          style={{
            textTransform: "capitalize",
            fontFamily: "Roboto, sans-serif",
            color: "#EA292D",
            fontSize: "1vw",
            margin: 0,
            padding: 0,
          }}
        >
          {props.error?.data.error}
        </h3>
      ) : null}
    </div>
  );
}

export default connect(mapStateToProps, (dispatch: any) => ({
  login: (username: string, password: string) =>
    dispatch(login(username, password)),
}))(Userform);
