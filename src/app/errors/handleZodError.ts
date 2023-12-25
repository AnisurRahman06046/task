import { ZodError, ZodIssue } from "zod";

const handleZodError = (error: ZodError) => {
  const errorSource = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: "Validation Error",
    errorSource,
  };
};
export default handleZodError;
