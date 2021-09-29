package com.kh.employee.model.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import com.kh.employee.model.dao.EmployeeDAO;
import static com.kh.common.JDBCTemplate.*;
public class EmployeeService {
	private Connection conn ;
	private EmployeeDAO employeeDao = new EmployeeDAO();
	
	public List selectList(Map iMap) throws SQLException {
		conn = getConnection();
		
		List list = employeeDao.selectList(conn, iMap);
		
		close(conn);
		return list;
	}

	public int insertEmployee(Map newMap) throws Exception {
		conn = getConnection();
		
		int result = employeeDao.insertEmployee(conn, newMap);
		
		if(result >0)
			commit(conn);
		else
			rollback(conn);
		close(conn);
		return result;
	}

	public int updateEmployee(Map newMap) throws Exception {
		conn = getConnection();
		int result = employeeDao.updateEmployee(conn, newMap);
		
		if(result >0)
			commit(conn);
		else
			rollback(conn);
		close(conn);
		return result;
	}

	public int deleteEmployee(String del_id) {
		conn = getConnection();
		int result = employeeDao.deleteEmployee(conn, del_id);
		
		if(result >0)
			commit(conn);
		else
			rollback(conn);
		close(conn);
		return result;
	}

}
