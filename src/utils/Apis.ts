const BASE_URL = 'https://api.thedogapi.com/';

const DOG_SEARCH = (breed: string) => `v1/images/search?breed_ids=${breed}&include_breeds=true&limit=10`;
const DOG_BREEDS = 'v1/breeds';
export {
    BASE_URL,
    DOG_BREEDS,
    DOG_SEARCH
}