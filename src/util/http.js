// Send Generic HTTP request
export default async function sendHttpRequest(url, confObj) {
  const resp = await fetch(url, confObj);
  const respData = await resp.json();

  if (!resp.ok) {
    throw new Error(
      respData.message || 'Something went wrong. Failed to send request'
    );
  }

  return respData;
}
