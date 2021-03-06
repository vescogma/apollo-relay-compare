export const gqlFetch = async (query, variables) => {
  const response = await fetch('http://localhost:4000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  })
  return await response.json()
}
