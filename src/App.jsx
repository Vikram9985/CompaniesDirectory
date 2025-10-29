import React, { useMemo, useState, useEffect } from "react";
import useCompanies from "./hooks/useCompanies";
import FilterBar from "./components/FilterBar";
import CompanyTable from "./components/CompanyTable";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

export default function App() {
  const { companies, loading, error } = useCompanies();

  const [q, setQ] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 6;

  const locations = [...new Set(companies.map((c) => c.location))];
  const industries = [...new Set(companies.map((c) => c.industry))];

  const filtered = useMemo(() => {
    let data = companies;
    if (q) data = data.filter((c) => c.name.toLowerCase().includes(q.toLowerCase()));
    if (location) data = data.filter((c) => c.location === location);
    if (industry) data = data.filter((c) => c.industry === industry);

    if (sortBy === "name_asc") data = [...data].sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "name_desc") data = [...data].sort((a, b) => b.name.localeCompare(a.name));
    if (sortBy === "emp_asc") data = [...data].sort((a, b) => a.employees - b.employees);
    if (sortBy === "emp_desc") data = [...data].sort((a, b) => b.employees - a.employees);

    return data;
  }, [companies, q, location, industry, sortBy]);

  useEffect(() => setPage(1), [q, location, industry, sortBy]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);


  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Companies Directory</h1>

      <FilterBar
        q={q} setQ={setQ}
        location={location} setLocation={setLocation}
        industry={industry} setIndustry={setIndustry}
        sortBy={sortBy} setSortBy={setSortBy}
        locations={locations} industries={industries}
      />

  {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
  {/* Toasts for fetch success/error (render only if available) */}
  {/* {ToastComp ? <ToastComp position="top-right" /> : null} */}
      {!loading && !error && (
        <>
          <CompanyTable items={paginated} />
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
    </div>
  );
}
