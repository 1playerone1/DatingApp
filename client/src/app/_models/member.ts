import { Photo } from "./Photo"

export interface Member {
  id: number
  userName: string
  photoUrl: any //Gerekirse string olarak değiştir
  age: number
  knownAs: string
  created: string
  lastActive: string
  gender: string
  introduction: string
  lookingFor: string
  interests: string
  city: string
  country: string
  photos: Photo[]
}

