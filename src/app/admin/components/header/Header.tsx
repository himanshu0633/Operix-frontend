import { Bell, ChevronDown, Plus, Search, Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="appHeader">
      <button className="companySwitch" type="button">
        <span>S</span>
        <strong>Shah Enterprises</strong>
        <ChevronDown size={15} />
      </button>

      <label className="headerSearch">
        <Search size={17} />
        <input placeholder="Search products, orders, customers..." />
        <kbd>⌘ K</kbd>
      </label>

      <div className="headerActions">
        <button aria-label="Notifications" className="headerIcon" type="button">
          <Bell size={17} />
          <i />
        </button>
        <button className="aiButton" type="button">
          <Sparkles size={16} />
          <span>AI Assistant</span>
        </button>
        <button className="createButton" type="button">
          <Plus size={18} />
          <span>Create</span>
        </button>
        <button className="profileButton" type="button">G</button>
      </div>
    </header>
  );
}
