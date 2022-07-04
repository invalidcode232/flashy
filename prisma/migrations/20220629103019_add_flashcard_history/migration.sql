/*
  Warnings:

  - Added the required column `is_multiple` to the `flashcards` table without a default value. This is not possible if the table is not empty.
  - Made the column `registered_at` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "flashcards" ADD COLUMN     "is_multiple" BOOLEAN NOT NULL,
ADD COLUMN     "wrong_answer_1" VARCHAR(100),
ADD COLUMN     "wrong_answer_2" VARCHAR(100),
ADD COLUMN     "wrong_answer_3" VARCHAR(100),
ADD COLUMN     "wrong_answer_4" VARCHAR(100);

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "registered_at" SET NOT NULL;

-- CreateTable
CREATE TABLE "flashcard_history" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "flashcard_id" INTEGER NOT NULL,
    "last_answered" TIMESTAMPTZ(6),
    "last_correct" BOOLEAN,

    CONSTRAINT "flashcard_history_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "flashcard_history" ADD CONSTRAINT "flashcard_history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flashcard_history" ADD CONSTRAINT "flashcard_history_flashcard_id_fkey" FOREIGN KEY ("flashcard_id") REFERENCES "flashcards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
