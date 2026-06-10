import { JWTPayload } from "./jwt";

export type Role = "USER" | "ADMIN" | "MODERATOR";

export const ROLE_HIERARCHY: Record<Role, number> = {
  ADMIN: 3,
  MODERATOR: 2,
  USER: 1,
};

export function hasPermission(user: JWTPayload, requiredRole: Role): boolean {
  const userLevel = ROLE_HIERARCHY[user.role as Role] || 0;
  const requiredLevel = ROLE_HIERARCHY[requiredRole];

  if (requiredRole === "ADMIN" && !user.mfaVerified) {
    return false;
  }

  return userLevel >= requiredLevel;
}
