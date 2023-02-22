export function cleanError(str: any): string {
  if (!str) {
    return ''
  }
  if (typeof str !== 'string') {
    str = str.toString()
  }
  if (isNetworkError(str)) {
    return 'Unable to connect. Please check your internet connection and try again.'
  }
  if (str.includes('Upstream Failure')) {
    return 'The server appears to be experiencing issues. Please try again in a few moments.'
  }
  if (str.startsWith('Error: ')) {
    return str.slice('Error: '.length)
  }
  return str
}

export function isNetworkError(e: unknown) {
  const str = String(e)
  return str.includes('Abort') || str.includes('Network request failed')
}
