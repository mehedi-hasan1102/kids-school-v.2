'use client';

import { useSyncExternalStore } from 'react';
import {
  AUTH_STORAGE_KEY,
  getDashboardPath,
  parseRole,
  type SessionUser,
  type UserRole,
} from '@/app/lib/auth';

const COOKIE_MAX_AGE = 60 * 60 * 24;
const AUTH_EVENT = 'kids-auth-change';
let cachedRaw: string | null = null;
let cachedUser: SessionUser | null = null;

function emitAuthChange() {
  if (typeof window === 'undefined') {
    return;
  }

  window.dispatchEvent(new Event(AUTH_EVENT));
}

export function setAuthSession(user: SessionUser): void {
  if (typeof window === 'undefined') {
    return;
  }

  const serialized = JSON.stringify(user);
  localStorage.setItem(AUTH_STORAGE_KEY, serialized);
  document.cookie = `school_role=${user.role}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
  cachedRaw = serialized;
  cachedUser = user;
  emitAuthChange();
}

export function clearAuthSession(): void {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.removeItem(AUTH_STORAGE_KEY);
  document.cookie = 'school_role=; path=/; max-age=0; samesite=lax';
  cachedRaw = null;
  cachedUser = null;
  emitAuthChange();
}

export function getStoredUser(): SessionUser | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const raw = localStorage.getItem(AUTH_STORAGE_KEY);

  if (!raw) {
    cachedRaw = null;
    cachedUser = null;
    return null;
  }

  if (raw === cachedRaw) {
    return cachedUser;
  }

  try {
    const parsed = JSON.parse(raw) as SessionUser;
    if (!parsed || !parseRole(parsed.role)) {
      cachedRaw = raw;
      cachedUser = null;
      return null;
    }

    cachedRaw = raw;
    cachedUser = parsed;
    return cachedUser;
  } catch {
    cachedRaw = raw;
    cachedUser = null;
    return null;
  }
}

function subscribe(callback: () => void): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  window.addEventListener('storage', callback);
  window.addEventListener(AUTH_EVENT, callback);

  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(AUTH_EVENT, callback);
  };
}

function getServerSnapshot(): SessionUser | null {
  return null;
}

export function useAuthUser(): SessionUser | null {
  return useSyncExternalStore(subscribe, getStoredUser, getServerSnapshot);
}

export function getRoleDashboard(role: UserRole): string {
  return getDashboardPath(role);
}
