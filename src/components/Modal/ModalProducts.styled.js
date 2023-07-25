import styled from '@emotion/styled';
import { Button, Box } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';


export const ButtonModal = styled(Button)`
	padding: 0;
	color: #CBD0D8;

	&:hover, :focus {
		color: #D3AC2B;
	}
`;

export const ModalBox = styled(Box)`
		overflow: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
		padding: 40px;
		background-color: #333D51;
		color: #CBD0D8;

	@media screen and (min-width: 768px) {
		top: 50%;
		min-width: 400px;
	}

	@media screen and (min-width: 1024px) {
		min-width: 800px;
	}
`;

export const ModalBoxTitle = styled(Box)`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 1024px) {
		display: flex;
		flex-direction: row;
	}
`;

export const BoxTitles = styled(Box)`
		display: flex;
		flex-direction: column;
		padding-top: 20px;

		@media screen and (min-width: 1024px) {
			padding: 0 30px;
		}
`;

export const BoxPrice = styled(Box)`
	display: flex;
	margin: 20px 0;
	align-items: center;
`;

export const Price = styled(Box)`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #D3AC2B;
	border-radius: 20px;
	margin-right: 10px;
`;

export const AddedToFavoriteIcon = styled(FavoriteIcon)`
	color: #D3AC2B;
`;

export const BoxWishlist = styled(Box)`
	display: flex;
`;

export const MultipleItemButton = styled(Button)`

	&:active {
		color: #D3AC2B;
		}
`;

export const ReduceItemButton = styled(Button)`
	&:active {
			color: #D3AC2B;
		}
`;