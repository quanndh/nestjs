import { Injectable, CanActivate, ExecutionContext, Scope } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';

@Injectable({
  scope: Scope.REQUEST,
})
export class PermissionGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {
    //
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    if (!request?.user) return false;
    if (request.user.isSuperAdmin) {
      return true;
    }

    return true;
  }
}
