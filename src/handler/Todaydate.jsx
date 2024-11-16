// export const handleTodayCheckboxChange = (event) => {
//   if (event.target.checked) {
//     const today = new Date();

//     const day = String(today.getDate()).padStart(2, "0");
//     const month = String(today.getMonth() + 1).padStart(2, "0");
//     const year = today.getFullYear();

//     const todayDate = `${day}/${month}/${year}`;
//     console.log(todayDate);
//   } else {
//     console.log(0);
//   }
// };
export const handleTodayCheckboxChange = (event, visitors) => {
  if (event.target.checked) {
    
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    const todayDate = `${year}-${month}-${day}`; 
    console.log(todayDate);
    
    const todayVisitors = visitors.filter((visitor) => {
      
      const checkInDate = visitor.check_in_time.split(" ")[0];
      return checkInDate === todayDate;
    });

    console.log(todayVisitors);
  } else {
    console.log(0); 
  }
};
