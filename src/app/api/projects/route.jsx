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
    gif: "./projects/team_stats.gif",
    alt_video: "./projects/3.webm",
    live: true,
    repo: null
  },
  {
    id: 4,
    name: "The Narrative Mind CMS",
    video:
      "https://res.cloudinary.com/hundreddevs/video/upload/v1699477332/cmsVideo_2_xrutn3.mp4",
    techUsed: ["next", "tailwind", "node"],
    description: "Custom backend + frontend blog admin panel",
    liveLink: "https://www.nba.com/lakers/broadcast/international-schedule",
    gif: "./projects/blog_backend.gif",
    alt_video: "./projects/2.webm",
    live: false,
    repo: "https://github.com/snowsneakers/the-narrative-mind"
  },
  {
    id: 3,
    name: "Lakers International Schedule",
    video:
      "https://res.cloudinary.com/hundreddevs/video/upload/v1699472214/intVideo_tps0nn.mov",
    techUsed: ["gatsby", "bootstrap", "sass"],
    description: "See Lakers game information for over 50 countries",
    liveLink: "https://www.nba.com/lakers/broadcast/international-schedule",
    gif: "./projects/int_schedule.gif",
    alt_video: "./projects/4.webm",
    live: true,
    repo: null
  },
  {
    id: 2,
    name: "NBA Standings",
    video:
      "https://res.cloudinary.com/hundreddevs/video/upload/v1699422368/standingsVid_nw2kui.mp4",
    techUsed: ["gatsby", "bootstrap", "sass"],
    description: "See current and past NBA standings",
    liveLink: "https://www.nba.com/lakers/team/standings",
    gif: "./projects/team_standings.gif",
    alt_video: "./projects/1.webm",
    live: true,
    repo: null
  },
];

export async function GET(req, res) {
  try {
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
