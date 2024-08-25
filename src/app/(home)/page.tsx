import { api } from '@/trpc/server';
import Rockets from './rockets';

import SearchBar from './search';
import Missions from './missions';

export const revalidate = 3600
export const dynamic = 'force-static'

type SearchParams = {
 rocketid: string;
  details: string;
  page: number;
  query: string;
}


export default async function Home({
    searchParams
  }: {
    params: { slug: string };
    searchParams: SearchParams;
  }) {

    const launches = await api.spacex.launches.query({
        rocketid: searchParams.rocketid,
        query: searchParams.query
    }); 
    

    const results = await api.spacex.rockets.query();

    return (
        <main className="container mx-auto px-6 mt-16">
            <SearchBar />
            <Rockets rockets={results.rockets} />
            <Missions 
                launches={launches.results} 
                rocketID={'data'}
            />
        </main>
    );
}
