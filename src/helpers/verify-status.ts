export const verifyStatus = (status: string) => {
  if (status === "pending") {
    return (status = "in_progress");
  }

  if (status === "in_progress") {
    return (status = "completed");
  }

  if (status === "completed") {
    return (status = "pending");
  }

  return "pending";
};
