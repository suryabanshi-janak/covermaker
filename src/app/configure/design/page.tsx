import { db } from '@/db';
import { notFound } from 'next/navigation';
import DesignConfigurator from './DesignConfigurator';

interface DesignPageProps {
  searchParams: {
    [key: string]: string;
  };
}

export default async function DesignPage({ searchParams }: DesignPageProps) {
  const { id } = searchParams;

  if (!id) {
    return notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: {
      id,
    },
  });

  if (!configuration) {
    return notFound();
  }

  const { height, width, imageUrl } = configuration;

  return (
    <DesignConfigurator
      confidId={id}
      imageUrl={imageUrl}
      imageDimensions={{ height, width }}
    />
  );
}
