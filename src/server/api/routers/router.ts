import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

import type { Launch, RocketType } from '../api-types'
import {z} from 'zod'

const perPage = 1000

export const spacexRouter = createTRPCRouter({
  launches: publicProcedure
    .input(z.object({
      rocketid: z.string().optional(),
      query: z.string().optional()
    }).optional())
    .query(async ({ input }) => {
      const rocketID = input?.rocketid
      const query = input?.query
      const launchesResponse = await fetch(`https://api.spacexdata.com/v3/launches?limit=${perPage}`)

      let results = await launchesResponse.json() as Launch[]

      results = results.filter(r => !!r.details)

      if (rocketID) {
          results = results.filter(r => r.rocket.rocket_id == rocketID)
      }

      if (query) {
        results = results.filter(r => 
          r.rocket.rocket_type.toLowerCase().includes(query.toLowerCase()) || 
          r.details.toLowerCase().includes(query.toLowerCase()) )
      }
      
      return {
        results
      }
    }),
    rockets: publicProcedure
    .input(z.object({
      page: z.number().optional().default(1),
    }).optional())
    .query(async ({ }) => {

      const rocketsResponse = await fetch(`https://api.spacexdata.com/v3/rockets`, {
        next: {
          revalidate: 3600
        }
      })

      const rockets = await rocketsResponse.json() as RocketType[]  
      return {
        rockets,
      }
    }),
});
