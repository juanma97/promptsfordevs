import React from "react";
import { Input } from "../input/Input";
import "./searchFilters.css";

const CATEGORIES = [
  "All",
  "Unit Tests",
  "Components",
  "CRUD",
  "Resume",
  "Cover Letter",
];

export function SearchFilters({ search, category, onSearchChange, onCategoryChange, onReset }) {
  return (
    <div className="filters-container">
      <div className="input-wrapper">
        <Input
          placeholder="Search prompts..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <select className="category-select" value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat.toLowerCase()}>
            {cat}
          </option>
        ))}
      </select>
      <button className="reset-button" onClick={onReset}>
        Reset Filters
      </button>
    </div>
  );
}
