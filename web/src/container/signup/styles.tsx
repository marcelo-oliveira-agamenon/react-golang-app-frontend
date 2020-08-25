import styles from "styled-components";

export const PrimaryContainer = styles.div`
    height: 100vh;
    width: 100%;
    background-color: #7DBEF9;
    display: flex;
    justify-content: center;
`;

export const SecondContainer = styles.div`
    width: 770px;
    height: 88vh;
    background-color: #fff;
    margin-top: 5vh;
    box-shadow: 5px 5px 10px 18px #6DA3FF;
    animation: first 1s;

    @keyframes first {
        from {
          margin-left: -3000px;
        }
        to {
          margin-left: 0px;
        }
      }

    div:nth-child(1) {
        width: auto;
        background-color: #312F92;
        display: flex;
        align-self: flex-start;
        padding: 8px 0;

        h1 {
            color: #fff;
    font-family: Montserrat, sans-serif;
    margin-left: 2vw;
    font-size: 19px;
    letter-spacing: 2px;
        }
    }

    div:nth-child(2) {
        position: relative;
        overflow: hidden;
        display: flex;
        margin-bottom: 60px;
        margin-top: 20px;
        justify-content: center;

        input {
            font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
        }

        button {
            font-family: Montserrat, sans-serif;
    padding: 7px 15px;
    margin-left: 30px;
    height: 35px;
    align-self: center;
    background-color: #35C14F;
    border: none;
    color: #fff;
    letter-spacing: 1px;
    box-shadow: 1px 1px 5px 1px #A0A0A0, -1px -1px 5px 1px #A0A0A0;
    outline: none;
    cursor: pointer;
        }

        img {
            width: 100px;
    height: 100px;
    border-radius: 15px;
        }
    }
`;

export const UContainer = styles.div`
    width: auto;
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
        font-family: Montserrat, sans-serif;
    margin-left: 100px;
    font-weight: 600;
    color: userExist !== "" ? "#DC181E" : "#000";
    }

    input {
        width: 550px;
    margin-left: 100px;
    padding: 10px 0;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid;
    border-color: #000;
    padding-left: 15px;
    font-size: 15px;
    }
`;

export const ContainerButton = styles.div`
    width: auto;
    display: flex;
    flex-direction: row;
    margin-top: 80px;
    justify-content: center;
    margin-left: 28px;

    button:nth-child(1) {
        font-family: Montserrat, sans-serif;
    width: 230px;
    padding: 10px 0px;
    margin-right: 90px;
    text-transform: uppercase;
    font-weight: bold;
    background-color: #35C14F;
    border: none;
    color: #fff;
    letter-spacing: 1px;
    box-shadow: 1px 1px 5px 1px #A0A0A0, -1px -1px 5px 1px #A0A0A0;
    outline: none;
    cursor: pointer;
    }

    button:nth-child(2) {
        font-family: Montserrat, sans-serif;
    width: 230px;
    padding: 10px 0px;
    margin-right: 35px;
    text-transform: uppercase;
    font-weight: bold;
    background-color: #DC181E;
    border: none;
    color: #fff;
    letter-spacing: 1px;
    box-shadow: 1px 1px 5px 1px #A0A0A0, -1px -1px 5px 1px #A0A0A0;
    outline: none;
    cursor: pointer;
    }
`;
