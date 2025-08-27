// Utility function to dynamically load gallery images from folder structure
export const loadGalleryImages = () => {
  const categories = {
    'Events': { 
      icon: 'Calendar', 
      description: 'Corporate events, private parties, and special occasions',
      path: '/images/Events/',
      count: 30
    },
    'Stage Setup': { 
      icon: 'Video', 
      description: 'Professional stage configurations and equipment setup',
      path: '/images/Stage Setup/',
      count: 21
    },
    'Back Line': { 
      icon: 'Music', 
      description: 'Back line equipment and stage gear',
      path: '/images/Back Line/',
      count: 30
    },
    'Projects': { 
      icon: 'Video', 
      description: 'Custom projects and installations',
      path: '/images/Projects/',
      count: 29
    },
    'Concerts': { 
      icon: 'Music', 
      description: 'Live concert setups and performances',
      path: '/images/Concerts/',
      count: 24
    }
  };

  const allImages: Array<{
    src: string;
    category: string;
    title: string;
    description: string;
    id: string;
  }> = [];

  Object.entries(categories).forEach(([category, config]) => {
    for (let i = 0; i < config.count; i++) {
      const paddedIndex = i.toString().padStart(3, '0');
      let filename: string;
      
      // Handle different naming conventions for each folder
      if (category === 'Stage Setup') {
        filename = `stagesetup${paddedIndex}.webp`;
      } else if (category === 'Back Line') {
        filename = `BackLine${paddedIndex}.webp`;
      } else {
        filename = `${category.toLowerCase()}${paddedIndex}.webp`;
      }

      allImages.push({
        src: `${config.path}${filename}`,
        category,
        title: `${category} ${i + 1}`,
        description: `${config.description} - Image ${i + 1}`,
        id: `${category}-${i}`
      });
    }
  });

  return allImages;
};

// Get images by category
export const getImagesByCategory = (category: string) => {
  const allImages = loadGalleryImages();
  if (category === 'all') return allImages;
  return allImages.filter(img => img.category === category);
};

// Get category info
export const getCategoryInfo = () => {
  return {
    'Events': { icon: 'Calendar', description: 'Corporate events, private parties, and special occasions' },
    'Stage Setup': { icon: 'Video', description: 'Professional stage configurations and equipment setup' },
    'Back Line': { icon: 'Music', description: 'Back line equipment and stage gear' },
    'Projects': { icon: 'Video', description: 'Custom projects and installations' },
    'Concerts': { icon: 'Music', description: 'Live concert setups and performances' }
  };
};
