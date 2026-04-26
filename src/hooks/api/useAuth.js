import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import loginAPI from '../../api/auth/login';
import registerAPI, { registerInstitution as registerInstitutionAPI } from '../../api/auth/register';
import signupAPI from '../../api/auth/signup';
import logoutAPI from '../../api/auth/logout';
import { getProfile } from '../../api/auth/profile';
import { setCredentials, logout as logoutAction, setUser, selectAuth } from '../../redux/slice/authSlice';
import { QUERY_KEYS } from '../../query/queryKeys';

export const useAuth = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { token, user: reduxUser } = useSelector(selectAuth);

  // Get current user profile
  const meQuery = useQuery({
    queryKey: [QUERY_KEYS.ME],
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
        queryClient.setQueryData([QUERY_KEYS.ME], data.user);
      }
    },
  });

  // Register Mutation
  const registerMutation = useMutation({
    mutationFn: (userData) => registerAPI(userData),
    onSuccess: (response) => {
      const data = response.data;
      if (data.user) {
        dispatch(setUser(data.user));
        queryClient.setQueryData([QUERY_KEYS.ME], data.user);
      }
    },
  });

  // Register Institution Mutation
  const instRegisterMutation = useMutation({
    mutationFn: (userData) => registerInstitutionAPI(userData),
    onSuccess: (response) => {
      const data = response.data;
      if (data.access) {
        dispatch(setCredentials(data));
        queryClient.setQueryData([QUERY_KEYS.ME], data.user);
      }
    },
  });

  // Signup Mutation
  const signupMutation = useMutation({
    mutationFn: (userData) => signupAPI(userData),
    onSuccess: (response) => {
      const data = response.data;
      // CRITICAL FIX: Store tokens properly!
      if (data.access) {
        dispatch(setCredentials(data));
        queryClient.setQueryData([QUERY_KEYS.ME], data.user);
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

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
    } catch (error) {
      // Ignore errors like 401 Unauthorized to ensure local cleanup still succeeds without unhandled promise rejections
      console.warn('Logout API error, forcing local session clear:', error.message);
    }
  };

  return {
    user: meQuery.data || reduxUser,
    isAuthenticated: !!token,
    isLoadingProfile: meQuery.isLoading,
    login: loginMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,
    loginError: loginMutation.error,
    register: registerMutation.mutateAsync,
    isRegistering: registerMutation.isPending,
    registerError: registerMutation.error,
    registerInstitution: instRegisterMutation.mutateAsync,
    isRegisteringInstitution: instRegisterMutation.isPending,
    registerInstitutionError: instRegisterMutation.error,
    signup: signupMutation.mutateAsync,
    isSigningUp: signupMutation.isPending,
    signupError: signupMutation.error,
    logout: handleLogout,
    isLoggingOut: logoutMutation.isPending,
  };
};
