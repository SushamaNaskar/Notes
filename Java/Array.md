public class Main {
    public static void main(String[] args) {
        int[] scores = {90, 85, 78};
        int total = 0;
        
        for (int score : scores) {
            total += score;
        }
        System.out.println("Average: " + (total / scores.length));
    }
}

# for (int num : numbers): A for-each loop that goes through each element (num) in the array.
public class Main {
    public static void main(String[] args) {
        int[] numbers = {42, 17, 68, 33, 91};

        System.out.println("Numbers in the array:");
        int max = numbers[0];

        for (int num : numbers) {
            System.out.println(num);
            if (num > max) {
                max = num;
            }
        }

        System.out.println("Highest number: " + max);
    }
}