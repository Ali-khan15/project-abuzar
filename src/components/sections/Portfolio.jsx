import React, { useState } from 'react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "Residential House Takeoff",
      category: "Residential",
      thumbnail: "/portfolio/project 1/1.png",
      images: [
        "/portfolio/project 1/1.png",
        "/portfolio/project 1/2.png",
        "/portfolio/project 1/3.png",
        "/portfolio/project 1/4.png"
      ]
    },
    {
      id: 2,
      title: "Commercial Plaza",
      category: "Commercial", 
      thumbnail: "/portfolio/project 2/1.png",
      images: [
        "/portfolio/project 2/1.png",
        "/portfolio/project 2/2.png",
        "/portfolio/project 2/3.png",
        "/portfolio/project 2/4.png"
      ]
    },
    {
      id: 3,
      title: "Hospitality Project",
      category: "Hospitality",
      thumbnail: "/portfolio/project 3/1.png",
      images: [
        "/portfolio/project 3/1.png",
        "/portfolio/project 3/2.png",
        "/portfolio/project 3/3.png",
        "/portfolio/project 3/4.png"
      ]
    },
    {
      id: 4,
      title: "Multi-Family Building",
      category: "Multi-Family",
      thumbnail: "/portfolio/PROJECT 4/1.png",
      images: [
        "/portfolio/PROJECT 4/1.png",
        "/portfolio/PROJECT 4/2.png",
        "/portfolio/PROJECT 4/3.png",
        "/portfolio/PROJECT 4/4.png"
      ]
    },
    {
      id: 5,
      title: "Industrial Complex",
      category: "Industrial",
      thumbnail: "/portfolio/PROJECT 5/1.png",
      images: [
        "/portfolio/PROJECT 5/1.png",
        "/portfolio/PROJECT 5/2.png",
        "/portfolio/PROJECT 5/3.png",
        "/portfolio/PROJECT 5/4.png"
      ]
    },
    {
      id: 6,
      title: "Retail Space",
      category: "Retail",
      thumbnail: "/portfolio/PROJECT 6/1.png",
      images: [
        "/portfolio/PROJECT 6/1.png",
        "/portfolio/PROJECT 6/2.png"
      ]
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, currentImageIndex]);

  return (
   <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold-500 mb-4">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Projects we've completed for clients across the USA, Canada, UK, and Australia.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative cursor-pointer"
              onClick={() => openModal(project)}
            >
              {/* Blurry Glass Effect Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-800/20 backdrop-blur-lg border border-gold-500/10 p-6 transition-all duration-500 group-hover:border-gold-500/40 group-hover:transform group-hover:scale-105 group-hover:backdrop-blur-xl">
                
                {/* Background Blur Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project Thumbnail */}
                <div className="relative z-10 mb-4 rounded-lg overflow-hidden backdrop-blur-sm">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                
                {/* Project Info */}
                <div className="relative z-10 text-center backdrop-blur-sm bg-black/20 rounded-lg p-4 border border-white/5">
                  <span className="inline-block bg-gold-500/15 text-gold-300 px-3 py-1 rounded-full text-sm font-semibold mb-2 border border-gold-500/20 backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2 backdrop-blur-sm">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm backdrop-blur-sm">
                    {project.images.length} images • Click to view
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal - Clean Image Viewer */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer"
            onClick={closeModal}
          >
            {/* Main Image Container */}
            <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
              
              {/* Navigation Arrows */}
              {selectedProject.images.length > 1 && (
                <>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                  >
                    ‹
                  </button>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Close button */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm text-xl"
              >
                ×
              </button>

              {/* Image */}
              <div 
                className="w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedProject.images[currentImageIndex]} 
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;