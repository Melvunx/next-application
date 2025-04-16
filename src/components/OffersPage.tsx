import { getOffersAction } from "@/app/(main)/dashboard/offer.actions";
import { Offer } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

export const OfferCard = ({ offer }: { offer: Offer }) => {
  return <div>{offer.company}</div>;
};

type OfferPaginationProps = {
  totalsItems: number;
  itemsPerPage: number;
  defaultPage?: number;
};

export const OfferPagination: React.FC<OfferPaginationProps> = ({
  totalsItems,
  itemsPerPage,
  defaultPage = 1,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageParams = searchParams.get("page");
  const currentPage = pageParams ? parseInt(pageParams) : defaultPage;

  const totalPages = Math.ceil(totalsItems / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      const updatedParams = new URLSearchParams(searchParams.toString());
      updatedParams.set("page", newPage.toString());

      router.push(`?${updatedParams.toString()}`);
    }
  };

  const getPageNumbers = () => {
    const pages: number[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        pages.push(pageNumber);
      }
    } else {
      if (currentPage <= 3) {
        for (let pageNumber = 1; pageNumber <= 4; pageNumber++) {
          pages.push(pageNumber);
        }

        pages.push(-1);
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push(-1);

        for (
          let pageNumber = totalPages - 3;
          pageNumber <= totalPages;
          pageNumber++
        ) {
          pages.push(pageNumber);
        }
      } else {
        pages.push(1);
        pages.push(-1);

        for (
          let pageNumber = currentPage - 1;
          pageNumber <= currentPage + 1;
          pageNumber++
        ) {
          pages.push(pageNumber);
        }
        pages.push(-1);
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem onClick={() => handlePageChange(currentPage - 1)}>
          <PaginationPrevious isActive={currentPage === 1} />
        </PaginationItem>
        {getPageNumbers().map((pageNumber, idx) =>
          pageNumber === -1 ? (
            <PaginationEllipsis key={`ellipsis-${idx}`} />
          ) : (
            <PaginationItem
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
            >
              <PaginationLink isActive={currentPage === pageNumber} />
              {pageNumber}
            </PaginationItem>
          )
        )}
        <PaginationItem onClick={() => handlePageChange(currentPage + 1)}>
          <PaginationNext isActive={currentPage === totalPages} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export async function OffersPage() {
  const offers = await getOffersAction();

  return (
    <div>
      {offers.map((offer, idx) => (
        <OfferCard key={idx} offer={offer} />
      ))}
      <OfferPagination totalsItems={offers.length} itemsPerPage={6} />
    </div>
  );
}
