-- CreateEnum
CREATE TYPE "TypeOffer" AS ENUM ('SPONTANEOUS', 'BYOFFER');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'INTERVIEW', 'REJECTED', 'ACCEPTED');

-- CreateTable
CREATE TABLE "Offer" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "type" "TypeOffer" NOT NULL DEFAULT 'BYOFFER',
    "company" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "applyDate" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
