(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("J_Container");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta01","15","24","198","48",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text(">div 요소");
            this.addChild(obj.name, obj);

            obj = new Div("div01","10","66","372","254",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1");
            obj.set_background("darksalmon");
            this.addChild(obj.name, obj);

            obj = new Edit("edit01","16","44","165","39",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btn01","219","46","118","35",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.div01.addChild(obj.name, obj);

            obj = new Static("Static00","449","43","243","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text(">Tab 요소");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","450","76","260","244",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            obj.set_color("antiquewhite");
            obj.set_background("antiquewhite");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("sta02","27","20","157","46",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("1페이지 입니다.");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edit01","23","97","110","30",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn01","165","98","80","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("내부");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","35","33","166","43",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("2페이지입니다.");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn02","617","34","103","29",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("외부");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv01","17","358","193","221",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","22","16","126","31",null,null,null,null,null,null,this.pdv01.form);
            obj.set_taborder("0");
            obj.set_text("menu01");
            this.pdv01.addChild(obj.name, obj);

            obj = new Button("btn02","20","67","127","33",null,null,null,null,null,null,this.pdv01.form);
            obj.set_taborder("1");
            obj.set_text("menu02");
            this.pdv01.addChild(obj.name, obj);

            obj = new Button("btn03","23","122","124","31",null,null,null,null,null,null,this.pdv01.form);
            obj.set_taborder("2");
            obj.set_text("menu03");
            this.pdv01.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","240","362","199","216",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("myHobbies");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","293","420","94","112",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">축구</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">농구</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">야구</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Button("btn_02","456","373","113","39",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("팝업");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01","450","432","128","59",null,null,null,null,null,null,this);
            obj.set_taborder("8");
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
        this.registerScript("J_Container.xfdl", function() {
        /*
        	컨테이너 컴포넌트
        	Div, Tab, PopupDiv

        	Div 요소 안에있는 다른 컴포넌트를 참조할때
        	해당 div 를 먼저 찾은뒤 this.div 아이디.form.컴포넌트 아이디 형태로 접근


        */

        this.div01_btn01_onclick = function(obj,e)
        {
        	var str = this.div01.form.edit01.value;
        	alert(str);
        };


        this.btn02_onclick = function(obj,e)
        {
        	var str = this.Tab00.Tabpage1.form.edit01.value;
        	this.fn_out(str);
        };

        this.fn_out = function(strVal){
        	alert(strVal);
        }
        this.Tab00_Tabpage1_Button00_onclick = function(obj,e)
        {
        	this.Tab00.Tabpage1.form.edit01.set_value("텝에 세팅");
        };



        this.btn_com_click = function(obj,e)
        {
        	this.pdv01.closePopup(obj.text);

        };

        this.btn_02_onclick = function(obj,e)
        {
        	var x = parseInt(obj.width)-60;
        	var y = parseInt(obj.height);

        	this.pdv01.trackPopupByComponent(obj,x,y,200,300,"fn_callback");
        };

        this.fn_callback = function(popupId, param){
        	alert(popupId);
        	this.edt_01.set_value(param);

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div01.form.btn01.addEventHandler("onclick",this.div01_btn01_onclick,this);
            this.Tab00.Tabpage1.form.btn01.addEventHandler("onclick",this.Tab00_Tabpage1_Button00_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.pdv01.form.btn01.addEventHandler("onclick",this.btn_com_click,this);
            this.pdv01.form.btn02.addEventHandler("onclick",this.btn_com_click,this);
            this.pdv01.form.btn03.addEventHandler("onclick",this.btn_com_click,this);
            this.btn_02.addEventHandler("onclick",this.btn_02_onclick,this);
        };

        this.loadIncludeScript("J_Container.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
