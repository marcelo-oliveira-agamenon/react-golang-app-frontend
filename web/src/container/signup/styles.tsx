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
    box-shadow: 5px 5px 10px 12px #6DA3FF;
`;

export const HeaderContainer = styles.div`
    width: auto;
    background-color: #312F92;
    display: flex;
    align-self: flex-start;
    padding: 8px 0;
`;

export const HeaderTitle = styles.h2`
    color: #fff;
    font-family: Montserrat, sans-serif;
    margin-left: 2vw;
    font-size: 19px;
    letter-spacing: 2px;
`;

export const UContainer = styles.div`
    width: auto;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;

export const ULabel = styles.h5`
    font-family: Montserrat, sans-serif;
    margin-left: 100px;
    color: userExist !== "" ? "#DC181E" : "#000";
`;

export const UInput = styles.input`
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
`;

export const ContainerButton = styles.div`
    width: auto;
    display: flex;
    flex-direction: row;
    margin-top: 80px;
    justify-content: center;
`;

export const ContainerInput = styles.div`
    position: relative;
    overflow: hidden;
    display: inline-block;
`;

export const Button = styles.button`
    font-family: Montserrat, sans-serif;
    padding: 7px 15px;
    margin-right: 35px;
    background-color: #35C14F;
    border: none;
    color: #fff;
    letter-spacing: 1px;
    box-shadow: 1px 1px 5px 1px #A0A0A0, -1px -1px 5px 1px #A0A0A0;
    outline: none;
    cursor: pointer;
`;

export const ButtonCancel = styles.button`
    font-family: Montserrat, sans-serif;
    padding: 7px 15px;
    margin-right: 35px;
    background-color: #DC181E;
    border: none;
    color: #fff;
    letter-spacing: 1px;
    box-shadow: 1px 1px 5px 1px #A0A0A0, -1px -1px 5px 1px #A0A0A0;
    outline: none;
    cursor: pointer;
`;

export const ContainerError = styles.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    background-color: #DC181E;
`;

export const ErrorTitle = styles.h4`
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    letter-spacing: 2px;
    color: #fff;
`;

export const InputFile = styles.input`
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
`;

export const ImageAvatar = styles.img`
    width: 100px;
    height: 100px;
    border-radius: 15px;
`;
