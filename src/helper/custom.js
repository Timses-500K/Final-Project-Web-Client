export const convertToRupiah = (number) => {
  var rupiah = "";
  var newNumber = number.toString().split("").reverse().join("");
  for (var i = 0; i < newNumber.length; i++)
    if (i % 3 == 0) rupiah += newNumber.substr(i, 3) + ".";
  return (
    "Rp. " +
    rupiah
      .split("", rupiah.length - 1)
      .reverse()
      .join("")
  );
};
