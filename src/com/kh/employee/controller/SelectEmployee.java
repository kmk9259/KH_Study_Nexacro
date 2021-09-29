package com.kh.employee.controller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.kh.common.NexaDatasetCom;
import com.kh.employee.model.service.EmployeeService;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;
import com.nexacro17.xapi.tx.PlatformType;

/**
 * Servlet implementation class SelectEmployee
 */
@WebServlet("/selectEmp")
public class SelectEmployee extends HttpServlet implements Servlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SelectEmployee() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpPlatformRequest req = new HttpPlatformRequest(request);
		
		try {
			req.receiveData();// 요청값 받아오기
		} catch (PlatformException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		// 받아온 요청값중에 사용할 데이터 추출하기
		PlatformData in_data = req.getData();

		// 데이터셋 받아오기
		DataSet ds = in_data.getDataSet("ds_search");
		System.out.println(">>> ds : " + ds.getRowCount());
		//System.out.println(ds.getColumn(""));
		PlatformData out_data = new PlatformData();
		
		int errorCode =0;
		String errorMsg="START";
		Map iMap = new HashMap();
		
		iMap.put("NAME", ds.getString(0, "NAME"));
		iMap.put("DEPT", ds.getString(0, "DEPT"));
		
		try {
			List list = new EmployeeService().selectList(iMap);
			/*
			 * DataSet dsO = new DataSet("ds_emp");
			 * 
			 * dsO.addColumn("EMP_ID", DataTypes.STRING , 256); dsO.addColumn("EMP_ID",
			 * DataTypes.STRING , 256); dsO.addColumn("EMP_ID", DataTypes.STRING , 256);
			 * dsO.addColumn("EMP_ID", DataTypes.STRING , 256); 
			 * for(int i = 0 ; i
			 * <list.size(); i++) { int row = ds.newRow(); ds.set(row, "EMP_ID",map.get("");
			 * ds.set(row, "EMP_ID",map.get(""); ds.set(row, "EMP_ID",map.get("");
			 * ds.set(row, "EMP_ID",map.get("");
			 * 
			 * }
			 */

			out_data.addDataSet(new NexaDatasetCom().addDataset( list, "ds_emp"));
			errorCode=0;		//try 안에 동작 하고, 에러는 없으니까 0
			errorMsg="불러오기 성공";
		} catch (SQLException e) {
			errorCode=-1;		//에러가 0보다 작을 때 에러 메시지를 띄워줌
			errorMsg=e.getMessage();
		}
		//<다시 화면단으로 넘기기 위해서 값을 담아서 전달>
		VariableList varList = out_data.getVariableList();
		
		varList.add("ErrorCode", errorCode);
		varList.add("ErrorMsg", errorMsg);
		
		HttpPlatformResponse res = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML ,"UTF-8");
		
		res.setData(out_data);
		
		try {
			res.sendData();		//값 전달
		} catch (PlatformException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}


	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
