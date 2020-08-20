import java.io.*;
import java.util.*;

class CheckPalindromeWords
{
	// create object of buffer class.
	static BufferedReader br=new BufferedReader (new InputStreamReader (System.in));
 
	// function to check palindrome
	boolean IsPalindrome(String s)
	{
		int l=s.length();
		String rev="";
		for(int i=l-1; i>=0; i--)
		{
			rev=rev+s.charAt(i);
		}
		if(rev.equals(s))
			return true;
		else
			return false;
	}
 
    public static void CheckPalindromeWordsInString(String s, CheckPalindromeWords ob)  //iska object kyu chahiye????
    {
   		s=s.toLowerCase();
      StringTokenizer str = new StringTokenizer(s,". ?!");
      int n = str.countTokens();
      
      String word[] = new String[n];
      for(int i=0; i<n; i++)
      {
        	word[i]=str.nextToken();
			System.out.println(word[i]);
      }
      int count=0;
      for(int i=0; i<n; i++)
        	if(ob.IsPalindrome(word[i]))   //ob.IsPalindrome kyu kiya hai?? and IsPalindrome static function bhi nahi hai to CheckPalin.. kaise call kiya hai??
              count++;
      System.out.println(count);
  }
	public static void main(String args[])throws IOException
    {
		// create function of palindromewords.
		CheckPalindromeWords ob=new CheckPalindromeWords();
        
	
        String s=br.readLine();
        CheckPalindromeWordsInString(s, ob);
       
    }
}a