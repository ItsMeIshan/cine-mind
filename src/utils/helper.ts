async function fetchWithErrorHandling(url: URL, options: RequestInit) {
  const response = await fetch(url, options);

  if (response.status !== 200) {
    throw new Error("Error in request");
  }
  const result = await response.json();
  if (result.error) {
    throw new Error(result.error);
  }
  return result;
}
