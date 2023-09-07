import { TUser } from "../zod.schemas";

class UserDto {
  name;
  surname;
  email;
  role;

  constructor(props: TUser) {
    const { name, surname, email, role } = props;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.role = role;
  }
}

export { UserDto };
