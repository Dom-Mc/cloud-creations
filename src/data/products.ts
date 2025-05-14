import { Product } from '../types/product';

export const productsStub: Product[] = [
  {
    id: '1',
    name: 'CloudShop Pro',
    slug: 'cloudshop-pro',
    category: 'photo',
    description: 'Professional image editing software for photographers, designers, and artists. Create and enhance photographs, illustrations, and graphics with the industry\'s leading imaging software. From basic adjustments to advanced compositing, CloudShop Pro provides all the tools you need for professional photo manipulation and creative design work.',
    price: 20.99,
    features: [
      'Advanced layer management and editing',
      'AI-powered selection tools and filters',
      'Professional color correction and grading',
      'Extensive brush and pattern libraries',
      'Smart object support',
      'Neural filters for portrait enhancement',
      'Cloud storage integration',
      'Seamless mobile companion app sync'
    ],
    reviews: [
      {
        id: '1',
        userName: 'Sarah Chen',
        rating: 5,
        comment: 'The AI selection tools have saved me countless hours. Absolutely essential for my photography business.',
        date: '2024-02-15'
      },
      {
        id: '2',
        userName: 'Marcus Rodriguez',
        rating: 4,
        comment: 'Great software, though the learning curve is steep. The neural filters are game-changing.',
        date: '2024-01-30'
      }
    ]
  },
  {
    id: '2',
    name: 'CloudDraw Vector',
    slug: 'clouddraw-vector',
    category: 'design',
    description: 'Industry-standard vector graphics software for creating logos, icons, drawings, typography, and complex illustrations. Perfect for designers who need precise control over shapes and paths. Create everything from simple icons to complex illustrations that scale perfectly for any size display.',
    price: 20.99,
    features: [
      'Precise vector editing tools',
      'Advanced typography controls',
      'Pattern and symbol creation',
      'Freeform gradient controls',
      'Real-time collaboration',
      'Global editing capabilities',
      'Custom workspace layouts',
      'Extensive font management'
    ],
    reviews: [
      {
        id: '3',
        userName: 'David Park',
        rating: 5,
        comment: 'The precision of the vector tools is unmatched. Essential for any serious designer.',
        date: '2024-02-10'
      },
      {
        id: '4',
        userName: 'Emma Thompson',
        rating: 5,
        comment: 'Using this for logo design has transformed my workflow. The new features are fantastic.',
        date: '2024-02-01'
      }
    ]
  },
  {
    id: '3',
    name: 'CloudCut Pro',
    slug: 'cloudcut-pro',
    category: 'video',
    description: 'Professional video editing software that lets you craft polished films, TV shows, and web videos. Industry-leading tools for video editing, motion graphics, and audio post-production. From social media shorts to feature films, edit everything with precision and creative freedom.',
    price: 29.99,
    features: [
      'Multi-camera editing',
      'Advanced color grading tools',
      'AI-powered audio enhancement',
      'Native format support for all cameras',
      'Integrated motion graphics',
      'Auto-reframe for social media',
      'Cloud collaboration features',
      'Professional audio mixing tools'
    ],
    reviews: [
      {
        id: '5',
        userName: 'James Wilson',
        rating: 4,
        comment: 'Powerful editing tools and great integration with other Cloud apps. Performance could be better.',
        date: '2024-02-12'
      },
      {
        id: '6',
        userName: 'Lisa Chang',
        rating: 5,
        comment: 'The auto-reframe feature is a lifesaver for creating social media content.',
        date: '2024-01-25'
      }
    ]
  },
  {
    id: '4',
    name: 'CloudMotion Studio',
    slug: 'cloudmotion-studio',
    category: 'video',
    description: 'Create cinematic movie titles, intros, transitions, and dazzling animations. Industry-standard motion graphics and visual effects software for animators, designers, and compositors. Transform your video projects with professional visual effects and dynamic motion graphics.',
    price: 29.99,
    features: [
      '3D camera tracking',
      'Advanced keyframe controls',
      'Expression-based animations',
      'Extensive effect library',
      'Cinema 4D integration',
      'Character animator',
      'Rotoscoping tools',
      'Real-time 3D rendering'
    ],
    reviews: [
      {
        id: '7',
        userName: 'Michael Brown',
        rating: 5,
        comment: 'The 3D integration and expression controls are incredible. Best motion graphics software available.',
        date: '2024-02-08'
      },
      {
        id: '8',
        userName: 'Ana Silva',
        rating: 4,
        comment: 'Powerful but resource-intensive. The results are worth it though.',
        date: '2024-01-20'
      }
    ]
  },
  {
    id: '5',
    name: 'CloudPrototype',
    slug: 'cloudprototype',
    category: 'web',
    description: 'Design, prototype, and share user experiences for web, mobile, and more. Create interactive prototypes with advanced animation controls and real-time collaboration. Perfect for UX/UI designers who need to quickly iterate and share their designs with stakeholders.',
    price: 14.99,
    features: [
      'Responsive resize',
      'Auto-animate transitions',
      'Component states',
      'Voice prototyping',
      'Real-time collaboration',
      'Design systems support',
      'Developer handoff tools',
      'Cloud document sharing'
    ],
    reviews: [
      {
        id: '9',
        userName: 'Rachel Green',
        rating: 5,
        comment: 'The collaboration features are fantastic. Makes working with remote teams so much easier.',
        date: '2024-02-14'
      },
      {
        id: '10',
        userName: 'Tom Martinez',
        rating: 4,
        comment: 'Great for prototyping, though could use more advanced animation controls.',
        date: '2024-01-28'
      }
    ]
  },
  {
    id: '6',
    name: 'CloudAudio Pro',
    slug: 'cloudaudio-pro',
    category: 'audio',
    description: 'Professional audio workstation designed for audio and video production. Record, edit, mix, and restore audio with the industry\'s best digital audio editing software. Perfect for sound designers, podcasters, and audio engineers who need precise control over their audio projects.',
    price: 20.99,
    features: [
      'Multi-track editing',
      'Spectral frequency editing',
      'Noise reduction tools',
      'Batch processing',
      'Podcast production tools',
      'Sound removal technology',
      'Studio effects',
      'Audio restoration tools'
    ],
    reviews: [
      {
        id: '11',
        userName: 'Chris Taylor',
        rating: 5,
        comment: 'The noise reduction and audio restoration tools are incredible. Perfect for podcast production.',
        date: '2024-02-11'
      },
      {
        id: '12',
        userName: 'Maria Garcia',
        rating: 4,
        comment: 'Excellent for audio cleanup and restoration. Interface could be more intuitive.',
        date: '2024-01-22'
      }
    ]
  },
  {
    id: '7',
    name: 'Cloud3D Materials',
    slug: 'cloud3d-materials',
    category: '3d',
    description: 'Create photorealistic 3D materials and textures for games, film, and design. Industry-leading tools for creating and editing PBR materials with advanced procedural capabilities. Essential for 3D artists and game developers who need high-quality material creation tools.',
    price: 24.99,
    features: [
      'PBR material creation',
      'Procedural texture generation',
      'Advanced material layering',
      'Real-time preview',
      'Extensive material library',
      'Game engine integration',
      'Batch export options',
      'Multi-channel texturing'
    ],
    reviews: [
      {
        id: '13',
        userName: 'Alex Johnson',
        rating: 5,
        comment: 'The procedural tools save so much time. Essential for any serious 3D artist.',
        date: '2024-02-09'
      },
      {
        id: '14',
        userName: 'Sophie Williams',
        rating: 4,
        comment: 'Great for creating realistic materials. The node system takes time to master.',
        date: '2024-01-19'
      }
    ]
  },
  {
    id: '8',
    name: 'Cloud3D Scene',
    slug: 'cloud3d-scene',
    category: '3d',
    description: 'Create and render 3D scenes with ease. Combine 2D and 3D assets to create product mockups, abstract art, and scene visualizations. Perfect for designers who want to incorporate 3D elements into their work without learning complex 3D software.',
    price: 19.99,
    features: [
      '3D scene composition',
      'Material editing',
      'Lighting controls',
      'Asset library integration',
      'One-click rendering',
      'Cloud rendering',
      '2D-3D integration',
      'Easy asset import'
    ],
    reviews: [
      {
        id: '15',
        userName: 'Kevin Lee',
        rating: 4,
        comment: 'Perfect for creating product mockups. The rendering quality is impressive.',
        date: '2024-02-13'
      },
      {
        id: '16',
        userName: 'Isabella Romano',
        rating: 5,
        comment: 'Makes 3D accessible for graphic designers. Love the integration with other Cloud apps.',
        date: '2024-01-27'
      }
    ]
  },
  {
    id: '9',
    name: 'CloudAnimate',
    slug: 'cloudanimate',
    category: 'design',
    description: 'Create interactive animations for games, TV shows, and web projects. Powerful animation tools for creating frame-by-frame animation, motion tweens, and interactive content. Ideal for animators, game developers, and web designers who need to create engaging animated content.',
    price: 20.99,
    features: [
      'Frame-by-frame animation',
      'Motion tweening',
      'Character rigging',
      'Vector brush tools',
      'Audio syncing',
      'HTML5 Canvas export',
      'WebGL rendering',
      'Asset reuse library'
    ],
    reviews: [
      {
        id: '17',
        userName: 'Ryan Cooper',
        rating: 4,
        comment: 'Great for web animations. The HTML5 export feature is very useful.',
        date: '2024-02-07'
      },
      {
        id: '18',
        userName: 'Nina Patel',
        rating: 5,
        comment: 'The character rigging tools are fantastic. Perfect for my animation projects.',
        date: '2024-01-21'
      }
    ]
  }
]; 