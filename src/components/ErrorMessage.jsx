function ErrorMessage({ message }) {
  return (
    <div className="mx-auto max-w-md rounded-xl border border-red-200 bg-red-50 px-6 py-8 text-center">
      <svg className="mx-auto mb-3 h-10 w-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
      <p className="text-sm font-medium text-red-800">Something went wrong</p>
      <p className="mt-1 text-sm text-red-600">{message}</p>
    </div>
  );
}

export default ErrorMessage;
