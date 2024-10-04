export const extractInitials = (fullName: string) => {
  const split = fullName?.split(" ");
  const first = split ? split[0] : ["A", "A"];
  const last = split.reverse()[0];

  return `${first[0]}${last[0]}`.toUpperCase();
};

export const formatAmount = (amount: string): string => {
  const numericAmount = parseFloat(amount.replace(/[^0-9.]/g, ""));

  if (isNaN(numericAmount)) {
    return "0";
  }

  const units = [
    { value: 1_000_000_000, suffix: "B" },
    { value: 1_000_000, suffix: "M" },
    { value: 1_000, suffix: "k" },
  ];

  for (const { value, suffix } of units) {
    if (numericAmount >= value) {
      return (numericAmount / value).toFixed(1).replace(/\.0$/, "") + suffix;
    }
  }

  return numericAmount.toString();
};
