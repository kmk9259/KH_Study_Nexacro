(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("A_Test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_01","70","70","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("hello nexacro");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","230","70","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("버튼입니다.");
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
        this.registerScript("A_Test.xfdl", function() {

        this.btn_01_onclick = function(obj,e)
        {
        	this.alert("클릭했습니다");
        	trace("btn_01_onclick 클릭");
        	//trace -> output에 메시지로 출력
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_01.addEventHandler("onclick",this.btn_01_onclick,this);
        };

        this.loadIncludeScript("A_Test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
