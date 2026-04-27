import { useQuery } from '@tanstack/react-query';
import api from '../../api/axios';
import { QUERY_KEYS } from '../../query/queryKeys';

/**
 * Hook to fetch all registered partner organizations.
 * Primarily used for public-facing dropdowns (e.g., Login/Signup).
 */
export const usePartnersList = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.PARTNERS_LIST],
    queryFn: async () => {
      const response = await api.get('/accounts/partners');
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes cache
  });
};
