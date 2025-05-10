import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ParticlesBackground from '../../components/ParticlesBackground';

// Content calendar entry interface
interface CalendarEntry {
  id: number;
  date: string;
  title: string;
  contentType: string;
  platform: string;
  status: 'planned' | 'draft' | 'scheduled' | 'published';
  notes?: string;
  tags?: string[];
}

// Calendar filters interface
interface CalendarFilters {
  platform: string;
  contentType: string;
  status: string;
  dateRange: {
    from: string;
    to: string;
  };
}

const ContentCalendar: React.FC = () => {
  // Mock calendar entries
  const initialEntries: CalendarEntry[] = [
    {
      id: 1,
      date: '2025-05-10',
      title: 'Small Crab Event Announcement',
      contentType: 'Event Promotion',
      platform: 'Instagram',
      status: 'scheduled',
      tags: ['event', 'small-crab', 'liquid-lounge']
    },
    {
      id: 2,
      date: '2025-05-12',
      title: 'Beat Battle Reminder - May Edition',
      contentType: 'Beat Battle',
      platform: 'Twitter',
      status: 'planned',
      notes: 'Include submission deadline and prizes'
    },
    {
      id: 3,
      date: '2025-05-15',
      title: 'Collie Artist Spotlight',
      contentType: 'Artist Feature',
      platform: 'Instagram',
      status: 'draft',
      notes: 'Waiting for artist confirmation on bio details'
    },
    {
      id: 4,
      date: '2025-05-18',
      title: 'EMC Radio Show - Episode 12 Announcement',
      contentType: 'Content Promotion',
      platform: 'Facebook',
      status: 'planned'
    },
    {
      id: 5,
      date: '2025-05-20',
      title: 'Production Tip: Layering Kick Drums',
      contentType: 'Tutorial',
      platform: 'Instagram',
      status: 'draft',
      tags: ['production', 'tips', 'tutorial']
    },
    {
      id: 6,
      date: '2025-05-22',
      title: 'Bushbaby X Illicit Event Photos',
      contentType: 'Event Recap',
      platform: 'Facebook',
      status: 'planned',
      notes: 'Use photos from photographer'
    },
    {
      id: 7,
      date: '2025-05-25',
      title: 'New Release Roundup - May Week 4',
      contentType: 'Music Promotion',
      platform: 'Twitter',
      status: 'planned'
    }
  ];

  // States
  const [calendarEntries, setCalendarEntries] = useState<CalendarEntry[]>(initialEntries);
  const [filters, setFilters] = useState<CalendarFilters>({
    platform: 'all',
    contentType: 'all',
    status: 'all',
    dateRange: {
      from: '',
      to: ''
    }
  });
  const [selectedEntry, setSelectedEntry] = useState<CalendarEntry | null>(null);
  const [isAddingEntry, setIsAddingEntry] = useState(false);
  const [newEntry, setNewEntry] = useState<Partial<CalendarEntry>>({
    date: new Date().toISOString().split('T')[0],
    status: 'planned'
  });

  // Platform options
  const platforms = ['Instagram', 'Twitter', 'Facebook', 'TikTok', 'YouTube', 'LinkedIn'];
  
  // Content types
  const contentTypes = [
    'Event Promotion', 
    'Artist Feature', 
    'Beat Battle', 
    'Music Promotion', 
    'Tutorial', 
    'Event Recap', 
    'Content Promotion'
  ];
  
  // Status options with colors
  const statusOptions = [
    { value: 'planned', label: 'Planned', color: 'bg-gray-500' },
    { value: 'draft', label: 'Draft', color: 'bg-blue-500' },
    { value: 'scheduled', label: 'Scheduled', color: 'bg-yellow-500' },
    { value: 'published', label: 'Published', color: 'bg-green-500' }
  ];

  // Filter entries
  const filteredEntries = calendarEntries.filter(entry => {
    if (filters.platform !== 'all' && entry.platform !== filters.platform) return false;
    if (filters.contentType !== 'all' && entry.contentType !== filters.contentType) return false;
    if (filters.status !== 'all' && entry.status !== filters.status) return false;
    
    // Date range filtering
    if (filters.dateRange.from && new Date(entry.date) < new Date(filters.dateRange.from)) return false;
    if (filters.dateRange.to && new Date(entry.date) > new Date(filters.dateRange.to)) return false;
    
    return true;
  });

  // Handle filter changes
  const handleFilterChange = (filterName: keyof CalendarFilters, value: any) => {
    if (filterName === 'dateRange') {
      setFilters({
        ...filters,
        dateRange: {
          ...filters.dateRange,
          ...value
        }
      });
    } else {
      setFilters({
        ...filters,
        [filterName]: value
      });
    }
  };

  // Handle new entry input changes
  const handleNewEntryChange = (field: keyof CalendarEntry, value: any) => {
    setNewEntry({
      ...newEntry,
      [field]: value
    });
  };

  // Add new entry
  const addNewEntry = () => {
    if (!newEntry.title || !newEntry.date || !newEntry.platform || !newEntry.contentType) {
      // Would show an error message in a real implementation
      return;
    }

    const entry: CalendarEntry = {
      id: calendarEntries.length + 1,
      date: newEntry.date as string,
      title: newEntry.title as string,
      contentType: newEntry.contentType as string,
      platform: newEntry.platform as string,
      status: (newEntry.status as 'planned' | 'draft' | 'scheduled' | 'published') || 'planned',
      notes: newEntry.notes
    };

    setCalendarEntries([...calendarEntries, entry]);
    setNewEntry({
      date: new Date().toISOString().split('T')[0],
      status: 'planned'
    });
    setIsAddingEntry(false);
  };

  // Generate AI content suggestions for the calendar
  const generateContentSuggestions = () => {
    // This would call an API in a real implementation
    // For now, we'll simulate a successful generation
    
    const newSuggestions: CalendarEntry[] = [
      {
        id: calendarEntries.length + 1,
        date: '2025-06-01',
        title: '[AI Suggested] Monthly Beat Battle Winners Showcase',
        contentType: 'Beat Battle',
        platform: 'Instagram',
        status: 'planned',
        notes: 'AI suggested: Feature all winners from May battles with snippets of their tracks'
      },
      {
        id: calendarEntries.length + 2,
        date: '2025-06-03',
        title: '[AI Suggested] "Behind The Beat" - Producer Interview',
        contentType: 'Artist Feature',
        platform: 'YouTube',
        status: 'planned',
        notes: 'AI suggested: Interview with a local Cork producer about their workflow and inspiration'
      },
      {
        id: calendarEntries.length + 3,
        date: '2025-06-05',
        title: '[AI Suggested] Electronic Music History - Cork Edition',
        contentType: 'Content Promotion',
        platform: 'Facebook',
        status: 'planned',
        notes: 'AI suggested: Timeline of electronic music development in Cork with key milestones'
      }
    ];
    
    setCalendarEntries([...calendarEntries, ...newSuggestions]);
    // Would show a success message in a real implementation
  };

  // Group entries by date
  const groupedEntries: { [key: string]: CalendarEntry[] } = {};
  filteredEntries.forEach(entry => {
    if (!groupedEntries[entry.date]) {
      groupedEntries[entry.date] = [];
    }
    groupedEntries[entry.date].push(entry);
  });

  // Sort dates
  const sortedDates = Object.keys(groupedEntries).sort((a, b) => 
    new Date(a).getTime() - new Date(b).getTime()
  );

  return (
    <>
      <Head>
        <title>Content Calendar | EMC Content Generator</title>
        <meta name="description" content="Plan and schedule content for the Electronic Music Council" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* The particles background with z-index to appear behind content */}
      <div className="fixed inset-0 z-particles">
        <ParticlesBackground />
      </div>
      
      <Header activeLink="content-generator" />
      
      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 md:px-8 max-w-6xl mx-auto min-h-screen relative z-content">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-text-light mb-2">
              Content <span className="text-accent">Calendar</span>
            </h1>
            <p className="text-text-muted">
              Plan and schedule content for EMC's social media channels
            </p>
          </div>
          
          <div className="flex gap-3">
            <Link href="/content-generator">
              <button className="bg-background-alt hover:bg-border px-4 py-2 rounded-md text-text-light flex items-center gap-2 transition-colors">
                <i className="fas fa-arrow-left"></i>
                <span>Back to Generator</span>
              </button>
            </Link>
            <button 
              className="bg-secondary hover:bg-secondary-light px-4 py-2 rounded-md text-white flex items-center gap-2 transition-colors"
              onClick={() => generateContentSuggestions()}
            >
              <i className="fas fa-wand-magic-sparkles"></i>
              <span>AI Suggestions</span>
            </button>
            <button 
              className="bg-primary hover:bg-primary-hover px-4 py-2 rounded-md text-white flex items-center gap-2 transition-colors"
              onClick={() => setIsAddingEntry(true)}
            >
              <i className="fas fa-plus"></i>
              <span>Add Entry</span>
            </button>
          </div>
        </div>
        
        {/* Filters */}
        <div className="bg-background-alt rounded-lg p-4 mb-6 border border-border">
          <h2 className="text-xl font-semibold text-text-light mb-3">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-text-muted mb-2">Platform</label>
              <select 
                className="w-full bg-background-dark border border-border rounded-md p-2 text-text-light"
                value={filters.platform}
                onChange={(e) => handleFilterChange('platform', e.target.value)}
              >
                <option value="all">All Platforms</option>
                {platforms.map(platform => (
                  <option key={platform} value={platform}>{platform}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-text-muted mb-2">Content Type</label>
              <select 
                className="w-full bg-background-dark border border-border rounded-md p-2 text-text-light"
                value={filters.contentType}
                onChange={(e) => handleFilterChange('contentType', e.target.value)}
              >
                <option value="all">All Types</option>
                {contentTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-text-muted mb-2">Status</label>
              <select 
                className="w-full bg-background-dark border border-border rounded-md p-2 text-text-light"
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
              >
                <option value="all">All Statuses</option>
                {statusOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-text-muted mb-2">Date Range</label>
              <div className="flex gap-2">
                <input 
                  type="date" 
                  className="w-1/2 bg-background-dark border border-border rounded-md p-2 text-text-light"
                  value={filters.dateRange.from}
                  onChange={(e) => handleFilterChange('dateRange', { from: e.target.value })}
                />
                <input 
                  type="date" 
                  className="w-1/2 bg-background-dark border border-border rounded-md p-2 text-text-light"
                  value={filters.dateRange.to}
                  onChange={(e) => handleFilterChange('dateRange', { to: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Calendar View */}
        <div className="bg-background-alt rounded-lg p-6 border border-border mb-6">
          <h2 className="text-xl font-semibold text-text-light mb-4">
            Content Schedule 
            <span className="text-text-muted ml-2 text-sm font-normal">
              {filteredEntries.length} entries
            </span>
          </h2>
          
          {sortedDates.length > 0 ? (
            <div className="space-y-6">
              {sortedDates.map(date => (
                <div key={date} className="border-b border-border pb-4 mb-4 last:border-0">
                  <h3 className="text-lg font-medium text-secondary mb-3">
                    {new Date(date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </h3>
                  <div className="space-y-3">
                    {groupedEntries[date].map(entry => (
                      <div 
                        key={entry.id} 
                        className="bg-background-dark p-4 rounded-md cursor-pointer hover:bg-border transition-colors"
                        onClick={() => setSelectedEntry(entry)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-text-light">{entry.title}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-text-muted text-sm">{entry.contentType}</span>
                              <span className="text-text-muted">·</span>
                              <span className="text-text-muted text-sm">{entry.platform}</span>
                            </div>
                          </div>
                          <div className="flex items-center">
                            {statusOptions.find(option => option.value === entry.status) && (
                              <span 
                                className={`${
                                  statusOptions.find(option => option.value === entry.status)?.color
                                } px-2 py-1 rounded text-xs text-white`}
                              >
                                {statusOptions.find(option => option.value === entry.status)?.label}
                              </span>
                            )}
                          </div>
                        </div>
                        {entry.notes && (
                          <p className="text-text-muted text-sm mt-2 italic">
                            {entry.notes}
                          </p>
                        )}
                        {entry.tags && entry.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {entry.tags.map(tag => (
                              <span 
                                key={tag} 
                                className="bg-primary bg-opacity-20 text-secondary text-xs px-2 py-1 rounded"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-text-muted">
              <i className="fas fa-calendar-xmark text-3xl mb-4"></i>
              <p>No content entries match your filters</p>
            </div>
          )}
        </div>
      </main>
      
      {/* Modal for adding new entry */}
      {isAddingEntry && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-modal">
          <div className="bg-background-alt rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-text-light">Add New Calendar Entry</h2>
              <button 
                className="text-text-muted hover:text-text-light"
                onClick={() => setIsAddingEntry(false)}
              >
                <i className="fas fa-xmark text-xl"></i>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-text-muted mb-2">Title</label>
                <input 
                  type="text" 
                  className="w-full bg-background-dark border border-border rounded-md p-2 text-text-light"
                  value={newEntry.title || ''}
                  onChange={(e) => handleNewEntryChange('title', e.target.value)}
                  placeholder="Enter content title"
                />
              </div>
              
              <div>
                <label className="block text-text-muted mb-2">Date</label>
                <input 
                  type="date" 
                  className="w-full bg-background-dark border border-border rounded-md p-2 text-text-light"
                  value={newEntry.date || ''}
                  onChange={(e) => handleNewEntryChange('date', e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-text-muted mb-2">Platform</label>
                <select 
                  className="w-full bg-background-dark border border-border rounded-md p-2 text-text-light"
                  value={newEntry.platform || ''}
                  onChange={(e) => handleNewEntryChange('platform', e.target.value)}
                >
                  <option value="">Select Platform</option>
                  {platforms.map(platform => (
                    <option key={platform} value={platform}>{platform}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-text-muted mb-2">Content Type</label>
                <select 
                  className="w-full bg-background-dark border border-border rounded-md p-2 text-text-light"
                  value={newEntry.contentType || ''}
                  onChange={(e) => handleNewEntryChange('contentType', e.target.value)}
                >
                  <option value="">Select Type</option>
                  {contentTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-text-muted mb-2">Status</label>
                <select 
                  className="w-full bg-background-dark border border-border rounded-md p-2 text-text-light"
                  value={newEntry.status || 'planned'}
                  onChange={(e) => handleNewEntryChange('status', e.target.value)}
                >
                  {statusOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-text-muted mb-2">Notes (Optional)</label>
                <textarea 
                  className="w-full bg-background-dark border border-border rounded-md p-2 text-text-light"
                  value={newEntry.notes || ''}
                  onChange={(e) => handleNewEntryChange('notes', e.target.value)}
                  placeholder="Add any notes or details"
                  rows={3}
                />
              </div>
              
              <div className="flex justify-end gap-3 mt-6">
                <button 
                  className="bg-border hover:bg-background-dark px-4 py-2 rounded-md text-text-light transition-colors"
                  onClick={() => setIsAddingEntry(false)}
                >
                  Cancel
                </button>
                <button 
                  className="bg-primary hover:bg-primary-hover px-4 py-2 rounded-md text-white transition-colors"
                  onClick={addNewEntry}
                >
                  Add Entry
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Modal for viewing/editing entry */}
      {selectedEntry && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-modal">
          <div className="bg-background-alt rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-text-light">Calendar Entry</h2>
              <button 
                className="text-text-muted hover:text-text-light"
                onClick={() => setSelectedEntry(null)}
              >
                <i className="fas fa-xmark text-xl"></i>
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-text-light">{selectedEntry.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span 
                    className={`${
                      statusOptions.find(option => option.value === selectedEntry.status)?.color
                    } px-2 py-1 rounded text-xs text-white`}
                  >
                    {statusOptions.find(option => option.value === selectedEntry.status)?.label}
                  </span>
                  <span className="text-text-muted">·</span>
                  <span className="text-text-muted text-sm">{selectedEntry.date}</span>
                </div>
              </div>
              
              <div className="bg-background-dark p-3 rounded-md">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-text-muted text-sm">Platform</p>
                    <p className="text-text-light">{selectedEntry.platform}</p>
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">Content Type</p>
                    <p className="text-text-light">{selectedEntry.contentType}</p>
                  </div>
                </div>
              </div>
              
              {selectedEntry.notes && (
                <div>
                  <p className="text-text-muted text-sm">Notes</p>
                  <p className="text-text-light">{selectedEntry.notes}</p>
                </div>
              )}
              
              {selectedEntry.tags && selectedEntry.tags.length > 0 && (
                <div>
                  <p className="text-text-muted text-sm mb-1">Tags</p>
                  <div className="flex flex-wrap gap-1">
                    {selectedEntry.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="bg-primary bg-opacity-20 text-secondary text-xs px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex justify-end gap-3 mt-6">
                <button 
                  className="bg-secondary hover:bg-secondary-light px-4 py-2 rounded-md text-white transition-colors flex items-center gap-2"
                  onClick={() => {
                    // In a real implementation, this would navigate to the content generator
                    // with the entry details pre-filled
                    setSelectedEntry(null);
                  }}
                >
                  <i className="fas fa-wand-magic-sparkles"></i>
                  <span>Generate Content</span>
                </button>
                <button 
                  className="bg-primary hover:bg-primary-hover px-4 py-2 rounded-md text-white transition-colors"
                  onClick={() => {
                    // In a real implementation, this would open an edit form
                    setSelectedEntry(null);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default ContentCalendar;
