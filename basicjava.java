import java.util.ArrayList;
import java.util.Arrays;



public class basicjava {
    // 1. print 1-255
    public void allNumbers(){
        for (int i=0; i <= 255; i++){
            System.out.println(i);
        }
    }
}
    
    // 2.
    // public void oddNumbers(){
    //     for (int i=1; i <= 255; i+=2){
    //         System.out.println(i);
    //     }
    // }

    // 3.
    // public void sumNumbers(){
    //     int sum=0;
    //     for(int i=0; i<=255; i++){
    //         sum+=i;
    //         System.out.println("num:" + i + "sum:" + sum);
    //     }
    // }

    // 4.
    // public void itArray(int[] arr){
    //     for(int i=0; i<arr.length; i++){
    //         System.out.println(arr[i]);
    //     }

    // }

    // 5.
    // public void myMax(int[] arr){
    //     int max=0;
    //     for(int i=0; i<arr.length; i++){
    //         if(arr[i] > max){
    //             max = arr[i];
    //         }            
    //     }
    //     System.out.println(max);
    // }


    // 6.
    // public void average(int[] arr){
    //     int avg=0;
    //     int total=0;
    //     for(int i=0; i<=arr.length; i++){
    //         total = total + i;
            
    //     }
    //     avg = total / arr.length;
    //     System.out.println(avg);
    // }


    // 7.
    // public static ArrayList<Integer> oddArray(){
    //     ArrayList<Integer> nums = new ArrayList<Integer>();
    //     for(int i=0; i<=255; i++){
    //         if(i % 2 != 0)
    //             nums.add(i);
    //     }
    //     System.out.println(nums);
    //     return nums;
    // }
    
    // 8.
    // public int greaterThanY(int[] arr, int y){
    //     int count=0;
    //     for(int i=0; i< arr.length; i++){
    //         if(arr[i] > y){
    //             count = count + 1;
    //         }
    //     }
    //     return count;
    // }

    // 9.
    // public int[] squareVal(int[] arr){
    //     for(int i=0; i< arr.length; i++){
    //         arr[i] = arr[i] * arr[i];
    //     }
    //     return arr;

    // }

    // 10.
    // public int[] myNegative(int[] arr){
    //     for(int i=0; i< arr.length; i++){
    //         if(arr[i] < 0){
    //             arr[i] = 0;
    //         }
    //     }
    //     return arr;
    // }

    // 11.
    // public int[] maxMinAvg(int[] arr){
    //     int Max = 0;
    //     int Min = 0;
    //     int Avg = 0;
    //     int total = 0;
    //     for(int i=0; i< arr.length; i++){
    //         if(arr[i] > Max){
    //             Max = arr[i];
    //         }            
    //         if(arr[i] < Min){
    //             Min = arr[i];
    //         }
    //     total = total + arr[i];
    //     }
    //     Avg = total / arr.length;

    //     int newArray[] = new int[] {Max, Min, Avg};
    //     return newArray;
    // }


    // 12.
    // public static int[] shiftArr(int[] arr) {
    //     for(int i = 1; i < arr.length; i++){
    //         arr[i - 1] = arr[i];
    //     }
    //     arr[arr.length - 1] = 0;
    //     return arr;
    // }
    



