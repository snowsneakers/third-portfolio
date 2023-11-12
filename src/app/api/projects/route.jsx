import { NextResponse } from "next/server";

const projects = [
  {
    id: 1,
    name: "Lakers Stats",
    video:
      "https://res.cloudinary.com/hundreddevs/video/upload/v1699422372/statsVid_j7gfci.mp4",
    techUsed: ["gatsby", "bootstrap", "sass"],
    description:
      "See current and past team, player, and stat leader information.",
    liveLink: "https://www.nba.com/lakers/team/stats",
  },
  {
    id: 4,
    name: "Blog Admin Panel",
    video:
      "https://res.cloudinary.com/hundreddevs/video/upload/v1699477332/cmsVideo_2_xrutn3.mp4",
    techUsed: ["next", "tailwind", "node"],
    description: "Custom backend + frontend blog admin panel",
    liveLink: "https://www.nba.com/lakers/broadcast/international-schedule",
  },
  {
    id: 3,
    name: "Lakers International Schedule",
    video:
      "https://res.cloudinary.com/hundreddevs/video/upload/v1699472214/intVideo_tps0nn.mov",
    techUsed: ["gatsby", "bootstrap", "sass"],
    description: "See Lakers game information for over 50 countries",
    liveLink: "https://www.nba.com/lakers/broadcast/international-schedule",
  },
  {
    id: 2,
    name: "NBA Standings",
    video:
      "https://res.cloudinary.com/hundreddevs/video/upload/v1699422368/standingsVid_nw2kui.mp4",
    techUsed: ["gatsby", "bootstrap", "sass"],
    description: "See current and past NBA standings",
    liveLink: "https://www.nba.com/lakers/team/standings",
  },
];

export async function GET(req, res) {
  try {
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
