// Supabase client
import { headers, cookies } from "next/dist/client/components/headers"
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "./database.types"

export const createClient = () => {
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })
}