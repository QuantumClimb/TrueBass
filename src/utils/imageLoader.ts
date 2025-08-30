// Utility function to dynamically load gallery images from folder structure
export const loadGalleryImages = () => {
  const categories = {
    'Events': { 
      icon: 'Calendar', 
      description: 'Corporate events, private parties, and special occasions',
      path: '/images/Events/',
      images: [
        'Event_11.webp', 'Event_12.webp', 'Event_13.webp', 'Event_14.webp',
        'events000.webp', 'events001.webp', 'events002.webp', 'events003.webp',
        'events004.webp', 'events005.webp', 'events006.webp', 'events007.webp',
        'events008.webp', 'events009.webp', 'events010.webp', 'events011.webp',
        'events012.webp', 'events013.webp', 'events014.webp', 'events015.webp',
        'events016.webp', 'events017.webp', 'events018.webp', 'events019.webp',
        'events020.webp', 'events021.webp', 'events022.webp', 'events023.webp',
        'events024.webp', 'events025.webp', 'events026.webp', 'events027.webp',
        'events028.webp', 'events029.webp'
      ]
    },
    'Stage Setup': { 
      icon: 'Video', 
      description: 'Professional stage configurations and equipment setup',
      path: '/images/Stage Setup/',
      images: [
        'stage11.webp', 'stage12.webp',
        'stagesetup000.webp', 'stagesetup001.webp', 'stagesetup002.webp',
        'stagesetup003.webp', 'stagesetup004.webp', 'stagesetup005.webp',
        'stagesetup006.webp', 'stagesetup007.webp', 'stagesetup008.webp',
        'stagesetup009.webp', 'stagesetup010.webp', 'stagesetup011.webp',
        'stagesetup012.webp', 'stagesetup013.webp', 'stagesetup014.webp',
        'stagesetup015.webp', 'stagesetup016.webp', 'stagesetup017.webp',
        'stagesetup018.webp', 'stagesetup019.webp', 'stagesetup020.webp'
      ]
    },
    'Back Line': { 
      icon: 'Music', 
      description: 'Back line equipment and stage gear',
      path: '/images/Back Line/',
      images: [
        'backline017.webp', 'backline018.webp',
        'BackLine000.webp', 'BackLine001.webp', 'BackLine002.webp',
        'BackLine003.webp', 'BackLine004.webp', 'BackLine005.webp',
        'BackLine006.webp', 'BackLine008.webp', 'BackLine009.webp',
        'BackLine011.webp', 'BackLine012.webp', 'BackLine013.webp',
        'BackLine014.webp', 'BackLine015.webp', 'BackLine016.webp',
        'BackLine019.webp', 'BackLine020.webp', 'BackLine022.webp',
        'BackLine023.webp', 'BackLine024.webp', 'BackLine025.webp',
        'BackLine026.webp', 'BackLine027.webp', 'BackLine028.webp',
        'BackLine029.webp'
      ]
    },
    'Projects': { 
      icon: 'Video', 
      description: 'Custom projects and installations',
      path: '/images/Projects/',
      images: [
        'projects1.webp',
        'projects000.webp', 'projects002.webp', 'projects003.webp',
        'projects004.webp', 'projects005.webp', 'projects006.webp',
        'projects007.webp', 'projects008.webp', 'projects010.webp',
        'projects011.webp', 'projects012.webp', 'projects017.webp',
        'projects018.webp', 'projects020.webp', 'projects023.webp',
        'projects024.webp'
      ]
    },
    'Concerts': { 
      icon: 'Music', 
      description: 'Live concert setups and performances',
      path: '/images/Concerts/',
      images: [
        'concerts000.webp', 'concerts001.webp', 'concerts002.webp',
        'concerts003.webp', 'concerts004.webp', 'concerts005.webp',
        'concerts006.webp', 'concerts007.webp', 'concerts008.webp',
        'concerts009.webp', 'concerts010.webp', 'concerts011.webp',
        'concerts012.webp', 'concerts013.webp', 'concerts014.webp',
        'concerts015.webp', 'concerts016.webp', 'concerts017.webp',
        'concerts018.webp', 'concerts019.webp', 'concerts020.webp',
        'concerts021.webp', 'concerts022.webp', 'concerts023.webp'
      ]
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
    config.images.forEach((filename, index) => {
      allImages.push({
        src: `${config.path}${filename}`,
        category,
        title: `${category} ${index + 1}`,
        description: `${config.description} - Image ${index + 1}`,
        id: `${category}-${index}`
      });
    });
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
