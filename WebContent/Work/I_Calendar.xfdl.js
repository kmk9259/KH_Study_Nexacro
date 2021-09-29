(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("I_Calendar");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta01","18","29","210","63",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text(">기본 형태");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal01","10","96","162","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_locale("ko_KR");
            obj.set_dateformat("LONGDATE");
            obj.set_editformat("SHORTDATE");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","18","163","210","63",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text(">달력타입");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal01_00","16","266","212","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_locale("ko_KR");
            obj.set_dateformat("LONGDATE");
            obj.set_editformat("SHORTDATE");
            this.addChild(obj.name, obj);

            obj = new Radio("rad01","16","215","254","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            var rad01_innerdataset = new nexacro.NormalDataset("rad01_innerdataset", obj);
            rad01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">normal</Col><Col id=\"datacolumn\">normal</Col></Row><Row><Col id=\"codecolumn\">spin</Col><Col id=\"datacolumn\">spin</Col></Row><Row><Col id=\"codecolumn\">monthonly</Col><Col id=\"datacolumn\">monthonly</Col></Row></Rows>");
            obj.set_innerdataset(rad01_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("sta03","18","329","210","63",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text(">달력 지역 변경");
            this.addChild(obj.name, obj);

            obj = new Radio("rad02","16","390","364","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("4");
            var rad02_innerdataset = new nexacro.NormalDataset("rad02_innerdataset", obj);
            rad02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">bg_BG</Col><Col id=\"datacolumn\">불가리아</Col></Row><Row><Col id=\"codecolumn\">pl_PL</Col><Col id=\"datacolumn\">폴란드</Col></Row><Row><Col id=\"codecolumn\">ko_KR</Col><Col id=\"datacolumn\">대한민국</Col></Row><Row><Col id=\"codecolumn\">ar_AE</Col><Col id=\"datacolumn\">아랍에미리트</Col></Row></Rows>");
            obj.set_innerdataset(rad02_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Calendar("cal03","10","430","280","190",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_locale("ko_KR");
            obj.set_type("monthonly");
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
        this.registerScript("I_Calendar.xfdl", function() {

        this.rad01_onitemchanged = function(obj,e)
        {
        	var radioValue = this.rad01.value;
        	this.cal01_00.set_type(radioValue);
        };

        this.rad02_onitemchanged = function(obj,e)
        {
        	var radioValue = this.rad02.value;
        	this.cal03.set_locale(radioValue);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.rad01.addEventHandler("onitemchanged",this.rad01_onitemchanged,this);
            this.rad02.addEventHandler("onitemchanged",this.rad02_onitemchanged,this);
        };

        this.loadIncludeScript("I_Calendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
