import { prisma } from "@/src/lib/prisma";
import { z } from "zod";

export const idValidateSchema = z.string().uuid().nonempty();

export const getOffersAction = async () => {
  try {
    const offers = await prisma.offer.findMany();

    return offers;
  } catch (error) {
    console.error("Error fetching offers:", error);
    throw new Error("Failed to fetch offers");
  }
};

export const deleteOfferAction = async (offerId: string) => {
  try {
    const parsedId = idValidateSchema.parse(offerId);

    await prisma.offer.delete({
      where: { id: parsedId },
    });

    return { message: "Offer deleted successfully" };
  } catch (error) {
    console.error("Error deleting offer:", error);
    throw new Error("Failed to delete offer");
  }
};
