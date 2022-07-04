// import Collection from './src/repos/collection-repo';
import Flashcard from './src/repos/flashcard-repo';

const test = async () => {
    const flashcard = new Flashcard('What is 1+1', 100, {
        is_multiple: true,
        answer: '2',
        wrong_answer_1: '3',
        wrong_answer_2: '-1',
        wrong_answer_3: '0',
    });

    const flashcardData = (await flashcard.save()).data;

    if (!flashcardData) {
        throw new Error('Flashcard data is missing!');
    }

    console.log(flashcardData.id);
};

test();
