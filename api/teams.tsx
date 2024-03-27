// pages/api/teams.js
import teamData from "./team-data.json";

export default function handler(req, res) {
  res.status(200).json(teamData);
}
