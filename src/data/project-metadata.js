// Project and Service metadata derived from image analysis
export const projectMetadata = {
  // Services Section Images
  services: {
    "Custom Renovation & Remodels.avif": {
      title: "Custom Home Building",
      description: "From concept to completion, we build the home of your dreams with quality craftsmanship and attention to detail.",
      image: "/images/Custom Renovation & Remodels.avif",
      metadata: {
        format: "heif",
        dimensions: "1200x675",
        quality: "High-resolution professional rendering",
        aspectRatio: "16:9"
      }
    },
    "Custom Remodel.avif": {
      title: "Renovations & Remodels",
      description: "Transform your existing space with our expert renovation and remodeling services tailored to your needs.",
      image: "/images/Custom Remodel.avif",
      metadata: {
        format: "heif",
        dimensions: "1200x675",
        quality: "High-resolution professional rendering",
        aspectRatio: "16:9"
      }
    },
    "Custom Kitchens.avif": {
      title: "Custom Kitchens & Bathrooms",
      description: "Create beautiful, functional spaces with our custom kitchen and bathroom design and installation services.",
      image: "/images/Custom Kitchens.avif",
      metadata: {
        format: "heif",
        dimensions: "1200x675",
        quality: "High-resolution professional rendering",
        aspectRatio: "16:9"
      }
    },
    "Home Office Addition.avif": {
      title: "Home Additions",
      description: "Expand your living space with seamless additions that match your home's style and meet your family's needs.",
      image: "/images/Home Office Addition.avif",
      metadata: {
        format: "heif",
        dimensions: "1200x800",
        quality: "High-resolution professional rendering",
        aspectRatio: "3:2"
      }
    },
    "income-properties.jpg": {
      title: "Income Properties",
      description: "Build or convert spaces into income-generating properties with basement apartments, casitas, and more.",
      image: "/images/income-properties.jpg",
      metadata: {
        format: "jpeg",
        dimensions: "4160x6240",
        quality: "High-resolution professional photo",
        aspectRatio: "2:3"
      }
    },
    "Master Suite Renovation.avif": {
      title: "Custom Features",
      description: "Enhance your home with custom trim, molding, doors, and unique architectural elements.",
      image: "/images/Master Suite Renovation.avif",
      metadata: {
        format: "heif",
        dimensions: "1200x675",
        quality: "High-resolution professional rendering",
        aspectRatio: "16:9"
      }
    }
  },

  // Projects Section Images
  projects: {
    "Mountain Retreat with Wrap Around Deck and a Vaulted Central Core.avif": {
      title: "Mountain Retreat",
      description: "Peaceful mountain living with elevated views and rustic elegance.",
      image: "/images/Mountain Retreat with Wrap Around Deck and a Vaulted Central Core.avif",
      metadata: {
        format: "heif",
        dimensions: "1200x800",
        quality: "High-resolution professional rendering",
        aspectRatio: "3:2",
        features: "Wrap-around deck, vaulted central core, mountain views"
      }
    },
    "Modern Farmhouse.avif": {
      title: "Modern Farmhouse",
      description: "Classic charm meets modern design in this fresh farmhouse build.",
      image: "/images/Modern Farmhouse.avif",
      metadata: {
        format: "heif",
        dimensions: "1200x800",
        quality: "High-resolution professional rendering",
        aspectRatio: "3:2",
        features: "Modern farmhouse design, open concept, traditional elements"
      }
    },
    "Utah Retreat.avif": {
      title: "Utah Retreat",
      description: "A relaxing desert escape crafted for style and tranquility.",
      image: "/images/Utah Retreat.avif",
      metadata: {
        format: "heif",
        dimensions: "1200x800",
        quality: "High-resolution professional rendering",
        aspectRatio: "3:2",
        features: "Desert-inspired design, outdoor living spaces"
      }
    },
    "Modern Mountain House Plan with Panoramic Views Expansion.avif": {
      title: "Modern Mountain House",
      description: "Expansive views and indoor-outdoor flow define this modern home.",
      image: "/images/Modern Mountain House Plan with Panoramic Views Expansion.avif",
      metadata: {
        format: "heif",
        dimensions: "1200x800",
        quality: "High-resolution professional rendering",
        aspectRatio: "3:2",
        features: "Panoramic views, modern design, indoor-outdoor flow"
      }
    },
    "New American Farmhouse.avif": {
      title: "New American Farmhouse",
      description: "A fresh take on traditional living with generous open space.",
      image: "/images/New American Farmhouse.avif",
      metadata: {
        format: "heif",
        dimensions: "1200x675",
        quality: "High-resolution professional rendering",
        aspectRatio: "16:9",
        features: "New American style, open concept, traditional elements"
      }
    },
    "Modern Farmhouse Plan with French Door Greeting.avif": {
      title: "French Door Greeting",
      description: "Graceful French doors set the tone for a warm, inviting home.",
      image: "/images/Modern Farmhouse Plan with French Door Greeting.avif",
      metadata: {
        format: "heif",
        dimensions: "1200x800",
        quality: "High-resolution professional rendering",
        aspectRatio: "3:2",
        features: "French doors, welcoming entrance, modern farmhouse style"
      }
    }
  },

  // Additional high-quality images for potential use
  additional: {
    "Luxury Remodel.avif": {
      title: "Luxury Remodel",
      description: "Premium renovation services for discerning homeowners.",
      image: "/images/Luxury Remodel.avif",
      metadata: {
        format: "heif",
        dimensions: "1200x675",
        quality: "High-resolution professional rendering",
        aspectRatio: "16:9"
      }
    },
    "Modern Man Cave.avif": {
      title: "Modern Man Cave",
      description: "Contemporary entertainment spaces designed for comfort and style.",
      image: "/images/Modern Man Cave.avif",
      metadata: {
        format: "heif",
        dimensions: "1200x800",
        quality: "High-resolution professional rendering",
        aspectRatio: "3:2"
      }
    },
    "Custom Bathrooms.avif": {
      title: "Custom Bathrooms",
      description: "Luxurious bathroom designs tailored to your lifestyle.",
      image: "/images/Custom Bathrooms.avif",
      metadata: {
        format: "heif",
        dimensions: "1200x675",
        quality: "High-resolution professional rendering",
        aspectRatio: "16:9"
      }
    }
  }
};

// Helper function to get metadata for a specific image
export function getImageMetadata(imagePath) {
  const filename = imagePath.split('/').pop();
  return projectMetadata.services[filename] || 
         projectMetadata.projects[filename] || 
         projectMetadata.additional[filename] || 
         null;
}

// Helper function to get all services with metadata
export function getServicesWithMetadata() {
  return Object.values(projectMetadata.services);
}

// Helper function to get all projects with metadata
export function getProjectsWithMetadata() {
  return Object.values(projectMetadata.projects);
} 