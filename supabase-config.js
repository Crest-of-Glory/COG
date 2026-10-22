const SUPABASE_URL = 'https://diyqqdqitldcwkcrjjme.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_XRBLBS50FT1HuIf1A50HCA_eLFwQFnW';

// สร้าง client แบบ Global โดยใช้ supabase ที่โหลดมาจาก CDN ใน HTML
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
