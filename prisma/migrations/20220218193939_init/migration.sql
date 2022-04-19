-- CreateTable
CREATE TABLE "Card" (
    "number" TEXT NOT NULL,
    "icon" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Visit" (
    "id" SERIAL NOT NULL,
    "cardNumber" TEXT NOT NULL,

    CONSTRAINT "Visit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Card_number_key" ON "Card"("number");

-- CreateIndex
CREATE UNIQUE INDEX "Visit_cardNumber_key" ON "Visit"("cardNumber");

-- AddForeignKey
ALTER TABLE "Visit" ADD CONSTRAINT "Visit_cardNumber_fkey" FOREIGN KEY ("cardNumber") REFERENCES "Card"("number") ON DELETE RESTRICT ON UPDATE CASCADE;
