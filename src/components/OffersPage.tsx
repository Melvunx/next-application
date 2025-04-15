import { getOffersAction } from "@/app/(main)/dashboard/offer.actions";
import { Offer } from "@prisma/client";

export const OfferCard = ({ offer }: { offer: Offer }) => {
  return <div>{offer.company}</div>;
};

export const OfferPagination = () => {
  return <div>Pagination</div>;
};

export async function OffersPage() {
  const offers = await getOffersAction();

  return (
    <div>
      {offers.map((offer, idx) => (
        <OfferCard key={idx} offer={offer} />
      ))}
    </div>
  );
}
