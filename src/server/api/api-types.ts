export interface Rocket {
  rocket_id: string
  rocket_name: string
  rocket_type: string
}

export interface LaunchSite {
  site_id: string
  site_name: string
  site_name_long: string
}

export interface Rocket {
  rocket_id: string
  rocket_name: string
  rocket_type: string
}

export interface LaunchSite {
  site_id: string
  site_name: string
  site_name_long: string
}

export type RocketType =  {
  id: number
  flickr_images: string[]
  wikipedia: string
  description: string
  rocket_id: string
  rocket_name: string
  rocket_type: string
}

export type Launch = {
  mission_name: string
  launch_year: string
  launch_date_unix: number
  launch_date_utc: string
  launch_date_local: string
  rocket: Rocket
  launch_site: LaunchSite
  details: string
}

