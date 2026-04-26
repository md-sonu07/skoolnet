import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import loginAPI from '../../api/auth/login';
import registerAPI from '../../api/auth/register';
import logoutAPI from '../../api/auth/logout';
import { getProfile } from '../../api/auth/profile';
import { setCredentials, logout as logoutAction, setUser, selectPartnerAuth } from '../../redux/slice/partnerAuthSlice';
import { QUERY_KEYS } from '../../query/queryKeys';

export const usePartnerAuth = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { token, user: reduxUser } = useSelector(selectPartnerAuth);

  // Get current user profile
  const meQuery = useQuery({
    queryKey: [QUERY_KEYS.ME, 'partner'],
    queryFn: async () => {
      const response = await getProfile();
      return response.data;
    },
    enabled: !!token,
  });

  // Sync session state with Redux when profile is fetched
  useEffect(() => {
    if (meQuery.data && JSON.stringify(meQuery.data) !== JSON.stringify(reduxUser)) {
      dispatch(setUser(meQuery.data));
    }
  }, [meQuery.data, reduxUser, dispatch]);

  // Login Mutation
  const loginMutation = useMutation({
    mutationFn: (credentials) => loginAPI(credentials),
    onSuccess: (response) => {
      const data = response.data;
      dispatch(setCredentials(data));
      if (data.user) {
        queryClient.setQueryData([QUERY_KEYS.ME, 'partner'], data.user);
      }
    },
  });

  // Register Mutation
  const registerMutation = useMutation({
    mutationFn: (userData) => registerAPI(userData),
    onSuccess: (response) => {
      const data = response.data;
      dispatch(setCredentials(data));
      if (data.user) {
        queryClient.setQueryData([QUERY_KEYS.ME, 'partner'], data.user);
      }
    },
  });

  // Logout Mutation
  const logoutMutation = useMutation({
    mutationFn: () => logoutAPI(),
    onSettled: () => {
      dispatch(logoutAction());
      queryClient.clear();
    },
  });

  return {
    user: meQuery.data || reduxUser,
    isLoadingProfile: meQuery.isLoading,
    login: loginMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,
    loginError: loginMutation.error,
    register: registerMutation.mutateAsync,
    isRegistering: registerMutation.isPending,
    registerError: registerMutation.error,
    logout: logoutMutation.mutateAsync,
    isLoggingOut: logoutMutation.isPending,
  };
};
