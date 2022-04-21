-- CreateTable
CREATE TABLE "Scan" (
    "id" BIGSERIAL NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "body" TEXT NOT NULL,

    CONSTRAINT "Scan_pkey" PRIMARY KEY ("id")
);
