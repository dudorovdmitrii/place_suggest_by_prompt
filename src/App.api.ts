import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Suggestion {
  id: number;
  name: string;
  address: string;
  review: string;
  rating: number;
}

export interface GetSuggestionsResponse {
  data: Suggestion[];
}

export interface ApiResponseError {
  error: { message: string };
}

export class ApiClient {
  static async getSuggestions(
    region: string,
    prompt: string
  ): Promise<Suggestion[]> {
    return await axios.get("/api/v1/ranking", {
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
