'use client';

const ErrorBoundary = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <>
      <button onClick={reset} className="px-3 bg-blue-600 text-white rounded mb-2 py-1.5 ">
        Try Again
      </button>
      <div>Error in {error.message}</div>
    </>
  );
};

export default ErrorBoundary;
