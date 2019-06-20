package cucumberframework;

import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelUtils {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		try {
			XSSFWorkbook wb=new XSSFWorkbook("F:/nari/eclipse-jee-oxygen-3a-win32-x86_64/abcd.xlsx");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

	}

}
