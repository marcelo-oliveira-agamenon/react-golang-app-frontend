async function getBase64ImageFromUrl(imageUrl: string) {
  let res = await fetch(imageUrl);
  let blob = await res.blob();

  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        resolve(reader.result);
      },
      false,
    );

    reader.onerror = () => {
      return reject('');
    };
    reader.readAsDataURL(blob);
  });
}

function formatToCurrency(
  amount: number,
  locale: string = 'en-US',
  currency: string = 'USD',
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

export { getBase64ImageFromUrl, formatToCurrency };
