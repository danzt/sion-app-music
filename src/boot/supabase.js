// /src/boot/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hzuzlspkouoirvbqfdbm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6dXpsc3Brb3VvaXJ2YnFmZGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAwMzkxNDcsImV4cCI6MTk5NTYxNTE0N30.LqhPsRt_1sID7m8rY8FVp9rw5RJcFUnhYXSmQTdGNNw";

export const supabase = createClient(supabaseUrl, supabaseKey);
