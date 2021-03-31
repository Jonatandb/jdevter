import { DEFAULT_LANGUAGE } from 'constants/locale'

const isDateTimeFormatSupported =
  typeof Intl !== 'undefined' && Intl.DateTimeFormat

export const formatDate = (timestamp, { language = DEFAULT_LANGUAGE } = {}) => {
  const date = new Date(timestamp)

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }

  if (!isDateTimeFormatSupported) {
    return date.toLocaleDateString(language, options)
  }

  return new Intl.DateTimeFormat(language, options).format(date)
}

export default function useDateTimeFormat(timestamp) {
  return formatDate(timestamp, { language: DEFAULT_LANGUAGE })
}
