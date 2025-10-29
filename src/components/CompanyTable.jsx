import React, { useEffect, useState } from "react";

export default function CompanyTable({ items }) {
  const [layout, setLayout] = useState("grid");

  useEffect(() => {
    // Choose 'table' for wide screens (>= 1024px), otherwise 'grid'
    function updateLayout() {
      setLayout(window.innerWidth >= 1024 ? "table" : "grid");
    }

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  if (!items || !items.length) return <p>No companies found.</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-600">
          Layout: <span className="font-medium">{layout === "table" ? "Table view" : "Grid view"}</span>
        </div>
      </div>

      {layout === "table" ? (
        <div className="overflow-x-auto bg-white border rounded-lg p-2 m-3">
          <table className="min-w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-center ">Name</th>
                <th className="px-4 py-2 text-center">Industry</th>
                <th className="px-4 py-2 text-center">Location</th>
                <th className="px-4 py-2 text-center">Employees</th>
                <th className="px-4 py-2 text-center">Website</th>
              </tr>
            </thead>
            <tbody>
              {items.map((c) => (
                <tr key={c.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3 text-center">{c.name}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 text-center">{c.industry}</td>
                  <td className="px-4 py-3 text-sm text-center">{c.location}</td>
                  <td className="px-4 py-3 text-sm text-center">{c.employees}</td>
                  <td className="px-4 py-3 text-sm text-center">
                    <a href={c.website} target="_blank" rel="noreferrer noopener" className="text-blue-500 underline">
                      Visit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <div key={c.id} className="bg-white border rounded-lg shadow-sm p-4 hover:shadow-md transition">
              <h2 className="text-lg font-semibold">{c.name}</h2>
              <p className="text-sm text-gray-600">{c.industry}</p>
              <p className="text-sm">{c.location}</p>
              <p className="text-sm mt-1">Employees: {c.employees}</p>
              <a href={c.website} target="_blank" rel="noreferrer noopener" className="text-blue-500 text-sm underline mt-2 inline-block">
                Visit Website
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
