import { useState, useEffect } from "react";

const ErrorMessage = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error, errorInfo) => {
      console.error("Unhandled error:", error, errorInfo);
      setHasError(true);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleError);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleError);
    };
  }, []);

  if (hasError) {
    return <div className="error-message">Error message {children}</div>;
  }

  return children;
};

export default ErrorMessage;
