import { ref } from 'vue';
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import apiClient from '../config/axios';

export function useAxios() {
  const data = ref<any>(null);
  const error = ref<string | null>(null);
  const loading = ref<boolean>(false);

  const $get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T | null> => {
    try {
      loading.value = true;
      error.value = null;
      const response: AxiosResponse<T> = await apiClient.get(url, config);
      data.value = response.data;
      return response.data;
    } catch (err) {
      const axiosError = err as AxiosError;
      error.value = axiosError.message || 'An error occurred';
      return null;
    } finally {
      loading.value = false;
    }
  };

  const $post = async <T>(
    url: string,
    payload: any,
    config?: AxiosRequestConfig
  ): Promise<T | null> => {
    try {
      loading.value = true;
      error.value = null;
      const response: AxiosResponse<T> = await apiClient.post(url, payload, config);
      data.value = response.data;
      return response.data;
    } catch (err) {
      const axiosError = err as AxiosError;
      error.value = axiosError.message || 'An error occurred';
      return null;
    } finally {
      loading.value = false;
    }
  };

  const $put = async <T>(
    url: string,
    payload: any,
    config?: AxiosRequestConfig
  ): Promise<T | null> => {
    try {
      loading.value = true;
      error.value = null;
      const response: AxiosResponse<T> = await apiClient.put(url, payload, config);
      data.value = response.data;
      return response.data;
    } catch (err) {
      const axiosError = err as AxiosError;
      error.value = axiosError.message || 'An error occurred';
      return null;
    } finally {
      loading.value = false;
    }
  };

  const $patch = async <T>(
    url: string,
    payload: any,
    config?: AxiosRequestConfig
  ): Promise<T | null> => {
    try {
      loading.value = true;
      error.value = null;
      const response: AxiosResponse<T> = await apiClient.patch(url, payload, config);
      data.value = response.data;
      return response.data;
    } catch (err) {
      const axiosError = err as AxiosError;
      error.value = axiosError.message || 'An error occurred';
      return null;
    } finally {
      loading.value = false;
    }
  };

  const $delete = async <T>(url: string, config?: AxiosRequestConfig): Promise<T | null> => {
    try {
      loading.value = true;
      error.value = null;
      const response: AxiosResponse<T> = await apiClient.delete(url, config);
      data.value = response.data;
      return response.data;
    } catch (err) {
      const axiosError = err as AxiosError;
      error.value = axiosError.message || 'An error occurred';
      return null;
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    error,
    loading,
    $get,
    $post,
    $put,
    $patch,
    $delete,
  };
}