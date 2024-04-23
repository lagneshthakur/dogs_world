export type BreedsResponse = Breed[]

export interface Breed {
  weight: Weight
  height: Height
  id: number
  name: string
  bred_for?: string
  breed_group?: string
  life_span: string
  temperament?: string
  origin?: string
  reference_image_id: string
  image: Image
  country_code?: string
  description?: string
  history?: string
}

export interface Weight {
  imperial: string
  metric: string
}

export interface Height {
  imperial: string
  metric: string
}

export interface Image {
  id: string
  width: number
  height: number
  url: string
}
