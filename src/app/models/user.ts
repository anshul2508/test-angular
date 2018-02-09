export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: string;
    city: string;
    state: string;
    postcode: string;
  };
  email: string;
  login: {
    username: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    md5: string;
  };
  dob: string;
  registered: string;
  phone: string;
  cell: string;
  id: {
    name: string;
    value: number;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}
