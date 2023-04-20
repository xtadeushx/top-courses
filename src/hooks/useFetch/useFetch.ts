import { HttpHeader, StorageKey } from 'common/enums/enums';
import { ICourse } from 'common/types/course.types';
import { useState, useEffect } from 'hooks/hooks';
import { useToken } from 'hooks/useFetch/useToken';
import { storage } from 'services/services';

const useFetch = (url: string, id = '') => {
  const [response, setResponse] = useState<ICourse[]
    | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<
    'idle' | 'pending' | 'succeeded' | 'failed'
  >('idle');
  useToken();
  const token = storage.getItem(StorageKey.TOKEN);
  const headers = new Headers();
  headers.append(HttpHeader.CONTENT_TYPE, 'application/json');
  headers.append(HttpHeader.AUTHORIZATION, `Bearer ${JSON.parse(token)}`);

  useEffect(() => {
    const doFetch = async () => {
      setLoading('pending');
      try {
        const res = await fetch(url, { headers });
        if (!res.ok) {
          throw new Error(`Fetch error ${res.status}`);
        }
        const json = await res.json() as ICourse[];
        setLoading('succeeded');
        setResponse(json);
      } catch (e: any) {
        setError(e);
        setLoading('failed');
      }
    };
    doFetch();
  }, [id]);
  return { response, error, loading };
};
export { useFetch };
