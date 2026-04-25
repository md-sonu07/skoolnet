import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { managerAuthAPI } from '../../api/auth/manager';
import { setCredentials, logout as logoutAction, setUser, selectManagerAuth } from '../../redux/slice/managerAuthSlice';
import { QUERY_KEYS } from '../../query/queryKeys';

export const useManagerAuth = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { token, user: reduxUser } = useSelector(selectManagerAuth);

  // Get current user profile
  const meQuery = useQuery({
    queryKey: [QUERY_KEYS.ME],
    queryFn: async () => {
      const response = await managerAuthAPI.getProfile();
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
    mutationFn: (credentials) => managerAuthAPI.login(credentials),
    onSuccess: (response) => {
      const data = response.data;
      dispatch(setCredentials(data));
      // Prefill the 'me' query cache with user data if available in login response
      if (data.user) {
        queryClient.setQueryData([QUERY_KEYS.ME], data.user);
      }
    },
  });

  // Register Mutation
  const registerMutation = useMutation({
    mutationFn: (userData) => managerAuthAPI.register(userData),
    onSuccess: (response) => {
      const data = response.data;
      // Depending on backend, might need to login automatically or just store user
      if (data.user) {
        dispatch(setUser(data.user));
        queryClient.setQueryData([QUERY_KEYS.ME], data.user);
      }
    },
  });

  // Logout Mutation
  const logoutMutation = useMutation({
    mutationFn: () => managerAuthAPI.logout(),
    onSettled: () => {
      dispatch(logoutAction());
      queryClient.clear(); // Wipe entire cache on logout for security
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
