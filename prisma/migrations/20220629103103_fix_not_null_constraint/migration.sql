/*
  Warnings:

  - Made the column `last_answered` on table `flashcard_history` required. This step will fail if there are existing NULL values in that column.
  - Made the column `last_correct` on table `flashcard_history` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "flashcard_history" ALTER COLUMN "last_answered" SET NOT NULL,
ALTER COLUMN "last_correct" SET NOT NULL;
