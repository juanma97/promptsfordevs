import { useState } from 'react';
import { SearchFilters } from '../../components/search-filters/SearchFilters';
import { Input } from '../../components/input/Input';
import { Search } from 'lucide-react';
import { PromptCard } from '../../components/prompt-card/PromptCard';
import './home.css';

const fakePrompts = [
  { id: 1, title: 'Improve Writing Skills', description: 'A prompt to enhance writing abilities.', tags: ['writing', 'education'], isPaid: false },
  { id: 2, title: 'Debugging Helper', description: 'AI-assisted debugging for developers.', tags: ['coding', 'debugging'], isPaid: true },
  { id: 3, title: 'Creative Story Ideas', description: 'Generate creative story ideas instantly.', tags: ['creative', 'storytelling'], isPaid: false },
  { id: 4, title: 'Resume Optimizer', description: 'Improve your resume with AI suggestions.', tags: ['career', 'resume'], isPaid: true },
  { id: 5, title: 'Learning New Languages', description: 'AI-powered language learning exercises.', tags: ['language', 'education'], isPaid: false },
  { id: 6, title: 'Workout Plans', description: 'Get personalized workout routines.', tags: ['fitness', 'health'], isPaid: true }
];

export function Home() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const resetFilters = () => {
    setSearch('');
    setCategory('all');
  };

  return (
    <div className="home-container">
      {/* Hero Search Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Discover AI Prompts</h1>
          <p className="hero-subtitle">
            Find and share prompts for testing, development, and professional growth
          </p>
          <div className="search-box">
            <Search className="search-icon" />
            <Input
              className="search-input"
              placeholder="Search prompts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="content-section">
        <SearchFilters
          search={search}
          category={category}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
          onReset={resetFilters}
        />

        <div className="grid-container">
          {fakePrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} avgRating={4.5} />
          ))}
        </div>
      </div>
    </div>
  );
}
