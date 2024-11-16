import VisitorEntity from "../api/visitorEntity";

// Helper function to format date and time
export const formatDateWithTime = (time) => {
  const today = new Date();
  const datePart = today.toISOString().split("T")[0];
  return `${datePart} ${time}`;
};

export const handleSubmit = async (
  checkOutTime,
  checkedOut,
  selectedVisitorId,
  selectedVisitorContactNumber,
  setCheckOutTime,
  setCheckedOut,
  toggleCheckOutModal,
  setResponseMessage
) => {
  const formattedCheckOutTime = formatDateWithTime(checkOutTime);
  const checkedOutStatus = checkedOut === "True" ? 1 : 0;

  console.log("Visitor ID:", selectedVisitorId);
  console.log("Check Out Time:", formattedCheckOutTime);
  console.log("Checked Out:", checkedOutStatus);
  console.log("Phone Number:", selectedVisitorContactNumber);

  try {
    const responseData = await VisitorEntity.updateVisitor(
      selectedVisitorContactNumber,
      formattedCheckOutTime,
      checkedOutStatus
    );

    console.log("API Response:", responseData);
    setResponseMessage(responseData);

    setCheckOutTime("");
    setCheckedOut("False");
    toggleCheckOutModal();
  } catch (error) {
    console.error("Error during API call:", error);
    setResponseMessage("An error occurred during check-out.");
  }
};
