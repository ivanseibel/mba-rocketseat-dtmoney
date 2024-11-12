export const dateFormater = new Intl.DateTimeFormat("en-IE", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

export const currencyFormater = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
});
