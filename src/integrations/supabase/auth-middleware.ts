import { createMiddleware } from '@tanstack/react-start'
import { auth } from '@clerk/tanstack-react-start/server'
import { supabaseAdmin } from './client.server'

export const requireSupabaseAuth = createMiddleware({ type: 'function' }).server(
  async ({ next }) => {
    const { userId } = await auth();

    if (!userId) {
      throw new Error('Unauthorized: User is not authenticated');
    }

    return next({
      context: {
        supabase: supabaseAdmin,
        userId,
      },
    });
  },
);

