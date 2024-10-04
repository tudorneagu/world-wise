import { useSearchParams } from 'react-router-dom';
export function useUrlPostion() {
  const [searchParams, getSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return [lat, lng];
}
