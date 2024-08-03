import { useState } from 'react';
import Trash from '@assets/icons/Bin bounce.svg';
import More from '@assets/icons/more.svg';
import Pensil from '@assets/icons/Pencil.svg';
import { SettingsBlockProps } from '@components/Settings/settings.interface';
import { ButtonIcon } from '@components/ui/ButtonRegistration/buttonRegistration.styled';

import { ModalContent, SettingsButton, SettingsContainer } from './settings.module';

export const SettingsBlock = ({
	handleDeleteTweet,
	setShowModalEdit,
	showModalEdit,
}: SettingsBlockProps) => {
	const [showModal, setShowModal] = useState(false);

	const handleEditTweet = () => {
		setShowModal(false);
		setShowModalEdit(!showModalEdit);
	};

	const handleDelete = () => {
		handleDeleteTweet();
		setShowModal(false);
	};

	return (
		<SettingsContainer>
			<SettingsButton onClick={() => setShowModal(!showModal)}>
				<ButtonIcon src={More} alt="settings" />
			</SettingsButton>

			{showModal && (
				<ModalContent $show={showModal}>
					<ButtonIcon src={Trash} alt="delete" onClick={handleDelete} />
					<ButtonIcon src={Pensil} alt="edit" onClick={handleEditTweet} />
				</ModalContent>
			)}
		</SettingsContainer>
	);
};
