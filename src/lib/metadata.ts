import { Metadata } from 'next'

const defaultKeywords = [
    // Primary City Keywords
    'garage builders edmonton',
    'garage builders calgary',
    'detached garage edmonton',
    'detached garage calgary',
    'garage construction edmonton',
    'garage construction calgary',
    
    // Service Area Keywords
    'garage builders fort saskatchewan',
    'garage builders sherwood park',
    'garage builders beaumont',
    'garage builders leduc',
    'garage builders spruce grove',
    'garage builders st albert',
    'garage builders alberta',
    
    // Regional Keywords
    'alberta garage builders',
    'edmonton area garage construction',
    'greater edmonton area garages',
    'edmonton metropolitan region garages',
    'central alberta garage builders',
    'northern alberta garage construction',
    
    // Service Types by Area
    'custom garage builder alberta',
    'garage packages edmonton region',
    'garage with suite edmonton area',
    'laneway homes alberta',
    'detached garage fort saskatchewan',
    'garage suite sherwood park',
    'garage renovation beaumont',
    'garage contractor leduc',
    'garage development spruce grove',
    'garage construction st albert',
    
    // General Terms
    'star garages',
    'premium garage builder',
    'residential garage construction',
    'garage development permit',
    'garage building permit',
    'garage contractor'
]

const defaultDescription = 'Alberta\'s premier garage builders with over 10 years of experience. Serving Edmonton, Fort Saskatchewan, Sherwood Park, Beaumont, Leduc, Spruce Grove, St. Albert and surrounding areas. Specializing in custom detached garages, garage suites, and laneway homes. Professional construction, competitive pricing, and all permits included. Get a free estimate today!'

export const siteConfig = {
    metadataBase: new URL('https://stargarages.ca'),
    title: 'Star Garages | Premium Garage Builders Edmonton & Calgary',
    description: defaultDescription,
    keywords: defaultKeywords.join(', '),
    authors: [{ name: 'Star Garages', url: 'https://stargarages.ca' }],
    creator: 'Star Garages',
    themeColor: '#C5A572', // star-gold color
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        type: 'website',
        locale: 'en_CA',
        url: 'https://stargarages.ca',
        title: 'Star Garages | Premium Garage Builders Edmonton & Calgary',
        description: defaultDescription,
        siteName: 'Star Garages',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Star Garages - Premium Garage Builders Edmonton & Calgary',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Star Garages | Premium Garage Builders Edmonton & Calgary',
        description: defaultDescription,
        images: ['/og-image.png'],
    },
    alternates: {
        canonical: 'https://stargarages.ca',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
} satisfies Metadata

export const getMetadata = (
    title?: string,
    description: string = defaultDescription,
    keywords: string[] = defaultKeywords,
    path: string = ''
): Metadata => {
    const fullTitle = title 
        ? `${title} | Star Garages - Edmonton & Calgary Garage Builders`
        : siteConfig.title

    return {
        ...siteConfig,
        title: fullTitle,
        description,
        keywords: keywords.join(', '),
        alternates: {
            canonical: `https://stargarages.ca${path}`,
        },
        openGraph: {
            ...siteConfig.openGraph,
            title: fullTitle,
            description,
            url: `https://stargarages.ca${path}`,
        },
        twitter: {
            ...siteConfig.twitter,
            title: fullTitle,
            description,
        },
    }
} 