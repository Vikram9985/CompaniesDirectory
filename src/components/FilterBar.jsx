import React from "react";

export default function FilterBar({
  q, setQ,
  location, setLocation,
  industry, setIndustry,
  sortBy, setSortBy,
  locations, industries
}) {
  return (
    <div className="flex flex-wrap gap-2 items-center mb-4">
      <input
        type="text"
        placeholder="Search by name..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="border rounded p-2 w-48"
      />
      <select value={location} onChange={(e) => setLocation(e.target.value)} className="border p-2 rounded">
        <option value="">All Locations</option>
        {locations.map((loc) => <option key={loc} value={loc}>{loc}</option>)}
      </select>
      <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="border p-2 rounded">
        <option value="">All Industries</option>
        {industries.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
      </select>
      {/* <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border p-2 rounded">
        <option value="">Sort By</option>
        <option value="name_asc">Name A→Z</option>
        <option value="name_desc">Name Z→A</option>
        <option value="emp_asc">Employees ↑</option>
        <option value="emp_desc">Employees ↓</option>
      </select> */}
    </div>
  );
}
