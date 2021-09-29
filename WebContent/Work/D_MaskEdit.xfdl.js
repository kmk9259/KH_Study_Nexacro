(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("D_MaskEdit");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_01","21","27","110","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("> 기본 MaskEdit");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01","15","75","173","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_format("AA-####");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_02","15","123","173","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_format("#,###,00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02","15","165","135","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text(">주민번호 뒷자리*표시");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_03","15","206","173","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_format("######-{#######}");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03","15","245","155","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("> MaskEdit 표기법(String)");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00","170","282","173","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_format("@@@@");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04","15","280","155","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("@@@@: 모든 문자 가능");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00","15","331","155","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("####:숫자가능(0~9)");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_00","170","333","173","27",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_format("####");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01","15","382","155","31",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("****:영어 대소문자");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_01","170","384","173","27",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_format("****");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_02","15","433","155","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("9999:영문, 숫자");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_02","170","435","173","27",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_format("9999");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_03","15","484","155","31",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("AAAA: 영대문자");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_03","170","486","173","27",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_format("AAAA");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_04","15","535","155","31",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("aaaa:영소문자");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_04","170","537","173","27",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_format("aaaa");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_05","15","586","155","31",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("A{AA}A:비밀번호 표기");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_05","170","588","173","27",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_format("AA{AA}A");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03_00","399","272","155","31",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("> MaskEdit 표기법(Number)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_06","399","307","155","31",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("####");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_00","399","358","155","31",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("#,##9");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00","399","409","155","31",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("#,##0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_06","554","309","173","27",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_format("####");
            obj.set_type("number");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_00_00","554","360","173","27",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_format("#,##9");
            obj.set_type("number");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01_00_01_00","554","411","173","27",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_format("#,##0");
            obj.set_type("number");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sta_02.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.sta_04_00.addEventHandler("onclick",this.sta_04_00_onclick,this);
            this.sta_04_01.addEventHandler("onclick",this.sta_04_01_onclick,this);
            this.sta_04_00_00.addEventHandler("onclick",this.sta_04_00_onclick,this);
            this.sta_04_01_00.addEventHandler("onclick",this.sta_04_01_onclick,this);
        };

        this.loadIncludeScript("D_MaskEdit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
