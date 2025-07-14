import { getMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'
import { FaqContent } from '@/components/FaqContent'

export const metadata: Metadata = getMetadata(
    'Frequently Asked Questions - Garage Building Guide',
    'Get answers to common questions about garage building in Edmonton & Calgary. Learn about permits, costs, timelines, and construction process from Star Garages.',
    [
        'garage building faq edmonton',
        'garage building faq calgary',
        'garage construction questions',
        'garage permits edmonton',
        'garage permits calgary',
        'garage building cost',
        'garage construction timeline',
        'garage building process',
        'garage development permit',
        'garage building regulations'
    ],
    '/faq'
)

export default function FaqPage() {
    return <FaqContent />;
}
