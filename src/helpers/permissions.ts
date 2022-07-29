export const permissions = [
  {
    label: 'Create role',
    key: 'CREATE_ROLE',
    group: 'role',
  },
  {
    label: 'Update Role',
    key: 'UPDATE_ROLE',
    group: 'role',
  },
  {
    label: 'Delete role',
    key: 'DELETE_ROLE',
    group: 'role',
  },
  {
    label: 'View list role',
    key: 'LIST_ROLE',
    group: 'role',
  },
  {
    label: 'View list user',
    key: 'LIST_USER',
    group: 'user',
  },
  {
    label: 'Create user',
    key: 'CREATE_USER',
    group: 'user',
  },
  {
    label: 'Update user',
    key: 'UPDATE_USER',
    group: 'user',
  },
  {
    label: 'Create Media',
    key: 'CREATE_MEDIA',
    group: 'media',
  },
  {
    label: 'Read Media',
    key: 'READ_MEDIA',
    group: 'media',
  },
  {
    label: 'Update Media',
    key: 'UPDATE_MEDIA',
    group: 'media',
  },
  {
    label: 'Delete Media',
    key: 'DELETE_MEDIA',
    group: 'media',
  },
] as const;

export type PermissionType = typeof permissions[number]['key'];

export const permissionKeys = permissions.map((v) => v.key);
