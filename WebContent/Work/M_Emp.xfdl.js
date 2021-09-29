(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("M_Emp");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SAL_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BONUS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MANAGER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HIRE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"ENT_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"ENT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EMP_ID\">200</Col><Col id=\"EMP_NAME\">선동일</Col><Col id=\"EMP_NO\">891212-462408       </Col><Col id=\"EMAIL\">sun_di@kh.or.kr</Col><Col id=\"PHONE\">01099546325</Col><Col id=\"DEPT_CODE\">D9</Col><Col id=\"JOB_CODE\">J1</Col><Col id=\"SAL_LEVEL\">S1</Col><Col id=\"SALARY\">8000000</Col><Col id=\"BONUS\">0.3</Col><Col id=\"HIRE_DATE\">90/02/06</Col><Col id=\"ENT_YN\">N</Col></Row><Row><Col id=\"EMP_ID\">201</Col><Col id=\"EMP_NAME\">송종기</Col><Col id=\"EMP_NO\">631106-1548654</Col><Col id=\"EMAIL\">song_jk@kh.or.kr</Col><Col id=\"PHONE\">01045686656</Col><Col id=\"DEPT_CODE\">D9</Col><Col id=\"JOB_CODE\">J2</Col><Col id=\"SAL_LEVEL\">S1</Col><Col id=\"SALARY\">6000000</Col><Col id=\"MANAGER_ID\">200</Col><Col id=\"HIRE_DATE\">01/09/01</Col><Col id=\"ENT_YN\">N</Col><Col id=\"BONUS\">0</Col></Row><Row><Col id=\"EMP_ID\">202</Col><Col id=\"EMP_NAME\">노옹철</Col><Col id=\"EMP_NO\">861015-1356452</Col><Col id=\"EMAIL\">no_hc@kh.or.kr</Col><Col id=\"PHONE\">01066656263</Col><Col id=\"DEPT_CODE\">D9</Col><Col id=\"JOB_CODE\">J2</Col><Col id=\"SAL_LEVEL\">S4</Col><Col id=\"SALARY\">3700000</Col><Col id=\"MANAGER_ID\">201</Col><Col id=\"HIRE_DATE\">01/01/01</Col><Col id=\"ENT_YN\">N</Col><Col id=\"BONUS\">0</Col></Row><Row><Col id=\"EMP_ID\">203</Col><Col id=\"EMP_NAME\">송은희</Col><Col id=\"EMP_NO\">631010-2653546</Col><Col id=\"EMAIL\">song_eh@kh.or.kr</Col><Col id=\"PHONE\">01077607879</Col><Col id=\"DEPT_CODE\">D6</Col><Col id=\"JOB_CODE\">J4</Col><Col id=\"SAL_LEVEL\">S5</Col><Col id=\"SALARY\">2800000</Col><Col id=\"MANAGER_ID\">204</Col><Col id=\"HIRE_DATE\">96/05/03</Col><Col id=\"ENT_YN\">N</Col><Col id=\"BONUS\">0</Col></Row><Row><Col id=\"EMP_ID\">204</Col><Col id=\"EMP_NAME\">유재식</Col><Col id=\"EMP_NO\">660508-1342154</Col><Col id=\"EMAIL\">yoo_js@kh.or.kr</Col><Col id=\"PHONE\">01099999129</Col><Col id=\"DEPT_CODE\">D6</Col><Col id=\"JOB_CODE\">J3</Col><Col id=\"SAL_LEVEL\">S4</Col><Col id=\"SALARY\">3400000</Col><Col id=\"BONUS\">0.2</Col><Col id=\"MANAGER_ID\">200</Col><Col id=\"HIRE_DATE\">00/12/29</Col><Col id=\"ENT_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">ALL</Col><Col id=\"DEPT_NAME\"/></Row><Row><Col id=\"DEPT_CD\">D1</Col><Col id=\"DEPT_NAME\">인사관리부</Col></Row><Row><Col id=\"DEPT_CD\">D2</Col><Col id=\"DEPT_NAME\">회계관리부</Col></Row><Row><Col id=\"DEPT_CD\">D3</Col><Col id=\"DEPT_NAME\">마케팅부</Col></Row><Row><Col id=\"DEPT_CD\">D4</Col><Col id=\"DEPT_NAME\">국내영업부</Col></Row><Row><Col id=\"DEPT_CD\">D5</Col><Col id=\"DEPT_NAME\">해외영업1부</Col></Row><Row><Col id=\"DEPT_CD\">D6</Col><Col id=\"DEPT_NAME\">해외영업2부</Col></Row><Row><Col id=\"DEPT_CD\">D7</Col><Col id=\"DEPT_NAME\">해외영업3부</Col></Row><Row><Col id=\"DEPT_CD\">D8</Col><Col id=\"DEPT_NAME\">기술지원부</Col></Row><Row><Col id=\"DEPT_CD\">D9</Col><Col id=\"DEPT_NAME\">총무부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_01","10","54","162","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text(">사원관리");
            obj.set_font("16px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","3","88","1422","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("antiquewhite");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","7","3","43","29",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("*Name");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("Edit00","57","7","154","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("dpt_01","231","3","55","23",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("*Dept");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_dept","277","7","145","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_dept");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_codecolumn("DEPT_CD");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("Grid00","3","130","1422","180",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_emp");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"148\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"NO.\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"Name\"/><Cell col=\"3\" text=\"Res_Num.\"/><Cell col=\"4\" text=\"Email\"/><Cell col=\"5\" text=\"Phone\" displaytype=\"normal\" edittype=\"normal\" maskedittype=\"string\"/><Cell col=\"6\" text=\"Dept.\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\"/><Cell col=\"7\" text=\"Salary\"/><Cell col=\"8\" text=\"Bonus\"/><Cell col=\"9\" text=\"Manager\"/><Cell col=\"10\" text=\"Hire Date\"/><Cell col=\"11\" text=\"Ent Date\"/><Cell col=\"12\" displaytype=\"checkboxcontrol\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:EMP_ID\" textAlign=\"center\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:EMP_NAME\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:EMP_NO\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"######-#######\" maskedittype=\"string\"/><Cell col=\"4\" text=\"bind:EMAIL\" tooltiptext=\"bind:EMAIL\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:PHONE\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"###-####-####\" maskedittype=\"string\" combodataset=\"ds_emp\" combodatacol=\"PHONE\"/><Cell col=\"6\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combodatacol=\"DEPT_NAME\" combocodecol=\"DEPT_CD\"/><Cell col=\"7\" text=\"bind:SALARY\" displaytype=\"mask\" edittype=\"normal\" maskeditformat=\"#,###,###\" maskedittype=\"string\"/><Cell col=\"8\" text=\"bind:BONUS\" displaytype=\"number\" edittype=\"normal\"/><Cell col=\"9\" text=\"bind:MANAGER_ID\" displaytype=\"combotext\" combodataset=\"ds_emp\" combocodecol=\"EMP_ID\" combodatacol=\"EMP_NAME\"/><Cell col=\"10\" text=\"bind:HIRE_DATE\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell col=\"11\" text=\"bind:ENT_DATE\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell col=\"12\" text=\"bind:ENT_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"F\"/></Band><Band id=\"summary\"><Cell text=\"total\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;SALARY&quot;)\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delrow","1061","50","78","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Del Row");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addrow","1156","50","76","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Add Row");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","1252","50","78","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","1347","50","76","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Save");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","3","320","167","80",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_search");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/><Cell col=\"1\" text=\"DEPT\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\"/><Cell col=\"1\" text=\"bind:DEPT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1480,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.Edit00","value","ds_search","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cbo_dept","value","ds_search","DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("M_Emp.xfdl","lib_com::l_com.xjs");
        this.registerScript("M_Emp.xfdl", function() {
        this.executeIncludeScript("lib_com::l_com.xjs"); /*include "lib_com::l_com.xjs"*/;
        this.M_Emp_onload = function(obj,e)
        {
        	//M_EMP가 onload 될 때 마다 DEPT 콤보박스의 INDEX[0]을 선택
        	this.div_search.form.cbo_dept.set_index(0);
        	this.fn_search();
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        this.btn_delrow_onclick = function(obj,e)
        {
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        };

        this.btn_addrow_onclick = function(obj,e)
        {
        	this.ds_emp.addRow();
        };

        this.fn_search = function()
        {
        	//selectEmp 서블릿 매핑
        	var sSvcNm ="selectEmp";
        	var sSvcId ="selectEmp";				//transaction을 구분하기 위한 ID
        	var strUrl = this.gfn_url() + sSvcNm;	//transaction을 요청할 서버 페이지 주소
        	alert(strUrl);
        	var sInDataSet ="ds_search=ds_search";	//서버로 보낼 Dataset, "입력 ID = DatasetID"
        											//입력 id : 서블릿에서 읽어드리는
        											//:U - 갱신된 내용만 전송
        											//:A - 모든 정보를 전송
        											//:N - Delete를 제외한 데이터만 전송

        	var sOutDataSet ="ds_emp=ds_emp";		//서버에서 보내는 데이터를 받을 Dataset
        											//"Dataset ID=출력ID" 형식으로 문자열로 설정
        	var sArgument ="";						//서버로 보낼 파라미터(변수)
        											//"변수ID=변수값"

        	this.transaction(sSvcId,strUrl,sInDataSet,sOutDataSet,sArgument,"fn_CallBack");
        };

        this.fn_CallBack = function(id, errorCode, errorMsg)
        {
        	if(errorCode <0){
        		alert(errorMsg);
        		return;
        	}
        	switch(id) {
        	case "selectEmp":
        		alert("조회되었습니다");
        		trace(this.ds_emp.saveXML());

        		if(this.ds_emp.getRowCount()>0){
        			//로직
        		}
        		break;
        	case "saveEmp":
        		alert("저장되었습니다");
        		this.fn_search();					//저장후에 다시 재검색하도록
        		break;

        	default:
        		break;
        	}

        };
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.fn_saveBef()){				//모든 컬럼을 다 입력했다면
        		this.fn_save();					//저장하기
        	}
        };

        this.fn_saveBef = function()
        {
        	for(var i=0; i<this.ds_emp.getRowCount(); i++)
        	{
        		if(this.gfn_isNull(this.ds_emp.getColumn(i,"EMP_ID"))){
        			alert("사원의 id를 입력하세요");
        			return false;
        		}
        		if(this.gfn_isNull(this.ds_emp.getColumn(i,"EMP_NAME"))){
        			alert("사원의 이름을 입력하세요");
        			return false;
        		}
        		if(this.gfn_isNull(this.ds_emp.getColumn(i,"EMP_NO"))){
        			alert("사원의 주민번호를 입력하세요");
        			return false;
        		}
        	}
        	return true;
        };
        this.fn_save = function()
        {
        	var sSvcNm ="saveEmp";
        	var sSvcId ="saveEmp";
        	var strUrl = this.gfn_url() + sSvcNm;
        	alert(strUrl);
        	var sInDateSet ="ds_emp=ds_emp:A";
        	var sOutDataSet ="";
        	var sArgument ="";

        	this.transaction(sSvcId,strUrl,sInDateSet,sOutDataSet,sArgument,"fn_CallBack");
        };
        this.div_search_cbo_dept_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.M_Emp_onload,this);
            this.sta_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_search.form.Static00.addEventHandler("onclick",this.div_search_Static00_onclick,this);
            this.div_search.form.Edit00.addEventHandler("onchanged",this.div_search_Edit00_onchanged,this);
            this.div_search.form.dpt_01.addEventHandler("onclick",this.div_search_Static00_onclick,this);
            this.div_search.form.cbo_dept.addEventHandler("onitemchanged",this.div_search_cbo_dept_onitemchanged,this);
            this.btn_delrow.addEventHandler("onclick",this.btn_delrow_onclick,this);
            this.btn_addrow.addEventHandler("onclick",this.btn_addrow_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };

        this.loadIncludeScript("M_Emp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
