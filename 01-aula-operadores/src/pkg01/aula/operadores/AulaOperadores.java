package pkg01.aula.operadores;

public class AulaOperadores {

   public static void main(String[] args) {
     // ARITIMÉTICOS
     int a = 10 + 1;
     int b = a - 10;
     int c= b * 3;
     int d = c / 1;
     double e = 4.5 +1.7;
     
     String mostrarA = "o valor a: " + a;
     System.out.println(mostrarA);
       
     a += 10;
     b -= 1;
     c *=5;
     d /= 1;
    
      System.out.println("Valor de A: " + (10 + 10));
      System.out.println("Valor de B: " + b);
      System.out.println("Valor de C: " + c);
      System.out.println("Valor de D: " + d);
      System.out.println("Valor de E: " + e);
       
    //---------------------------------------------
    //lógicos
    
    boolean ehMaior = 10 > 20;
    boolean ehMenor = 10 < 20;
    boolean ehMenorIgual = 10 <= 20;
    boolean ehMaiorIgual = 1 >= 20;
    boolean ehIgual = 10 == 10;
    boolean ehDiferente = 10 != 20;
    
    
    
    System.out.println("Maior: "+ehMaior);
    System.out.println("Menor: "+ehMenor);
    System.out.println("Menor igual: "+ehMenorIgual);
    System.out.println("Maior Igual: "+ehMaiorIgual);
    System.out.println("Igual: "+ehIgual);
    System.out.println("Diferente: "+ehDiferente);
       
    //------------------------------------------------------
    //Lógicos    
    boolean valor = (10 > 9) && (5 > 1);
    boolean valor1 = true && true;
    boolean valor2 = true && false;
    boolean valor3 = false || true;
    boolean valor4 = false || false;
    boolean valor5 = 10 > 9 || 5 > 1;
    boolean valor6 = ((10 > 9) && (5 > 1)) || ((120 < 1) && 31 > 3);
    
    boolean negacao = !true;
    boolean negacao2 = !valor6;
    
    
    
    
    
    
    
    
    
       }
}