import { useAxios } from '../composables/useAxios';

export class ApiService {

  public async ejercicio1<T>(): Promise<T | null> {

    const { $get } = useAxios()

    const url = ''

    try {
      const response = await $get<T>(url);
      return response;
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
      throw error;
    }
  }

  public async ejercicio2<T>(): Promise<T | null> {

    const { $get } = useAxios()

    const url = ''

    try {
      const response = await $get<T>(url);
      return response;
    } catch (error) {
      console.error(`Error creating resource at ${url}:`, error);
      throw error; 
    }
  }

  public async ejercicio3<T>(): Promise<T | null> {

    const { $get } = useAxios()

    const url = ''

    try {
      const response = await $get<T>(url);
      return response;
    } catch (error) {
      console.error(`Error creating resource at ${url}:`, error);
      throw error; 
    }
  }

  public async ejercicio4<T>(): Promise<T | null> {

    const { $get } = useAxios()

    const url = ''

    try {
      const response = await $get<T>(url);
      return response;
    } catch (error) {
      console.error(`Error creating resource at ${url}:`, error);
      throw error; 
    }
  }

  public async ejercicio5<T>(): Promise<T | null> {

    const { $get } = useAxios()

    const url = ''

    try {
      const response = await $get<T>(url);
      return response;
    } catch (error) {
      console.error(`Error creating resource at ${url}:`, error);
      throw error; 
    }
  }

}