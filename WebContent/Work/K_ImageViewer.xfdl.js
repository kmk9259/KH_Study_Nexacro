(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("K_ImageViewer");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_image", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATA\">냥</Col><Col id=\"CODE\">imagerc::_images_/cat.jpg</Col></Row><Row><Col id=\"DATA\">멍</Col><Col id=\"CODE\">imagerc::_images_/dog.jpg</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00","24","10","293","184",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::_images_/cat.jpg\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img02","25","216","291","159",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","336","222","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("도넛");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02","336","295","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("아이스크림");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_01","358","86","296","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_image");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("Combo00");
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
        this.registerScript("K_ImageViewer.xfdl", function() {


        this.btn_01_onclick = function(obj,e)
        {
        	this.img02.set_image("url('imagerc::_images_/donut.png')");
        	this.img02.set_stretch('fit');
        };

        this.btn_02_onclick = function(obj,e)
        {
        	this.img02.set_image("url('imagerc::_images_/icecream.png')");
        	this.img02.set_stretch('fixaspectratio');
        };

        this.cbo_01_onitemchanged = function(obj,e)
        {
        	var imgUrl = this.cbo_01.value;
        	this.img02.set_image("url('"+imgUrl+"')");
        	this.img02.set_stretch('fixaspectratio');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.img02.addEventHandler("onclick",this.ImageViewer01_onclick,this);
            this.btn_01.addEventHandler("onclick",this.btn_01_onclick,this);
            this.btn_02.addEventHandler("onclick",this.btn_02_onclick,this);
            this.cbo_01.addEventHandler("onitemchanged",this.cbo_01_onitemchanged,this);
        };

        this.loadIncludeScript("K_ImageViewer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
