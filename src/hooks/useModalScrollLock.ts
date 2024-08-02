import { useEffect } from 'react';

export const useModalScrollLock = (isOpenModal: boolean) => {
	useEffect(() => {
		if (isOpenModal) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpenModal]);
};
