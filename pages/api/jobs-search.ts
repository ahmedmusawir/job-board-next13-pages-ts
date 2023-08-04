import { NextApiRequest, NextApiResponse } from "next";
import datasource from "../../data-layer/";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { searchFormState, sideBarFormState } = req.body;


  const query = {
    ...sideBarFormState,
    searchBarText: searchFormState,
  };

  console.log(query);
  // const jobs = await datasource.searchJobs(query);
  // const jobs = await datasource.searchJobs({remoteOk: true});
  const jobs = await datasource.searchJobs({featured: true});
  res.status(200).json(jobs);
  
}
