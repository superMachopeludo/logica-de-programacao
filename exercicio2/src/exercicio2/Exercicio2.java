
package exercicio2;

import java.util.Scanner;


public class Exercicio2 {

  
    public static void main(String[] args) {
    Scanner leia = new Scanner (System.in);
   System.out.println("digite a largura");
    
   double largura = leia.nextDouble();
    double altura = leia.nextDouble();
    double result = altura * largura;
    
    System.out.println("area igual" + result);
    
    
    }

    
    
}
