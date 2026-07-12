import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import api from '@/lib/axios';
import { useAuthStore } from '@/store/authStore';
import { LoginInput, StudentRegisterInput, TeacherRegisterInput, AuthResponse } from '@/types/auth';

// Login hook — works for student + teacher
export function useLogin() {
  const router = useRouter();
  const setAuth = useAuthStore((s) => s.setAuth);

  return useMutation({
    mutationFn: async (data: LoginInput) => {
      const response = await api.post<{ success: boolean; data: AuthResponse }>(
        '/auth/login',
        data,
      );
      return response.data.data;
    },

    onSuccess: (data) => {
      // Save to zustand store + localStorage
      setAuth(data.token, data.user);
      toast.success(`Welcome back, ${data.user.name}!`);
      router.push(data.user.redirectTo);
    },

    onError: (error: any) => {
      const message = error.response?.data?.message || 'Login failed. Please try again.';
      toast.error(message);
    },
  });
}

// Student register hook
export function useStudentRegister() {
  const router = useRouter();
  const setAuth = useAuthStore((s) => s.setAuth);

  return useMutation({
    mutationFn: async (data: StudentRegisterInput) => {
      const response = await api.post<{ success: boolean; data: AuthResponse }>(
        '/auth/student/register',
        data,
      );
      return response.data.data;
    },

    onSuccess: (data) => {
      setAuth(data.token, data.user);
      toast.success('Account created! Welcome to Doubtr 🎉');
      router.push('/dashboard/student');
    },

    onError: (error: any) => {
      const message = error.response?.data?.message || 'Registration failed. Please try again.';
      toast.error(message);
    },
  });
}

// Teacher register hook
export function useTeacherRegister() {
  const router = useRouter();
  const setAuth = useAuthStore((s) => s.setAuth);

  return useMutation({
    mutationFn: async (data: TeacherRegisterInput) => {
      const response = await api.post<{ success: boolean; data: AuthResponse }>(
        '/auth/teacher/register',
        data,
      );
      return response.data.data;
    },

    onSuccess: (data) => {
      setAuth(data.token, data.user);
      toast.success('Application submitted! Welcome to Doubtr 🎉');
      router.push('/dashboard/teacher');
    },

    onError: (error: any) => {
      const message = error.response?.data?.message || 'Registration failed. Please try again.';
      toast.error(message);
    },
  });
}

// Logout hook
export function useLogout() {
  const router = useRouter();
  const logout = useAuthStore((s) => s.logout);

  return () => {
    logout();
    toast.success('Logged out successfully');
    router.push('/sign-in');
  };
}

// Get current user from store
export function useCurrentUser() {
  const user = useAuthStore((s) => s.user);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  return { user, isAuthenticated };
}
