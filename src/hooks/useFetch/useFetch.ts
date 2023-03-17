import { HttpHeader } from "common/enums/enums";
import { useState, useEffect } from "hooks/hooks";
import { useToken } from 'hooks/useFetch/useToken';

const useFetch = (url: string, id = '') => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState<'idle' | 'pending' | 'succeeded' | 'failed'>('idle');
    useToken();
    const token = localStorage.getItem('token');
    const headers = new Headers();
    headers.append(HttpHeader.CONTENT_TYPE, "application/json");
    headers.append(HttpHeader.AUTHORIZATION, `Bearer ${JSON.parse(token)}`);

    useEffect(() => {
        const doFetch = async () => {
            setLoading('pending');
            try {
                const res = await fetch(url, { headers });
                if (!res.ok) {
                    throw new Error(`Fetch error ${res.status}`)
                }
                const json = await res.json();
                setLoading('succeeded');

                setResponse(json)
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