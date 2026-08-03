import bcrypt from "bcryptjs";

const BCRYPT_PREFIX = /^\$2[aby]\$/;

export function isBcryptHash(value: string): boolean {
  return BCRYPT_PREFIX.test(value);
}

export function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, 12);
}

/**
 * Verifies a password against a stored value that may still be a legacy
 * plaintext password (pre-hashing migration). Returns whether it matched,
 * and whether the caller should re-save an upgraded hash.
 */
export async function verifyPassword(
  plain: string,
  stored: string,
): Promise<{ matches: boolean; needsRehash: boolean }> {
  if (isBcryptHash(stored)) {
    const matches = await bcrypt.compare(plain, stored);
    return { matches, needsRehash: false };
  }
  // Legacy plaintext row: compare directly, flag for upgrade on success.
  const matches = plain === stored;
  return { matches, needsRehash: matches };
}
