export function yupToFormError(error) {
  console.log("catch error=", error.inner);
  const errorObject = {};
  error.inner.forEach((el) => {
    errorObject[el.path] = el.message;
  });
  return errorObject;
}
