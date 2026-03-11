/*
  Warnings:

  - The primary key for the `Finance` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `role` on table `Client` required. This step will fail if there are existing NULL values in that column.
  - The required column `id` was added to the `Finance` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "role" SET NOT NULL;

-- AlterTable
ALTER TABLE "Finance" DROP CONSTRAINT "Finance_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "month" TIMESTAMP(3),
ADD CONSTRAINT "Finance_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "orgId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "reach" INTEGER NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
