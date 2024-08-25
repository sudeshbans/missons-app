'use client';

import {Card, CardBody, CardHeader} from '@nextui-org/react';
import { type Launch } from '@/server/api/api-types';

type MissionsData = {
    launches: Launch[];
    rocketID: string | undefined;
}
  

export default function Missions(missions: MissionsData) {
    
    const launches = missions.launches
    return (
        <div className="grid gap-6 grid-cols-1">
        {launches.map((item, index) => (
         <Card key={index}>
          <CardHeader>{item.rocket.rocket_name}</CardHeader>
         <CardBody className="overflow-visible p-5">
              <ul className="list-none">
                  <li>Launch Date: {item.launch_date_local}</li>
                  <li>Mission Details: {item.details}</li>
                  <li>Location: {item.launch_site.site_name_long}</li>
                  <li>RocketType: {item.rocket.rocket_type}</li>
              </ul>
         </CardBody>
       </Card>
        ))}
  
        </div>
    )
  }