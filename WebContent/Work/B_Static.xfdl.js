(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("B_Static");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_01","31","51","139","69",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("static test\r\ncontrol + enter\r\n한줄 내려서 쓸 수 있음");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","246","67","146","62",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("버튼입니다");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","17","155","165","84",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02","255","158","133","77",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("edit btn");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02","17","304","174","91",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("B_Static.xfdl", function() {


        this.btn_01_onclick = function(obj,e)
        {
        	nexacro.getApplication().trace(obj.id);
        	nexacro.getApplication().trace(e);

        	// 코드 기술

        	// this : 현재 작업 중인 Form
        	// Button00_onclick : 함수 이름
        	//		Button00 : 클릭하는 버튼의 아이디
        	// 		onclick : 이벤트 종류
        	// function : 클릭 시 작동될 콜백 함수
        	// obj : 클릭한 버튼 객체
        	// e : 이벤트 정보를 가진 객체

        };

        this.btn_02_onclick = function(obj,e)
        {
        	var str = this.Edit00.value;
        	alert(str);
        	this.Edit00.set_value("춥다 겨울이 온다");
        	this.sta_02.set_text(str);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sta_01.addEventHandler("onclick",this.sta_01_onclick,this);
            this.btn_01.addEventHandler("onclick",this.btn_01_onclick,this);
            this.btn_02.addEventHandler("onclick",this.btn_02_onclick,this);
        };

        this.loadIncludeScript("B_Static.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
