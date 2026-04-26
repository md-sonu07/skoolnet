/**
 * Formats the user role for display in profile pages.
 * Returns strings like "Manage", "Partner", "School-Student", "Coaching-Teacher", etc.
 */
export const formatUserRole = (user) => {
  if (!user) return 'User';

  if (user.is_superuser) return 'Manage';
  
  if (user.partner) return 'Partner';

  const institution = user.institution;
  if (institution && institution.type && institution.role) {
    const type = institution.type.charAt(0) + institution.type.slice(1).toLowerCase();
    const role = institution.role.charAt(0) + institution.role.slice(1).toLowerCase();
    return `${type}-${role}`;
  }

  return 'User';
};
