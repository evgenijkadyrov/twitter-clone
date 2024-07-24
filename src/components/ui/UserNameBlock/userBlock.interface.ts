import { ReactNode } from 'react';

export interface UserNameBlockProps {
	name?: string | null | undefined;
	nickname?: string | null | undefined;
	avatarImage?: string | null | undefined;
	id?: string | null | undefined;
	clearSearch?: () => void;
	children?: ReactNode;
}
