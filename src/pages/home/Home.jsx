import React, { useState } from "react";
import { Input } from "../../components/input/Input";
import { Search } from "lucide-react";
import { PromptCard } from '../../components/prompt-card/PromptCard';
import "./home.css";
import { usePrompts } from "../../hooks/usePrompts";

export function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const { prompts, loading } = usePrompts();

  const CATEGORIES = ["All", ...new Set(prompts.map((p) => p.category).filter(Boolean))];

  const filteredPrompts = prompts.filter((prompt) => {
    const matchesSearch = prompt.title.toLowerCase().includes(search.toLowerCase()) || 
                          prompt.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "all" || prompt.category.toLowerCase() === category.toLowerCase();
    
    return matchesSearch && matchesCategory;
  });

  const resetFilters = () => {
    setSearch("");
    setCategory("all");
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Discover AI Prompts</h1>
          <p className="hero-subtitle">
            Find and share prompts for testing, development, and professional growth
          </p>
          <div className="filters-container">
            <div className="search-box">
              <Search className="search-icon" />
              <Input
                className="search-input"
                placeholder="Search prompts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select
              className="category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat.toLowerCase()}>
                  {cat}
                </option>
              ))}
            </select>
            <button className="reset-button" onClick={resetFilters}>
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      <div className="content-section">
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading prompts...</p>
          </div>
        ) : filteredPrompts.length > 0 ? (
          <div className="grid-container">
            {filteredPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} avgRating={4.5} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No prompts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
