import { supabase } from "./supabase";

export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
}

export async function signIn(email, password) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}
