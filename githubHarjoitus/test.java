package app;
import java.util.Scanner;

public class test {

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		String upperCase;
		//Nimet
		String[] names = {"Moi Juha Kärnä","Moi Insert name here1", "Moi Insert name here2", "Moi Insert name here3" };
		System.out.println("Insert name here:");
		String kirjoitettuNimi = in.nextLine();
		upperCase = kirjoitettuNimi.toUpperCase();
		
		if (upperCase.equals("JUHA KÄRNÄ")) {
			System.out.println(names[0]);
		}
		else if(upperCase.equals("NYYMI1")) {
			System.out.println(names[1]);
		}
		else if(upperCase.equals("NYYMI2")) {
			System.out.println(names[2]);
		}
		else if(upperCase.equals("NYYMI3")) {
			System.out.println(names[3]);
		}
	}

}
