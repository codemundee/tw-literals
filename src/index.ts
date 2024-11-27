export default function tw(
  strings: TemplateStringsArray,
  ...values: string[]
): string {
  const str = String.raw({ raw: strings }, ...values);
  return str.replace(/\s+/g, " ").trim();
}
