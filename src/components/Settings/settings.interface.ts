export interface SettingsBlockProps {
	handleDeleteTweet: () => void;
	handleEdit: () => void;
	newTweetContent: string;
	setShowModalEdit: (showModalEdit: boolean) => void;
	showModalEdit: boolean;
}
