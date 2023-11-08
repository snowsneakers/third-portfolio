import { NextResponse } from "next/server";

const projects = [
  {
    id: 1,
    name: "Lakers Stats",
    image: "https://i.postimg.cc/BZFVyMkv/stats.png",
    techUsed: ["gatsby", "bootstrap", "scss"],
    description:
      "See current and past team, player, and stat leader information.",
    liveLink: "https://www.nba.com/lakers/team/stats",
  },
  {
    id: 2,
    name: "NBA Standings",
    image: "https://i.postimg.cc/FRdBhZKD/standings.png",
    techUsed: ["gatsby", "bootstrap", "scss"],
    description: "See current and past NBA standings",
    liveLink: "https://www.nba.com/lakers/team/standings",
  },
  {
    id: 3,
    name: "Lakers International Schedule",
    image:
      "https://images.pexels.com/photos/17582629/pexels-photo-17582629/free-photo-of-landscape-sunset-sand-dark.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techUsed: ["gatsby", "bootstrap", "scss"],
    description: "See Lakers game information for over 50 countries",
    liveLink: "https://www.nba.com/lakers/broadcast/international-schedule",
  },
];

export async function GET(req, res) {
  try {
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
