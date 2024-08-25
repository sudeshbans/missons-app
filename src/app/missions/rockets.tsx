'use client';

import {Card, CardBody, CardFooter, Image} from '@nextui-org/react';
import { type RocketType } from '@/server/api/api-types';
import { useRouter } from 'next/navigation'

type RocketsData = {
    rockets: RocketType[];
}

export default function Rockets(rocketsData: RocketsData) {
    const router = useRouter()

    const handleOnPress = (rocketID: string) =>{
        router.push(`/?rocketid=${rocketID}`)
    }

    return (
        <div className="grid gap-6 grid-cols-4 md:grid-cols-4 lg:grid-cols-4">
            {rocketsData.rockets.map((item, index) => (
                <span key={index} onClick={() => handleOnPress(item.rocket_id)}>
               <Card >
                <CardBody className="overflow-visible p-0">
                    <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.description}
                    className="w-full object-cover h-[140px]"
                    src={item.flickr_images[0]}
                    />
                </CardBody>
                <CardFooter className="text-small justify-between">
                    <b>{item.rocket_name}</b>
                </CardFooter>
                </Card>
                </span>
 

        ))}
        </div>
    )
  }