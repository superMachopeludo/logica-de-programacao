
package execicio3;

import java.util.Scanner;


public class Execicio3 {

    
    public static void main(String[] args) {
 Scanner leia = new Scanner(System.in);
        
      int anos = leia.nextInt();
      int meses = leia.nextInt();
      int dias = leia.nextInt();
        
        int totaldias =(anos * 365) + (meses * 30) + dias;
        
        System.out.println("vacê tem" + totaldias + " dias de vida");
        
        
    }

    
}
