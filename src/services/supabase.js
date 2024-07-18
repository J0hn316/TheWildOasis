import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://gpmrstewnsbytvffkuba.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwbXJzdGV3bnNieXR2ZmZrdWJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEyNjkxNzIsImV4cCI6MjAzNjg0NTE3Mn0.rOOOgUOuCL-f2QfyD6muf6AuyiTBR2TuzdeLD4f5cAA';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
