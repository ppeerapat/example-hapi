import fetch from "node-fetch";
import { URL } from "url";
import { IQuery } from "../model/repo";

export const getQuery = async (query: IQuery): Promise<any> => {
  const url = new URL("https://api.github.com/search/repositories");
  const params = {
    q: query.query,
    per_page: query.limit,
    page: query.page,
  };
  Object.entries(params).forEach(([k, v]) =>
    url.searchParams.append(k, String(v))
  );
  const res = await fetch(url, { method: "GET" });
  const result = await res.json();
  return result;
};
