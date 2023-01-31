export function priceFormater(price: string) {
  const noComaNumber = price.slice(0, -3);
  if (noComaNumber.length > 3) {
    const partOne = noComaNumber.slice(0, -3);
    const partTwo = noComaNumber.slice(-3);
    return `${partOne}.${partTwo}`;
  }
  return noComaNumber;
}
