import { SetMetadata } from '@nestjs/common';
import { PermissionType } from 'src/helpers/permissions';

export const PERMISSIONS_METADATA_KEY = '__permissions__';

/**
 *
 * @param permissions
 * @returns
 */
export const Roles = (...permissions: PermissionType[]) => SetMetadata(PERMISSIONS_METADATA_KEY, permissions);
