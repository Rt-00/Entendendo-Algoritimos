public class Main {
  public static int sum(int[] list, int start) {
    if (start >= list.length) {
      return 0;
    } else {
      return list[start] + sum(list, start + 1);
    }
  }

  public static void main(String[] args) {
    int[] list = {1, 2, 3, 4};
    int result = sum(list, 0);
    System.out.println(result);

    list = new int[]{2, 5, 6, 7};
    result = sum(list, 0);
    System.out.println(result);

    list = new int[]{3, 5, 7, 9};
    result = sum(list, 0);
    System.out.println(result);
  }
}