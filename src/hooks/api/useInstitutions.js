import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import institutionsAPI from '../../api/institutions';
import { QUERY_KEYS } from '../../query/queryKeys';

export const useInstitutions = () => {
  const queryClient = useQueryClient();

  // --- Institutions ---
  const useInstitutionsList = () => useQuery({
    queryKey: [QUERY_KEYS.INSTITUTIONS],
    queryFn: () => institutionsAPI.getInstitutions().then(res => res.data),
  });

  const useInstitutionDetail = (id) => useQuery({
    queryKey: [QUERY_KEYS.INSTITUTION_DETAIL, id],
    queryFn: () => institutionsAPI.getInstitution(id).then(res => res.data),
    enabled: !!id,
  });

  const createInstitution = useMutation({
    mutationFn: (data) => institutionsAPI.createInstitution(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.INSTITUTIONS] });
    },
  });

  const updateInstitution = useMutation({
    mutationFn: ({ id, data }) => institutionsAPI.updateInstitution(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.INSTITUTIONS] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.INSTITUTION_DETAIL, id] });
    },
  });

  // --- Memberships ---
  const useMemberships = (institutionId) => useQuery({
    queryKey: [QUERY_KEYS.ENROLLMENTS, institutionId, 'memberships'], // Reusing enrollment key logic or keeping separate
    queryFn: () => institutionsAPI.getMemberships(institutionId).then(res => res.data),
    enabled: !!institutionId,
  });

  return {
    useInstitutionsList,
    useInstitutionDetail,
    createInstitution,
    updateInstitution,
    useMemberships,
  };
};
