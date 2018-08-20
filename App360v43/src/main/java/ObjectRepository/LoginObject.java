package ObjectRepository;

import org.openqa.selenium.By;

/**
 * 
 * @LoginObjects Here I have created all objects which we will use to run Login
 *               test cases.
 *
 */
public class LoginObject {
	// login in Object
	
		public static By username = By.name("user_session[login]");
		
		public static By password=By.name("user_session[password]");
		
		public static By login=By.xpath("//*[@type='submit']");
		
		
		//After login Create new user element path of all 
		public static By setting=By.xpath("(//*[@href='/UpWorkConsultant/settings'])[1]");
		
		public static By user=By.xpath("//*[text()='Manage users under this account']");
		
		public static By new_user=By.xpath("//*[@class='btn btn-sm btn-primary']");
		public static By role=By.cssSelector(".multiselect.dropdown-toggle.btn.btn-sm.btn-default");
		
		public static By chekbox=By.xpath("(//*[@type='checkbox'])[2]");
		
		public static By active=By.name("user[active]");
		
		
		public  static By Login_Name=By.name("user[login]");

		public  static By F_Name=By.name("user[first_name]");
		
		public  static By L_Name=By.name("user[last_name]");
		
		public  static By Email=By.name("user[email]");
		
		
		public static By pass_set=By.name("user[password]");
		
		public static By pass_conf=By.name("user[password_confirmation]");
		
		
		public static By confirm=By.xpath("//*[@data-trigger-click='form.user-form input[type=submit]']");
		
	    public static By User_image=By.xpath("(//*[@class='dropdown-toggle'])[1]");
	    public static By logout=By.cssSelector(".dropdown-menu.pull-right>li:nth-child(14)");
	    
	    
	    // Element path for validate message for all form field.
	    public static By role_validation=By.cssSelector(".form-horizontal.form-validation.user-form.navy-peek.navy-enabled>div:nth-child(3)>div>ul>li");
	    public static By L_Namevalidation=By.cssSelector(".form-horizontal.form-validation.user-form.navy-peek.navy-enabled>div:nth-child(5)>div>ul");
	    public static By FN_Namevalidation=By.cssSelector(".form-horizontal.form-validation.user-form.navy-peek.navy-enabled>div:nth-child(6)>div>ul>li");
	    public static By LN_Namevalidation=By.cssSelector(".form-horizontal.form-validation.user-form.navy-peek.navy-enabled>div:nth-child(7)>div>ul>li");
	    public static By Email_addressvalidation=By.cssSelector(".form-horizontal.form-validation.user-form.navy-peek.navy-enabled>div:nth-child(8)>div>ul>li");
	    public static By password_valid=By.cssSelector(".parsley-pattern");
	    public static By Confirm_password_valid=By.cssSelector(".form-horizontal.form-validation.user-form.navy-peek.navy-enabled>div:nth-child(10)>div>ul>li");
	    
	    
	    // Error and success validate message path
	    public static By alert_meesage=By.cssSelector(".bootstrap-growl.alert.alert-success");
	    public static By alreadyexistsmsg=By.cssSelector(".bootstrap-growl.alert.alert-danger");
	    
	    //search button path
	    public static By Serch_box=By.cssSelector(".page-layout>div:nth-child(3)>div:nth-child(2)>input");
	    public static By check_registered=By.cssSelector("#page-wrap>div>div>div:nth-child(4)>table>tbody>tr:nth-child(21)>td:nth-child(2)");
	    
}