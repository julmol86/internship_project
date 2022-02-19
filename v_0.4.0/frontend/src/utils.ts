export const formatDateToString = (d: Date) => {
  if (!d) return ''
  const newDate = new Date(d);
  newDate.setHours(newDate.getHours() + 4);
  return newDate.getUTCDate() + '.' + (newDate.getUTCMonth() + 1) + '.' + newDate.getUTCFullYear()
}

export const firstLetterToUppercase = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)
