import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Supabase project URL
const supabaseUrl = 'https://gtucfltpqrmftekcvgmd.supabase.co';
// Supabase anon key
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0dWNmbHRwcXJtZnRla2N2Z21kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3NzYyMjksImV4cCI6MjA2MjM1MjIyOX0.poOIjZ0vbRCeiXKz0zKSqbmmAArCAoi3I_0dnHpsNQE';

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

