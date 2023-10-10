package JavaProgram;
import java.util.*;
public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine().toLowerCase();
        boolean isPangram = isPangram(input);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
        
        scanner.close();
    }

    public static boolean isPangram(String input) {
        // Create a boolean array to track the occurrence of each letter (a to z)
        boolean[] alphabet = new boolean[26];
        
        // Iterate through the characters of the input
        for (char c : input.toCharArray()) {
            if (Character.isLetter(c)) {
                int index = c - 'a'; // Calculate the index for the character
                alphabet[index] = true; // Mark the corresponding letter as encountered
            }
        }
        
        // Check if all letters (a to z) have been encountered
        for (boolean letter : alphabet) {
            if (!letter) {
                return false; // If any letter is missing, it's not a pangram
            }
        }
        
        return true; // All letters have been encountered, it's a pangram
    }
}
