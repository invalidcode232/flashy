/*
  Warnings:

  - You are about to drop the column `answer` on the `flashcards` table. All the data in the column will be lost.
  - You are about to drop the column `wrong_answer_1` on the `flashcards` table. All the data in the column will be lost.
  - You are about to drop the column `wrong_answer_2` on the `flashcards` table. All the data in the column will be lost.
  - You are about to drop the column `wrong_answer_3` on the `flashcards` table. All the data in the column will be lost.
  - You are about to drop the column `wrong_answer_4` on the `flashcards` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "flashcards" DROP COLUMN "answer",
DROP COLUMN "wrong_answer_1",
DROP COLUMN "wrong_answer_2",
DROP COLUMN "wrong_answer_3",
DROP COLUMN "wrong_answer_4";

-- CreateTable
CREATE TABLE "flashcard_answers" (
    "id" SERIAL NOT NULL,
    "flashcard_id" INTEGER NOT NULL,
    "is_correct" BOOLEAN NOT NULL,
    "answer" VARCHAR(100) NOT NULL,

    CONSTRAINT "flashcard_answers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "flashcard_answers" ADD CONSTRAINT "flashcard_answers_flashcard_id_fkey" FOREIGN KEY ("flashcard_id") REFERENCES "flashcards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
