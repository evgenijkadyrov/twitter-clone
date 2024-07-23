import { ReactNode, useEffect, useState } from 'react';
import { LoadingSpinner } from '@components/ui/LoadingSpinner';

import { IMAGE_LOADED, IMAGE_LOADED_PERCENT } from '@/constants/textConstant';

interface ShowNotificationUploadImage {
	renderProgressNotification: () => ReactNode;
}
export const useShowNotificationUploadImage = (
	progress: number | null,
	setProgress: (progress: null | number) => void
): ShowNotificationUploadImage => {
	const [showProgressNotification, setShowProgressNotification] = useState<boolean>(false);
	useEffect(() => {
		setShowProgressNotification(true);

		const timeoutId = setTimeout(() => {
			setShowProgressNotification(false);
			setProgress(null);
		}, 2000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [progress]);
	const renderProgressNotification = () => {
		if (!showProgressNotification) {
			return null;
		}

		if (progress === IMAGE_LOADED_PERCENT) {
			return IMAGE_LOADED;
		}

		if (progress !== null) {
			return (
				<>
					<LoadingSpinner />
					{progress.toFixed(0)} %
				</>
			);
		}

		return null;
	};
	return { renderProgressNotification };
};
