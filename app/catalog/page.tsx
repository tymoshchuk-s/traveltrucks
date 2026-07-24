import CatalogPageClient from '@/components/Catalog/CatalogPageClient';

export async function generateMetadata() {
  return {
    title: 'Trucks Catalog | Travel Trucks',
    description:
      'Browse the full catalog of rental trucks. Easy search, useful filters, and up-to-date prices.',
    openGraph: {
      title: 'Trucks Catalog | Travel Trucks',
      description:
        'Browse all rental trucks. Filter by brand, price, mileage, and more.',
      url: 'https://traveltrucks-frontend-app.vercel.app/catalog',
      siteName: 'Travel Trucks',
      type: 'website',
      images: [
        {
          url: '/images/Picture.png',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function CatalogPage() {
  return <CatalogPageClient />;
}
