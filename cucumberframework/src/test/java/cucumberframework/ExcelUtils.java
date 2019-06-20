package cucumberframework;

import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelUtils {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		try {
			XSSFWorkbook wb=new XSSFWorkbook("F:/nari/eclipse-jee-oxygen-3a-win32-x86_64/abcd.xlsx");
		
		XSSFSheet sh= wb.getSheet("sheet1");
		XSSFRow row=sh.getRow(0);
		int col=row.getLastCellNum();
		int rownum=sh.getLastRowNum()+1;
		//XSSFCell celldata=sh.getRow(0).getCell(1);
	for(int i=0;i<rownum;i++)
	{
		for(int j=0;j<col;j++)
		{
			XSSFCell celldata=sh.getRow(i).getCell(j);
			System.out.println(celldata);
			
		}
		
	}
			
			
		
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

	}

}
