function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary"></div>
      <p className="mt-4 text-sm text-text-muted">Loading photos...</p>
    </div>
  );
}

export default LoadingSpinner;
