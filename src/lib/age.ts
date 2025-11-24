export function getAge(): number {
  const birthDate = new Date('2003-06-23')
  const currentDate = new Date()
  const ageInMilliseconds = currentDate.getTime() - birthDate.getTime()
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
  return Math.floor(ageInYears)
}
