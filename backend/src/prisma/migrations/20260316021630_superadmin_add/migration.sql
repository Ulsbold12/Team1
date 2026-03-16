/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Administrator` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Administrator_username_key" ON "Administrator"("username");
