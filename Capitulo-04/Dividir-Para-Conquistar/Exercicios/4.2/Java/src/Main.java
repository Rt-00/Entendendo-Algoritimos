public class Main {
  public static int count(int[] list, int start) {
    if (start >= list.length) {
      return 0;
    }

    return 1 + count(list, start + 1);
  }

  public static void main(String[] args) {
    System.out.println(count(new int[]{1, 3, 5, 7}, 0));
    System.out.println(count(new int[]{2, 4, 6, 10, 12}, 0));
    System.out.println(count(new int[]{3, 5, 7, 9, 13, 15}, 0));
  }
}