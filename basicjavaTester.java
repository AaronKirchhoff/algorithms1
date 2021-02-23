import java.util.ArrayList;
import java.util.Arrays;

public class basicjavaTester {
    public static void main(String[] args) {

    // 1. print 1- 255
        basicjava Basic = new basicjava();
        Basic.allNumbers();
        

    // 2.
        Basic.oddNumbers();

    // 3.
        Basic.sumNumbers();

    // 4.
        int myArray[] = new int[] {7, 4, 3, 6, 9, 8, 11, 22};
        Basic.itArray(myArray);

    // 5.
        int maxArray[] = new int[] {2, 4, 5, 1, 9, 6, 88, 3};
        Basic.myMax(maxArray);

    // 6.
        int myAverage[] = new int[] {6, 4, 7, 8, 3, 2, 1, 4, 6};
        Basic.average(myAverage);
        // 5

    // 7.
        Basic.oddArray();

    // 8.
        int YArray[] = new int[] {8, 2, 8, 4, 9, 2};
        int y = 7;
        int Yresult= Basic.greaterThanY(YArray, y);
        System.out.println(Yresult);


    // 9.
        int MyValSquared[] = new int[] {3, 7, 12, 6};
        System.out.println(Arrays.toString(Basic.squareVal(MyValSquared)));


    // 10.
        int ChangeNegatives[] = new int[] {-3, 6, -4, 2, 9};
        System.out.println(Arrays.toString(Basic.myNegative(ChangeNegatives)));

    // 11.
        int minmaxavg[] = new int[] {6, 4, -7, 8, 3, 2, -1, -4, 6};
        System.out.println(Arrays.toString(Basic.maxMinAvg(minmaxavg)));

    // 12.
        int[] MyShift = new int[] {1, 2, 3, 4, 5};
        System.out.println(Arrays.toString(Basic.shiftArr(MyShift)));
    }
}