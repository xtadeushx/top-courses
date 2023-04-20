import { HttpHeader, StorageKey } from 'common/enums/enums';
import { ICourse } from 'common/types/course.types';
import { ICourseList } from 'common/types/coursesList.types';
import { useState, useEffect } from 'hooks/hooks';
import { useToken } from 'hooks/useToken/useToken';
import { storage } from 'services/services';

const useFetch = (url: string, id = '') => {
  const [response, setResponse] = useState<ICourseList
    | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<
    boolean
  >(false);
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
        const data = await res.json() as ICourseList;
        setLoading(false);
        setResponse(data);
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    doFetch();
  }, [id]);
  return { response, error, loading };
};
export { useFetch };
