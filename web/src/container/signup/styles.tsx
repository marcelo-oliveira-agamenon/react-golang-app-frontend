import styled from "styled-components";

export const PrimaryContainer = styled.div`
	height: 100vh;
	width: 100%;
	background-color: #7dbef9;
	display: flex;
	justify-content: center;

	@media (max-height: 800px) {
		height: 100%;
	}
`;

export const SecondContainer = styled.div`
	width: 770px;
	height: 88vh;
	background-color: #fff;
	margin-top: 5vh;
	box-shadow: 5px 5px 10px 18px #6da3ff;
	animation: first 1s;

	@media (max-width: 800px) {
		width: 600px;
		margin-top: 40px;
		height: 600px;
	}

	@media (max-width: 620px) {
		width: 380px;
	}

	@media (max-width: 400px) {
		width: 280px;
		height: 550px;
	}

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
		background-color: #312f92;
		display: flex;
		align-self: flex-start;
		padding: 8px 0;

		h1 {
			color: #fff;
			font-family: Montserrat, sans-serif;
			margin-left: 2vw;
			font-size: 19px;
			letter-spacing: 2px;

			@media (max-width: 400px) {
				margin-left: 50px;
			}
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

			@media (max-width: 400px) {
				font-size: 25px;
			}
		}

		button {
			font-family: Montserrat, sans-serif;
			padding: 7px 15px;
			margin-left: 30px;
			height: 35px;
			align-self: center;
			background-color: #35c14f;
			border: none;
			color: #fff;
			letter-spacing: 1px;
			box-shadow: 1px 1px 5px 1px #a0a0a0, -1px -1px 5px 1px #a0a0a0;
			outline: none;
			cursor: pointer;

			:hover {
				box-shadow: 1px 1px 8px 1.5px #949494, -1px -1px 8px 1.5px #949494;
			}

			@media (max-width: 400px) {
				font-size: 8px;
				padding: 0px 8px;
				letter-spacing: 0;
			}
		}

		img {
			width: 100px;
			height: 100px;
			border-radius: 15px;
			@media (max-width: 400px) {
				width: 50px;
				height: 50px;
			}
		}
	}
`;

export const UContainer = styled.div`
	width: auto;
	display: flex;
	flex-direction: column;
	margin-top: 30px;

	label {
		font-family: Montserrat, sans-serif;
		margin-left: 100px;
		font-weight: 600;
		color: "#000";

		@media (max-width: 620px) {
			margin-left: 50px;
		}

		@media (max-width: 400px) {
			font-size: 13px;
		}
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

		@media (max-width: 800px) {
			width: 400px;
		}

		@media (max-width: 620px) {
			width: 280px;
			margin-left: 50px;
		}

		@media (max-width: 400px) {
			width: 180px;
		}
	}
`;

export const ContainerButton = styled.div`
	width: auto;
	display: flex;
	flex-direction: row;
	margin-top: 80px;
	justify-content: center;
	margin-left: 28px;

	@media (max-width: 800px) {
		margin-top: 50px;
	}

	@media (max-width: 400px) {
		flex-direction: column;
		align-items: center;
	}

	button:nth-child(1) {
		font-family: Montserrat, sans-serif;
		width: 230px;
		padding: 10px 0px;
		margin-right: 90px;
		text-transform: uppercase;
		font-weight: bold;
		background-color: #35c14f;
		border: none;
		color: #fff;
		letter-spacing: 1px;
		box-shadow: 1px 1px 5px 1px #a0a0a0, -1px -1px 5px 1px #a0a0a0;
		outline: none;
		cursor: pointer;

		@media (max-width: 800px) {
			width: 180px;
			margin-right: 30px;
		}

		:hover {
			box-shadow: 1px 1px 8px 1.5px #949494, -1px -1px 8px 1.5px #949494;
		}

		@media (max-width: 400px) {
			width: 130px;
			margin-bottom: 15px;
			font-size: 8px;
			padding: 6px 0px;
		}

		h1 {
			display: flex;
			justify-content: center;
		}
	}

	button:nth-child(2) {
		font-family: Montserrat, sans-serif;
		width: 230px;
		padding: 10px 0px;
		margin-right: 35px;
		text-transform: uppercase;
		font-weight: bold;
		background-color: #dc181e;
		border: none;
		color: #fff;
		letter-spacing: 1px;
		box-shadow: 1px 1px 5px 1px #a0a0a0, -1px -1px 5px 1px #a0a0a0;
		outline: none;
		cursor: pointer;

		@media (max-width: 800px) {
			width: 180px;
			margin-right: 30px;
		}

		@media (max-width: 400px) {
			width: 130px;
			margin-bottom: 15px;
			font-size: 8px;
			padding: 6px 0px;
		}

		:hover {
			box-shadow: 1px 1px 8px 1.5px #949494, -1px -1px 8px 1.5px #949494;
		}
	}
`;
