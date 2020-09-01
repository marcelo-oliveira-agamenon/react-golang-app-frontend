import styled from "styled-components";
import ImageLogin from "../../assets/image/backgroundImageLogin.jpg";

export const MainContainer = styled.div`
	display: flex;
	align-self: center;
	height: 100vh;
	max-width: 100%;
	width: auto;
	background-image: url(${ImageLogin});
	justify-content: center;
	flex-direction: column;
`;

export const SecondContainer = styled.div`
	width: 450px;
	height: 600px;
	background-color: #7dbef9;
	padding: 16px 80px;
	align-self: center;
	box-shadow: 0px 4px 4px 0px rgb(0, 0, 0, 0.25), 8px 0px 15px 0px rgb(0, 0, 0, 0.25);
	animation: first 1s;

	@keyframes first {
		from {
			margin-left: -3000px;
		}
		to {
			align-self: center;
		}
	}

	@media (max-width: 650px) {
		height: 550px;
		width: 350px;
		padding: 18px 50px;

		h1 {
			font-size: 20px;
		}

		div:nth-child(2) {
			padding-bottom: 0;
			padding-top: 0;
		}
	}

	@media (max-width: 450px) {
		width: 280px;
		padding: 18px 20px;

		h1 {
			font-size: 18px;
		}
	}

	@media (max-width: 320px) {
		width: 220px;
		height: 480px;
		padding: 8px 10px;

		h1 {
			font-size: 17px;
		}
	}

	h1 {
		margin: 0;
		text-align: center;
		text-transform: uppercase;
		font-family: Montserrat;
		letter-spacing: 3px;
	}

	div:nth-child(2) {
		display: flex;
		align-items: center;
		flex-direction: column;
		background-color: #e4f2ff;
		box-shadow: 0px 4px 4px 0px rgb(0, 0, 0, 0.25), 8px 0px 15px 0px rgb(0, 0, 0, 0.25);
		padding-top: 36px;
		padding-bottom: 10px;
		margin-top: 28px;

		div:nth-child(2) {
			display: flex;
			justify-content: center;
			box-shadow: none;

			div:nth-child(2) {
				display: flex;
				justify-content: center;
				margin-top: 100px;
				box-shadow: none;
			}
		}
	}
`;

export const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;

	label {
		font-family: Montserrat;
		margin-bottom: 10px;
		margin-left: 15px;
		font-size: 15px;
		font-weight: 600;
		text-transform: uppercase;

		@media (max-width: 450px) {
			font-size: 10px;
		}
	}

	input {
		width: 260px;
		padding: 8px 15px;
		border-radius: 7px;
		border-style: none;
		outline: none;
		border: 1.2px solid #7dbef9;

		:focus {
			box-shadow: 3px 0px 25px 0px rgb(0, 0, 0, 0.2);
		}

		@media (max-width: 450px) {
			width: 180px;
			padding: 5px 10px;
		}

		@media (max-width: 320px) {
			width: 150px;
			padding: 5px 8px;
		}
	}
`;

export const EnterContainer = styled.div`
	margin-top: 100px;
	display: flex;
	justify-content: center;

	@media (max-width: 650px) {
		margin-top: 80px;
	}

	@media (max-width: 320px) {
		margin-top: 65px;
	}

	h1 {
		display: flex;
		justify-content: center;
	}

	button:nth-child(1) {
		width: 270px;
		padding-bottom: 8px;
		padding-top: 8px;
		border-radius: 8px;
		border-style: none;
		outline: none;
		font-family: Montserrat;
		background-color: #3b3d76;
		color: #fff;
		font-size: 17px;
		text-transform: uppercase;
		cursor: pointer;

		:hover {
			background-color: #6164c0;
			box-shadow: 2px 2px 25px 1px rgb(0, 0, 0, 0.24);
		}

		@media (max-width: 450px) {
			width: 200px;
			font-size: 15px;
		}

		@media (max-width: 320px) {
			width: 170px;
			font-size: 11px;
			padding-bottom: 4px;
			padding-top: 4px;
		}
	}

	h4 {
		margin-top: -60px;
		outline: none;
		font-family: Montserrat;
		font-size: 12px;
		cursor: pointer;

		:hover {
			text-decoration: underline;
		}

		@media (max-width: 450px) {
			font-size: 10px;
		}
	}
`;
