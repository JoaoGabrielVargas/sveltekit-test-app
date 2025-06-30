export async function load({fetch, url}) {  
  const query = url.searchParams.get('query') || '';
  
  if (query) {

    const apiUrl = `https://api.agify.io?name=${encodeURIComponent(query)}`;
    const res = await fetch(apiUrl);
    if (res.ok) {
      const data = await res.json();
      return { results: data, query};
    }
  }

  return { results: null, query: ''};
}