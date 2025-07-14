import { getMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'
import { ProjectsContent } from '@/components/ProjectsContent'

export const metadata: Metadata = getMetadata(
    'Our Projects - Custom Garage Builds',
    'View our portfolio of custom garage builds in Edmonton & Calgary. From standard detached garages to luxury garage suites, explore our completed projects.',
    [
        'garage projects edmonton',
        'garage projects calgary',
        'custom garage portfolio',
        'garage suite examples',
        'detached garage gallery',
        'garage builders portfolio',
        'garage construction examples',
        'custom garage designs',
        'garage renovation projects',
        'garage before and after'
    ],
    '/projects'
)

export default function ProjectsPage() {
    return <ProjectsContent />;
}
