CREATE TABLE "Sales" (
  "id" TEXT NOT NULL,
  "orgId" TEXT NOT NULL,
  "date" TIMESTAMP(3) NOT NULL,
  "product" "Subscription" NOT NULL,
  CONSTRAINT "Sales_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "Sales" ADD CONSTRAINT "Sales_buyer_fkey" 
  FOREIGN KEY ("orgId") REFERENCES "Organization"("id") 
  ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "AuditLog" 
ALTER COLUMN "details" TYPE TEXT;