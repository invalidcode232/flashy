/*
  Warnings:

  - A unique constraint covering the columns `[userId,flashcard_id]` on the table `flashcard_history` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "flashcard_history_userId_flashcard_id_key" ON "flashcard_history"("userId", "flashcard_id");
