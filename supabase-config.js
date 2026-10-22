import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://diyqqdqitldcwkcrjjme.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_XRBLBS50FT1HuIf1A50HCA_eLFwQFnW';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
