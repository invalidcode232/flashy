-- DropForeignKey
ALTER TABLE "flashcard_answers" DROP CONSTRAINT "flashcard_answers_flashcard_id_fkey";

-- DropForeignKey
ALTER TABLE "flashcard_history" DROP CONSTRAINT "flashcard_history_flashcard_id_fkey";

-- DropForeignKey
ALTER TABLE "flashcards" DROP CONSTRAINT "flashcards_collection_id_fkey";

-- AddForeignKey
ALTER TABLE "flashcards" ADD CONSTRAINT "flashcards_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "collections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flashcard_answers" ADD CONSTRAINT "flashcard_answers_flashcard_id_fkey" FOREIGN KEY ("flashcard_id") REFERENCES "flashcards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flashcard_history" ADD CONSTRAINT "flashcard_history_flashcard_id_fkey" FOREIGN KEY ("flashcard_id") REFERENCES "flashcards"("id") ON DELETE CASCADE ON UPDATE CASCADE;
