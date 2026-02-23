export function yupToFormError2(error) {
  console.log("error.inner=", error.inner);
  if(!error.inner) return {}
  const errorsObject = error.inner.reduce(
    (acc, el) => ({ ...acc, [el.path]: el.message }),
    {},
  );
  return errorsObject;
}
