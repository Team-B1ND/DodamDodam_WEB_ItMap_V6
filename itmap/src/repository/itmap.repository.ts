import customAxios from "../lib/axios/customAxios";
import { ItMapResponse } from "../types/itmap/itmap.type";

class itMapRepository {
  public async itMap(): Promise<ItMapResponse> {
    const { data } = await customAxios.get<ItMapResponse>("/itmap/companys");
    return data;
  }
}

export default new itMapRepository();