'use client';
import { useRouter, useSearchParams } from 'next/navigation'


export default function SearchBar() {

    const router = useRouter()
    const searchParams = useSearchParams()

    const handleQuery = (query: string) => {
        const rocketID = searchParams.get('rocketid')

        let queryBuilder = `/?query=${query}`

        if (rocketID) {
            queryBuilder = `${queryBuilder}&rocketid=${rocketID}`
        }

        router.push(queryBuilder)
    };


    return (
        <div className="flex p-2 justify-between items-center flex-wrap pb-4">
        <div className="flex items-center">
            <h2 className="font-bold text-2xl text-white-600">SpaceX Rockets</h2>
        </div>
        <div className="relative flex items-center md:inline-flex">
            <input 
                onChange={(e) => handleQuery(e.target.value)}
                type="text" 
                placeholder="Search" 
                className="border border-gray-200 rounded-md py-1 px-2"/>
        </div>
        </div>
    )
  }