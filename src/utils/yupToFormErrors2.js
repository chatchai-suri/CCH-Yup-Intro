export function yupToFormError2(error, refs) {
  console.log("error.inner=", error.inner);
  if(!error.inner) return {}
  const errorsObject = error.inner.reduce(
    (acc, el) => ({ ...acc, [el.path]: el.message }),
    {},
  );
  const firstErrorField = error.inner[0]?.path
  if (firstErrorField && refs[firstErrorField]?.current) {
    refs[firstErrorField].current.focus()
  }
  return errorsObject;
}
