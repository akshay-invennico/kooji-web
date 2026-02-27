/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import apiClient from "../apiClient";
import API from "../api";
import { saveTokens, clearTokens } from "../tokenStorage";
import type {
  ApiResponse,
  AuthResponse,
  LoginPayload,
  RegisterPayload,
  User,
} from "../types";


const useLogin = () => {
  const [data, setData] = useState<AuthResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (payload: LoginPayload) => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiClient.post<ApiResponse<AuthResponse>>(
        API.auth.login,
        payload
      );

      const { accessToken, refreshToken } = response.data.data;

      if (accessToken && refreshToken) {
        saveTokens(accessToken, refreshToken);
      }

      setData(response.data.data);
      return response.data.data;
    } catch (err: any) {
      setError(
        err?.response?.data?.message || "Login failed"
      );
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, login };
};

const useRegister = () => {
  const [data, setData] = useState<AuthResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (payload: RegisterPayload) => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiClient.post<ApiResponse<AuthResponse>>(
        API.auth.register,
        payload
      );

      const { accessToken, refreshToken } = response.data.data;

      if (accessToken && refreshToken) {
        saveTokens(accessToken, refreshToken);
      }

      setData(response.data.data);
      return response.data.data;
    } catch (err: any) {
      setError(
        err?.response?.data?.message || "Registration failed"
      );
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, register };
};

const useLogout = () => {
  const [data, setData] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const logout = async () => {
    try {
      setLoading(true);
      setError(null);

      await apiClient.post(API.auth.logout);

      clearTokens();
      setData(true);

      return true;
    } catch (err: any) {
      setError(
        err?.response?.data?.message || "Logout failed"
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, logout };
};

const useUser = () => {
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getUser = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiClient.get<ApiResponse<User>>(
        API.auth.me
      );

      setData(response.data.data);
    } catch (err: any) {
      setError(
        err?.response?.data?.message || "Failed to fetch user"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return { data, loading, error, refetch: getUser };
};

export default {
  useLogin,
  useRegister,
  useLogout,
  useUser,
};