import queryString from 'query-string';

const getStringifiedQuery = (query: any) => queryString.stringify(query);

export { getStringifiedQuery };
