import type { CamperListItemDto } from '@/types/camper.dto';
import Image from 'next/image';

type Props = {
  camper: CamperListItemDto;
};

export default function CamperCard({ camper }: Props) {
  return (
    <article>
      <Image
        src={camper.coverImage}
        alt={camper.name}
        width={400}
        height={300}
      />

      <h3>{camper.name}</h3>

      <p>{camper.location}</p>

      <p>€{camper.price}</p>

      <p>
        ⭐ {camper.rating}({camper.totalReviews})
      </p>

      <p>{camper.form}</p>

      <p>{camper.engine}</p>

      <p>{camper.transmission}</p>
    </article>
  );
}
