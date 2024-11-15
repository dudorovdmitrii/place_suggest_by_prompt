import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Suggestion {
  id: number;
  name: string;
  address: string;
  review: string;
}

export interface GetSuggestionsResponse {
  data: Suggestion[];
}

export interface ApiResponseError {
  error: { message: string };
}

export class ApiClient {
  static BASE_URL = "http://localhost::8080";

  static async getSuggestions(
    region: string,
    prompt: string
  ): Promise<Suggestion[]> {
    return await axios(`${this.BASE_URL}/api/v1/ranking`, {
      params: { region, prompt },
    });
  }
}

export const useSuggestions = (region: string, prompt: string) => {
  return useQuery({
    queryFn: () => ApiClient.getSuggestions(region, prompt),
    queryKey: [region, prompt],
    enabled: false,
  });
};