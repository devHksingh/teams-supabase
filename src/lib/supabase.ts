import { supabaseAnonKey, supabaseURL } from "@/config";
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database

export const supabase = createClient(supabaseURL, supabaseAnonKey);