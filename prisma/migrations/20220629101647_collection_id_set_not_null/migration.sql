/*
  Warnings:

  - Made the column `collection_id` on table `flashcards` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "flashcards" DROP CONSTRAINT "flashcards_collection_id_fkey";

-- AlterTable
ALTER TABLE "flashcards" ALTER COLUMN "collection_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "flashcards" ADD CONSTRAINT "flashcards_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
