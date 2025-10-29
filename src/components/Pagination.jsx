import React from "react";

export default function Pagination({ page, setPage, totalPages }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex gap-2 justify-center mt-6">
      <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className="border px-3 py-1 rounded disabled:opacity-50">
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`border px-3 py-1 rounded ${p === page ? 'bg-blue-500 text-white' : ''}`}
        >
          {p}
        </button>
      ))}
      <button disabled={page === totalPages} onClick={() => setPage(p => p + 1)} className="border px-3 py-1 rounded disabled:opacity-50">
        Next
      </button>
    </div>
  );
}
