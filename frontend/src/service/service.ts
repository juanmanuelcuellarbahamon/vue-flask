import { useAxios } from '../composables/useAxios';
import type { Ejercicio3, User } from '../interfaces/randomuser.interfaces';
import type { Ejercicio4 } from '../interfaces/swapi.interfaces';

export class ApiService {

  public async ejercicio1(): Promise<User[] | null> {

    const { $get } = useAxios()

    const url = '/ejercicio1'

    try {
      const response = await $get<User[]>(url);
      return response;
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
      throw error;
    }
  }

  public async ejercicio2(age: number): Promise<User | null> {

    const { $get } = useAxios()

    const url = '/ejercicio2?age='+ age

    try {
      const response = await $get<User>(url);
      return response;
    } catch (error) {
      console.error(`Error creating resource at ${url}:`, error);
      throw error; 
    }
  }

  public async ejercicio3(): Promise<Ejercicio3 | null> {

    const { $get } = useAxios()

    const url = '/ejercicio3'

    try {
      const response = await $get<Ejercicio3>(url);
      return response;
    } catch (error) {
      console.error(`Error creating resource at ${url}:`, error);
      throw error; 
    }
  }

  public async ejercicio4<T>(passanger_count: number): Promise<Ejercicio4 | null> {

    const { $get } = useAxios()

    const url = '/ejercicio4?passenger_count='+passanger_count

    try {
      const response = await $get<Ejercicio4>(url);
      return response;
    } catch (error) {
      console.error(`Error creating resource at ${url}:`, error);
      throw error; 
    }
  }

  public async ejercicio5<T>(terrain: string): Promise<string | null> {

    const { $get } = useAxios()

    const url = '/ejercicio5?terrain='+terrain

    try {
      const response = await $get<string>(url);
      return response;
    } catch (error) {
      console.error(`Error creating resource at ${url}:`, error);
      throw error; 
    }
  }

}