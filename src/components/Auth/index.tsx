import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

import { Paths } from '@/constants/routerPaths';
import { userSelector } from '@/store/selectors';

interface IProps {
	children?: ReactNode;
}

export const CheckAuth = ({ children }: IProps) => {
	const { token, id } = useSelector(userSelector);
	const navigate = useNavigate();
	useEffect(() => {
		if (token) navigate(`${Paths.PROFILE}/${id}`, { replace: true });
		if (!token) navigate(Paths.HOME);
	}, [token, id, navigate]);

	return children || <Outlet />;
};
