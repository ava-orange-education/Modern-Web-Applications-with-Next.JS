import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://hitxvvdftdaknicwyecn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpdHh2dmRmdGRha25pY3d5ZWNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg5NjcxMTQsImV4cCI6MjAwNDU0MzExNH0.t7ZlhVlaVfepvSLsUICXnKo3mArQjIXmMLvm7TOx93w"
);

export default supabase;
