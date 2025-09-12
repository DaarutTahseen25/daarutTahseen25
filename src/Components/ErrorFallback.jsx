import React from "react";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className="h-screen bg-gray-50 flex items-center justify-center p-12">
      <div className="bg-white border border-gray-200 rounded-md p-12 max-w-3xl text-center shadow">
        <h1 className="text-2xl font-bold mb-4">Something went wrong 🧐</h1>

        <p className="text-gray-600 mb-8 break-words">
          {error?.message || "An unexpected error occurred."}
        </p>

        <button
          onClick={resetErrorBoundary}
          className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-buttonhover transition-colors"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
