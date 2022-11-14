// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from 'path';
import {promises as fs} from 'fs';

export default async function handler(req, res) {
  try {
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), 'json');
    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/teams.json', 'utf8');
    //Return the content of the data file in json format
    const result = JSON.parse(fileContents);
    res.status(200).json({teams: result.teams});
  } catch (error) {
    res.status(400).json({error});
  }
}
