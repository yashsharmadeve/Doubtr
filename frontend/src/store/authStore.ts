import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthUser } from '@/types/auth';

interface AuthState {
  token: string | null;
  user: AuthUser | null;
  isAuthenticated: boolean;

  // Actions
  setAuth: (token: string, user: AuthUser) => void;
  logout: () => void;
  updateUser: (user: Partial<AuthUser>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      isAuthenticated: false,

      setAuth: (token, user) => {
        const maxAge = 7 * 24 * 60 * 60; // 7 days
        localStorage.setItem('token', token);
        document.cookie = `token=${token}; path=/; max-age=${maxAge}`;
        document.cookie = `role=${user.role}; path=/; max-age=${maxAge}`;
        set({ token, user, isAuthenticated: true });
      },

      logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        document.cookie = 'token=; path=/; max-age=0';
        document.cookie = 'role=; path=/; max-age=0';
        set({ token: null, user: null, isAuthenticated: false });
      },

      updateUser: (updatedFields) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updatedFields } : null,
        })),
    }),
    {
      name: 'doubtr-auth', // key in localStorage
      partialize: (state) => ({
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
