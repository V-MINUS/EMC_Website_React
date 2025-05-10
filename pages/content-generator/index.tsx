import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ParticlesBackground from '../../components/ParticlesBackground';

// Tool categories for the different content generation options
interface ToolCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

// Content template types
interface ContentTemplate {
  id: number;
  name: string;
  description: string;
  icon: string;
  category: string;
  promptTemplate: string;
}

// Content calendar entry
interface CalendarEntry {
  id: number;
  date: string;
  title: string;
  type: string;
  platform: string;
  status: 'planned' | 'draft' | 'scheduled' | 'published';
  notes?: string;
}

// Social media platform
interface SocialPlatform {
  id: number;
  name: string;
  icon: string;
  characterLimit: number | null;
  imageRequired: boolean;
}

const ContentGenerator: React.FC = () => {
  // Active tool category
  const [activeCategory, setActiveCategory] = useState<string>('social');
  
  // Tool categories
  const toolCategories: ToolCategory[] = [
    {
      id: 'social',
      name: 'Social Media',
      icon: 'fab fa-instagram',
      description: 'Create posts for various social media platforms'
    },
    {
      id: 'video',
      name: 'Video Content',
      icon: 'fab fa-youtube',
      description: 'Generate scripts and descriptions for YouTube and other video content'
    },
    {
      id: 'seo',
      name: 'SEO Tools',
      icon: 'fas fa-search',
      description: 'Optimize your content for search engines'
    },
    {
      id: 'planning',
      name: 'Content Planning',
      icon: 'fas fa-calendar-alt',
      description: 'Plan your content calendar and strategy'
    },
    {
      id: 'research',
      name: 'Web Research',
      icon: 'fas fa-globe',
      description: 'Research artists, venues, and electronic music trends'
    }
  ];
  
  // Content templates for electronic music content
  const contentTemplates: ContentTemplate[] = [
    // Social Media Templates
    {
      id: 1,
      name: "Artist Spotlight",
      description: "Feature an artist with their bio, music style, and latest releases",
      icon: "fas fa-user-circle",
      category: "social",
      promptTemplate: "Create a social media post spotlighting {artistName}, a {genre} artist known for {keyTraits}. Mention their latest release '{latestRelease}' and their unique sound characteristics."
    },
    {
      id: 2,
      name: "Event Announcement",
      description: "Promote an upcoming EMC event with key details",
      icon: "fas fa-calendar-alt",
      category: "social",
      promptTemplate: "Generate an exciting announcement for {eventName} happening on {date} at {venue}. The event features {artists} and focuses on {genre} music. Tickets are {ticketPrice}."
    },
    {
      id: 3,
      name: "Beat Battle Promotion",
      description: "Promote EMC's beat battle competitions",
      icon: "fas fa-trophy",
      category: "social",
      promptTemplate: "Create a compelling post announcing our {battleName} beat battle. The theme is {theme}, submission deadline is {deadline}, and the winner gets {prize}. Use hashtag {hashtag}."
    },
    {
      id: 4,
      name: "Release Announcement",
      description: "Announce a new music release from the EMC community",
      icon: "fas fa-compact-disc",
      category: "social",
      promptTemplate: "Announce the release of '{trackName}' by {artistName}, out now on {label}. The {genre} track features {keyElements} and is available on {platforms}."
    },
    {
      id: 5,
      name: "Production Tip",
      description: "Share music production tips and techniques",
      icon: "fas fa-sliders-h",
      category: "social",
      promptTemplate: "Share a quick tip about {technique} for {genre} production. Explain how to {specificTip} to achieve {desiredResult}."
    },
    
    // Video Content Templates
    {
      id: 6,
      name: "YouTube Tutorial Script",
      description: "Create a script for a music production tutorial video",
      icon: "fab fa-youtube",
      category: "video",
      promptTemplate: "Generate a script for a {duration} minute YouTube tutorial on {topic} for {skillLevel} producers. Include an intro, {numberOfSteps} steps, and a conclusion with {callToAction}."
    },
    {
      id: 7,
      name: "Event Aftermovie Voiceover",
      description: "Create voiceover text for an event recap video",
      icon: "fas fa-film",
      category: "video",
      promptTemplate: "Create a voiceover script for a {duration} minute aftermovie of {eventName} that took place at {venue} featuring {artists}. Highlight the {atmosphere} atmosphere and {highlightMoments}."
    },
    {
      id: 8,
      name: "Artist Interview Questions",
      description: "Generate interview questions for an artist",
      icon: "fas fa-microphone",
      category: "video",
      promptTemplate: "Create {numberOfQuestions} insightful interview questions for {artistName}, a {genre} artist known for {keyWorks}. Include questions about their creative process, influences, and {specificTopics}."
    },
    
    // SEO Templates
    {
      id: 9,
      name: "Event SEO Description",
      description: "Create SEO-optimized event descriptions",
      icon: "fas fa-search",
      category: "seo",
      promptTemplate: "Generate an SEO-optimized description for {eventName} happening on {date} at {venue}. Target keywords: {targetKeywords}. Include relevant information about {artists} and the {genre} scene."
    },
    {
      id: 10,
      name: "Artist Bio Optimizer",
      description: "Optimize artist bios for search engines",
      icon: "fas fa-user-edit",
      category: "seo",
      promptTemplate: "Optimize this artist bio for SEO: {existingBio}. Target keywords: {targetKeywords}. Maintain the artist's unique voice while improving searchability."
    },
    
    // Planning Templates
    {
      id: 11,
      name: "Content Calendar Generator",
      description: "Create a content calendar for upcoming posts",
      icon: "fas fa-calendar-week",
      category: "planning",
      promptTemplate: "Generate a {timeframe} content calendar for our electronic music platform focusing on {contentFocus}. Include {numberOfPosts} post ideas covering {topicAreas} with optimal posting schedules."
    },
    
    // Research Templates
    {
      id: 12,
      name: "Artist Research",
      description: "Gather information about electronic music artists",
      icon: "fas fa-search",
      category: "research",
      promptTemplate: "Research {artistName}, gathering key information about their musical style, notable releases, career highlights, and {specificDetails}. Format as bullet points for easy content creation."
    },
    {
      id: 13,
      name: "Electronic Music Trend Analysis",
      description: "Research current trends in electronic music",
      icon: "fas fa-chart-line",
      category: "research",
      promptTemplate: "Research current trends in {subgenre} electronic music, focusing on {specificAspects}. Identify key artists, upcoming events, and production techniques defining this trend."
    }
  ];

  // Social media platforms
  const platforms: SocialPlatform[] = [
    {
      id: 1,
      name: "Instagram",
      icon: "fab fa-instagram",
      characterLimit: 2200,
      imageRequired: true
    },
    {
      id: 2,
      name: "Twitter",
      icon: "fab fa-twitter",
      characterLimit: 280,
      imageRequired: false
    },
    {
      id: 3,
      name: "Facebook",
      icon: "fab fa-facebook",
      characterLimit: 63206,
      imageRequired: false
    },
    {
      id: 4,
      name: "TikTok",
      icon: "fab fa-tiktok",
      characterLimit: 2200,
      imageRequired: true
    }
  ];

  // Additional state for new features
  const [contentCalendar, setContentCalendar] = useState<CalendarEntry[]>([]);
  const [researchResults, setResearchResults] = useState<string>('');
  const [seoSuggestions, setSeoSuggestions] = useState<string[]>([]);
  
  // States
  const [selectedTemplate, setSelectedTemplate] = useState<ContentTemplate | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<SocialPlatform | null>(null);
  const [templateFields, setTemplateFields] = useState<{[key: string]: string}>({});
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Parse the template to extract required fields
  const extractFields = (template: string): string[] => {
    const matches = template.match(/\{([^}]+)\}/g) || [];
    return matches.map(match => match.replace(/[{}]/g, ''));
  };

  // Update form fields when template changes
  const handleTemplateChange = (template: ContentTemplate) => {
    setSelectedTemplate(template);
    const fields = extractFields(template.promptTemplate);
    const newFields: {[key: string]: string} = {};
    fields.forEach(field => {
      newFields[field] = '';
    });
    setTemplateFields(newFields);
    setGeneratedContent('');
    setGeneratedImage(null);
  };

  // Handle form input changes
  const handleFieldChange = (field: string, value: string) => {
    setTemplateFields(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  // Filter templates by active category
  const filteredTemplates = contentTemplates.filter(
    template => template.category === activeCategory
  );
  
  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSelectedTemplate(null);
    setTemplateFields({});
    setGeneratedContent('');
    setGeneratedImage(null);
  };
  
  // SEO suggestions based on content
  const generateSeoSuggestions = (content: string) => {
    // In a real implementation, this would use NLP to extract keywords
    // For now, we'll simulate with some electronic music related keywords
    const musicKeywords = [
      'electronic music cork', 'electronic music ireland', 'beat battle competition',
      'techno events cork', 'house music ireland', 'electronic music council',
      'electronic music production', 'cork nightlife', 'irish electronic artists'
    ];
    
    // Randomly select 3-5 keywords
    const numSuggestions = Math.floor(Math.random() * 3) + 3;
    const shuffled = [...musicKeywords].sort(() => 0.5 - Math.random());
    
    setSeoSuggestions(shuffled.slice(0, numSuggestions));
  };

  // Generate content based on template and filled fields
  const generateContent = async () => {
    if (!selectedTemplate) return;
    
    // Only require platform selection for social media posts
    if (activeCategory === 'social' && !selectedPlatform) return;
    
    setIsGenerating(true);
    
    // In a real implementation, this would call an API with OpenAI or similar
    // For now, we'll simulate the API call with a timeout
    
    setTimeout(() => {
      // Fill in the template with the provided values
      let content = selectedTemplate.promptTemplate;
      
      Object.entries(templateFields).forEach(([key, value]) => {
        content = content.replace(`{${key}}`, value);
      });
      
      // Simulate AI-generated content
      let aiContent = '';
      
      switch(selectedTemplate.id) {
        case 1: // Artist Spotlight
          aiContent = `✨ ARTIST SPOTLIGHT: ${templateFields.artistName} ✨\n\nWe're shining our spotlight on ${templateFields.artistName}, the ${templateFields.genre} producer who's been turning heads with their unique ${templateFields.keyTraits}.\n\nTheir latest release "${templateFields.latestRelease}" showcases their signature sound and pushes boundaries in new exciting directions.\n\nHave you checked out their music yet? Drop your favorite track in the comments! 🎧\n\n#EMCSpotlight #${templateFields.genre.replace(' ', '')} #ElectronicMusic`;
          break;
        case 2: // Event Announcement
          aiContent = `🔊 UPCOMING: ${templateFields.eventName} 🔊\n\nMark your calendars! We're thrilled to announce ${templateFields.eventName} happening on ${templateFields.date} at ${templateFields.venue}.\n\nFeaturing: ${templateFields.artists}\nGenre: ${templateFields.genre}\nTickets: ${templateFields.ticketPrice}\n\nThis is going to be a night to remember! Get your tickets now before they sell out.\n\n#EMCEvents #${templateFields.genre.replace(' ', '')} #CorkNightlife`;
          break;
        case 3: // Beat Battle
          aiContent = `⚡ BEAT BATTLE ALERT: ${templateFields.battleName} ⚡\n\nCalling all producers! Our ${templateFields.battleName} beat battle is now OPEN for submissions.\n\nTheme: ${templateFields.theme}\nDeadline: ${templateFields.deadline}\nPrize: ${templateFields.prize}\n\nShow us what you've got and be crowned the champion! Use ${templateFields.hashtag} when you submit.\n\n#EMCBeatBattle #ProducerChallenge #${templateFields.theme.replace(' ', '')}`;
          break;
        default:
          aiContent = "Generated content will appear here...";
      }
      
      // For a real implementation, we would generate an image using an API
      // For now, set a placeholder image
      setGeneratedImage('/images/events/small-crab.jpg');
      
      // Set the generated content
      setGeneratedContent(aiContent);
      
      // Generate SEO suggestions if relevant
      if (activeCategory === 'social' || activeCategory === 'seo') {
        generateSeoSuggestions(aiContent);
      }
      
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>EMC Content Generator | Electronic Music Council</title>
        <meta name="description" content="Generate content for the Electronic Music Council" />
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
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-text-light mb-4">
              EMC <span className="text-accent">Content Generator</span>
            </h1>
            <p className="text-text-muted text-lg">
              All-in-one AI content creation for Electronic Music Council
            </p>
          </div>
          <div>
            <Link href="/content-generator/calendar">
              <button className="bg-secondary hover:bg-secondary-light px-4 py-2 rounded-md text-white flex items-center gap-2 transition-colors">
                <i className="fas fa-calendar-alt"></i>
                <span>Content Calendar</span>
              </button>
            </Link>
          </div>
        </div>
        
        {/* Tool Category Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {toolCategories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-background-alt text-text-muted hover:bg-border hover:text-text-light'
                } transition-colors`}
                onClick={() => handleCategoryChange(category.id)}
              >
                <i className={`${category.icon}`}></i>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column - Templates */}
          <div className="bg-background-alt rounded-lg p-6 border border-border">
            <h2 className="text-xl font-semibold text-text-light mb-4">
              {activeCategory === 'social' && 'Social Media Templates'}
              {activeCategory === 'video' && 'Video Content Templates'}
              {activeCategory === 'seo' && 'SEO Tools'}
              {activeCategory === 'planning' && 'Content Planning Tools'}
              {activeCategory === 'research' && 'Research Tools'}
            </h2>
            <div className="space-y-4">
              {filteredTemplates.map(template => (
                <div 
                  key={template.id}
                  className={`cursor-pointer p-4 rounded-md transition-all ${
                    selectedTemplate?.id === template.id 
                      ? 'bg-primary bg-opacity-20 border border-primary' 
                      : 'bg-background-dark hover:bg-background-dark hover:bg-opacity-80'
                  }`}
                  onClick={() => handleTemplateChange(template)}
                >
                  <div className="flex items-center gap-3">
                    <i className={`${template.icon} text-secondary text-xl`}></i>
                    <h3 className="font-medium text-text-light">{template.name}</h3>
                  </div>
                  <p className="text-text-muted text-sm mt-2">{template.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Middle column - Form */}
          <div className="bg-background-alt rounded-lg p-6 border border-border">
            <h2 className="text-xl font-semibold text-text-light mb-4">
              {selectedTemplate ? selectedTemplate.name : 'Template Details'}
            </h2>
            
            {selectedTemplate ? (
              <>
                <h3 className="text-lg font-medium text-secondary mb-2">{selectedTemplate.name}</h3>
                <div className="space-y-4 mt-4">
                  {extractFields(selectedTemplate.promptTemplate).map(field => (
                    <div key={field} className="form-group">
                      <label className="block text-text-light mb-2 capitalize">
                        {field.replace(/([A-Z])/g, ' $1').trim()}
                      </label>
                      <input 
                        type="text" 
                        className="w-full bg-background-dark border border-border rounded-md p-2 text-text-light"
                        value={templateFields[field] || ''}
                        onChange={(e) => handleFieldChange(field, e.target.value)}
                        placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase().trim()}`}
                      />
                    </div>
                  ))}
                  
                  {activeCategory === 'social' && (
                    <div className="form-group mt-6">
                      <label className="block text-text-light mb-2">Platform</label>
                      <div className="grid grid-cols-2 gap-2">
                        {platforms.map(platform => (
                          <div 
                            key={platform.id}
                            className={`cursor-pointer p-3 rounded-md flex items-center gap-2 transition-all ${
                              selectedPlatform?.id === platform.id 
                                ? 'bg-primary bg-opacity-20 border border-primary' 
                                : 'bg-background-dark hover:bg-background-dark hover:bg-opacity-80'
                            }`}
                            onClick={() => setSelectedPlatform(platform)}
                          >
                            <i className={`${platform.icon} text-secondary`}></i>
                            <span className="text-text-light">{platform.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <button 
                    className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-4 rounded-md mt-4 transition-colors flex justify-center items-center"
                    onClick={generateContent}
                    disabled={isGenerating || (activeCategory === 'social' && !selectedPlatform)}
                  >
                    {isGenerating ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating...
                      </>
                    ) : "Generate Content"}
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-12 text-text-muted">
                <i className="fas fa-hand-point-left text-3xl mb-4"></i>
                <p>Select a template to get started</p>
              </div>
            )}
          </div>
          
          {/* Right column - Output */}
          <div className="bg-background-alt rounded-lg p-6 border border-border">
            <h2 className="text-xl font-semibold text-text-light mb-4">Generated Content</h2>
            
            {generatedContent ? (
              <div className="space-y-4">
                {generatedImage && (
                  <div className="mb-4">
                    <img 
                      src={generatedImage} 
                      alt="Generated content" 
                      className="rounded-md w-full h-48 object-cover" 
                    />
                  </div>
                )}
                <div className="bg-background-dark p-4 rounded-md">
                  <pre className="whitespace-pre-wrap text-text-light font-body text-sm">
                    {generatedContent}
                  </pre>
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  <button className="bg-secondary px-4 py-2 rounded-md text-white flex items-center gap-2">
                    <i className="fas fa-copy"></i> Copy Text
                  </button>
                  {generatedImage && (
                    <button className="bg-secondary px-4 py-2 rounded-md text-white flex items-center gap-2">
                      <i className="fas fa-download"></i> Download Image
                    </button>
                  )}
                  <button className="bg-secondary px-4 py-2 rounded-md text-white flex items-center gap-2">
                    <i className="fas fa-calendar-plus"></i> Add to Calendar
                  </button>
                </div>
                
                {/* SEO Suggestions if available */}
                {seoSuggestions.length > 0 && (
                  <div className="mt-6 bg-background-dark p-4 rounded-md">
                    <h3 className="text-lg font-medium text-secondary mb-2">SEO Suggestions</h3>
                    <ul className="list-disc list-inside text-text-light">
                      {seoSuggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12 text-text-muted">
                <i className="fas fa-wand-magic-sparkles text-3xl mb-4"></i>
                <p>Your generated content will appear here</p>
                <p className="text-xs text-text-muted mt-3">
                  Using AI-powered technology to generate electronic music content
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ContentGenerator;
