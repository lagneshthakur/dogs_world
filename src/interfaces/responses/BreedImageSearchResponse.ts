export type BreedImageSearchResponse = SearchedImage[]

export interface SearchedImage {
  breeds: Breed[]
  id: string
  url: string
  width: number
  height: number
}

export interface Breed {
  weight: Weight
  height: Height
  id: number
  name: string
  country_code?: string
  bred_for: string
  breed_group?: string
  life_span: string
  temperament: string
  origin: string
  reference_image_id: string
}

export interface Weight {
  imperial: string
  metric: string
}

export interface Height {
  imperial: string
  metric: string
}
