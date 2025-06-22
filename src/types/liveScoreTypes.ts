export interface LiveScore {
  matchId: string;
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
  status: string; // e.g., "LIVE", "FT"
  startTime: string;
}

// https://www.thesportsdb.com/api/v2/json/filter/tv/day/2024-06-22 use this later for fetching dat