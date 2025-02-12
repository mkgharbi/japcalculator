export const sendData = (kcal: number) => () => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ kcal })
  }
  fetch('.netlify/functions/fauna', requestOptions)
}
