import { useSearchParams } from 'react-router-dom';
export function useURLPostion() {
  const [searchParams, getSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return [lat, lng];
}
