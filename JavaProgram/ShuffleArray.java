package JavaProgram;
import java.util.Arrays;
import java.util.Random;
public class ShuffleArray {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6, 7};

        // Shuffle the array
        shuffleArray(array);

        // Print the shuffled array
        System.out.println("Shuffled Array: " + Arrays.toString(array));
    }

    public static void shuffleArray(int[] array) {
        int n = array.length;
        Random random = new Random();

        for (int i = n - 1; i > 0; i--) {
            // Generate a random index between 0 and i (inclusive)
            int randomIndex = random.nextInt(i + 1);

            // Swap the elements at randomIndex and i
            int temp = array[randomIndex];
            array[randomIndex] = array[i];
            array[i] = temp;
        }
    }
}
