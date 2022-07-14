import AppDataSource from "../config/database";
import { User } from "../entity";
import { generateToken } from "../utils/jwt.utils";

export interface IUserPayload {
  name: string;
  mobile: string;
  mobileIsd: string;
  email: string;
  password: string;
  roleId: number;
}

export interface ILoginResponse {
  data: any;
  token: string;
}
export const getUsers = async (): Promise<Array<User>> => {
  const userRepository = AppDataSource.getRepository(User);
  return userRepository.find();
};

export const createUser = async (payload: IUserPayload): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = new User();
  return userRepository.save({
    ...user,
    ...payload,
  });
};

export const getUser = async (id: number): Promise<User | null> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id: id } });
  if (!user) return null;
  return user;
};

export const login = async (
  email: string,
  password: string
): Promise<ILoginResponse | null> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.businesses", "businesses")
    .where("user.email = :email AND user.password=:password", {
      email: email,
      password: password,
    })
    .getMany();

  if (!user || user.length === 0) return null;

  const tokenPayload = {
    id: user[0].id,
    name: user[0].name,
    email: user[0].email,
    mobile: user[0].mobile,
    mobileIsd: user[0].mobileIsd,
    status: user[0].status,
  };

  const token = await generateToken(tokenPayload);

  return { data: user, token: token };
};
