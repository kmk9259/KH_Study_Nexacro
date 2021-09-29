(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("C_Edit");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edit_01","30","65","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_displaynulltext("아무거나 입력하세요");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","30","10","141","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("> 일반 Edit");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_02","29","170","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displaynulltext("읽기 전용입니다");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02","29","115","141","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("> 읽기전용  Edit");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_03","28","280","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displaynulltext("비밀번호 edit 입니다.");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03","28","225","141","45",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("> 비밀번호 Edit");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_04","28","390","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_displaynulltext("영어만 입력합니다");
            obj.set_inputtype("english");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04","28","335","192","45",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("> 영어만 허용 Edit / MaxLength");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_05","28","500","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_displaynulltext("숫자만 입력");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05","28","445","141","45",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("> 숫자만 허용 Edit");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","164","237","152","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("비밀번호 표시하기");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("C_Edit.xfdl", function() {

        this.edit_01_onchanged = function(obj,e)
        {
        	//edit는 onchanged로
        	//button은 onclick
        	alert(e.prevalue);
        	this.edit_02.set_value(e.postvalue);
        };


        this.chk_01_onclick = function(obj,e)
        {
        	alert(obj.value);
        	this.edit_03.set_password(!obj.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edit_01.addEventHandler("onchanged",this.edit_01,this);
            this.sta_02.addEventHandler("onclick",this.sta_02_onclick,this);
            this.chk_01.addEventHandler("onclick",this.chk_01_onclick,this);
        };

        this.loadIncludeScript("C_Edit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
