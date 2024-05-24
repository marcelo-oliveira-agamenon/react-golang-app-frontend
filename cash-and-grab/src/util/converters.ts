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

export { getBase64ImageFromUrl };
