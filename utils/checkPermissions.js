import { UnAuthenticatedError } from "../errors/index.js";

const checkPermissions = (requestUser, resourceUsedId) => {
  if (requestUser.userId === resourceUsedId.toString()) return;
  throw new UnAuthenticatedError("Not authorized to access this route");
  return;
};

export default checkPermissions;
