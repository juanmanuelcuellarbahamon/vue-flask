export interface User {
  cell: string;
  dob: Dob;
  email: string;
  gender: string;
  id: Id;
  location: Location;
  login: Login;
  name: Name;
  nat: string;
  phone: string;
  picture: Picture;
  registered: Registered;
}

export interface Dob {
  age: number;
  date: string;
}

export interface Id {
  name: string | null;
  value: string | null;
}

export interface Location {
  city: string;
  coordinates: Coordinates;
  country: string;
  postcode: number | string;
  state: string;
  street: Street;
  timezone: Timezone;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Street {
  name: string;
  number: number;
}

export interface Timezone {
  description: string;
  offset: string;
}

export interface Login {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}

export interface Name {
  first: string;
  last: string;
  title: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Registered {
  age: number;
  date: string;
}

export interface Ejercicio3 {
  full_names: string[]
  most_common_letter: string
}
