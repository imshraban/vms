export const handleYesterdayCheckboxChange = (event) => {
  if (event.target.checked) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const day = String(yesterday.getDate()).padStart(2, "0");
    const month = String(yesterday.getMonth() + 1).padStart(2, "0");
    const year = yesterday.getFullYear();

    const yesterdayDate = `${day}/${month}/${year}`;
    console.log(yesterdayDate);
  } else {
    console.log(0);
  }
};
