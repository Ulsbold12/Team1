/*
  Warnings:

  - Added the required column `patronage` to the `Organization` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Subscription" AS ENUM ('BASIC', 'PRO');

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "patronage" "Subscription" NOT NULL;
