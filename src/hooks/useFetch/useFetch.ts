import { HttpHeader, StorageKey } from 'common/enums/enums';
import { useState, useEffect } from 'hooks/hooks';
import { useToken } from 'hooks/useToken/useToken';
import { storage } from 'services/services';

const useFetch = (url: string, id = '') => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useToken();
  const token = storage.getItem(StorageKey.TOKEN);
  const headers = new Headers();
  headers.append(HttpHeader.CONTENT_TYPE, 'application/json');
  headers.append(HttpHeader.AUTHORIZATION, `Bearer ${JSON.parse(token)}`);

  useEffect(() => {
    const doFetch = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, { headers });
        if (!res.ok) {
          throw new Error(`Fetch error ${res.status}`);
        }
        const json = await res.json();
        setData(json);
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    doFetch();
  }, [id]);
  return { data, error, loading };
};
export { useFetch };
