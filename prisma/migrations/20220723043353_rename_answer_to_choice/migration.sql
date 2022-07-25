/*
  Warnings:

  - You are about to drop the `flashcard_answers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "flashcard_answers" DROP CONSTRAINT "flashcard_answers_flashcard_id_fkey";

-- DropTable
DROP TABLE "flashcard_answers";

-- CreateTable
CREATE TABLE "flashcard_choices" (
    "id" SERIAL NOT NULL,
    "flashcard_id" INTEGER NOT NULL,
    "is_correct" BOOLEAN NOT NULL,
    "choice" VARCHAR(100) NOT NULL,

    CONSTRAINT "flashcard_choices_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "flashcard_choices" ADD CONSTRAINT "flashcard_choices_flashcard_id_fkey" FOREIGN KEY ("flashcard_id") REFERENCES "flashcards"("id") ON DELETE CASCADE ON UPDATE CASCADE;
