import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { managerAuthAPI } from '../../api/auth/manager';
import { setCredentials, logout as logoutAction, setUser, selectManagerAuth } from '../../redux/slice/managerAuthSlice';
import { QUERY_KEYS } from '../../query/queryKeys';
import { getErrorMessage } from '../../utils/errorHelpers';
import toast from 'react-hot-toast';

export const useManagerAuth = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { token, user: reduxUser, isAuthenticated } = useSelector(selectManagerAuth);

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
    onError: (error) => {
      toast.error(getErrorMessage(error, 'Login failed'));
    },
  });

  // Register Mutation
  const registerMutation = useMutation({
    mutationFn: (userData) => managerAuthAPI.register(userData),
    onSuccess: (response) => {
      const data = response.data;
      // Automatically log in the user if tokens are provided
      if (data.access && data.refresh) {
        dispatch(setCredentials(data));
        queryClient.setQueryData([QUERY_KEYS.ME], data.user);
      } else if (data.user) {
        dispatch(setUser(data.user));
        queryClient.setQueryData([QUERY_KEYS.ME], data.user);
      }
    },
    onError: (error) => {
      toast.error(getErrorMessage(error, 'Registration failed'));
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

  // Update Profile Mutation
  const updateProfileMutation = useMutation({
    mutationFn: (data) => managerAuthAPI.updateProfile(data),
    onSuccess: (response) => {
      const data = response.data;
      dispatch(setUser(data));
      queryClient.setQueryData([QUERY_KEYS.ME], data);
      toast.success('Profile updated successfully');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error, 'Failed to update profile'));
    },
  });

  return {
    user: meQuery.data || reduxUser,
    isLoadingProfile: meQuery.isLoading,
    isAuthenticated,
    login: loginMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,
    loginError: loginMutation.error,
    register: registerMutation.mutateAsync,
    isRegistering: registerMutation.isPending,
    registerError: registerMutation.error,
    updateProfile: updateProfileMutation.mutateAsync,
    isUpdatingProfile: updateProfileMutation.isPending,
    logout: logoutMutation.mutateAsync,
    isLoggingOut: logoutMutation.isPending,
  };
};
