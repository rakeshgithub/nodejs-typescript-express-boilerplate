import AppDataSource from "../config/database";
import { Business } from "../entity";

export interface IBusinessListResponse {
  data: any;
}
export const getBusinesses = async (
  filterData: string
): Promise<IBusinessListResponse> => {
  const businessRepository = AppDataSource.getRepository(Business);

  // const data = await businessRepository
  //   .createQueryBuilder("business")
  //   .leftJoinAndSelect("business.user", "businesses")
  //   .where("user.email = :email AND user.password=:password", {
  //     email: email,
  //     password: password,
  //   })
  //   .getMany();

  return { data: data };
};

export const createBusiness = async (payload: Business): Promise<Business> => {
  const businessRepository = AppDataSource.getRepository(Business);
  const business = new Business();
  return businessRepository.save({
    ...business,
    ...payload,
  });
};

export const getBusiness = async (id: number): Promise<Business | null> => {
  const businessRepository = AppDataSource.getRepository(Business);
  const business = await businessRepository.findOne({ where: { id: id } });
  if (!business) return null;
  return business;
};
