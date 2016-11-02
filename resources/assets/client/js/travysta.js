const  HelpFn = require('./helper');
const Helper = new HelpFn.HelperInit();

const ValidationFn = require('./validation');
const Validation = new ValidationFn.ValidateForm();

(function(){

	// Define Constructor
	this.Travysta = function(){

		// Create global element referances
		this.state;
		this.element;
		this.autoSuggestKey;
		this.author;

		// cache global jquery objects

		this.singleSection = $('*[data-role="single"]');
		this.fieldReturnInput = $('*[data-role="return"]');
		this.multipleSection = $('*[data-role="multiple"]');
		this.form = $('.filter__form form');

		// Define options Defalts
		var defaults = {
			url : 'http://travysta.burjalsafacomputers.com/api/v1/flight/airport-list',
			method: "GET",
			dataType: "jsonp",
			loaderImage: '/',
			flight: {
				activeTab: 'roundTrip',
				icon: '../images/'
			},
			autoSuggest: {
				flight: {
					getValue: "PlaceName",
				},
				hotel: {
					getValue: "city_name"
				},
				car: {
					getValue: "car_name"
				}
			}
		}

		// create options by extending defaults with the passed in arguments
		if(arguments[0] && typeof arguments[0] === "object"){
			this.options = extendDefaults(defaults, arguments[0]);
		}
	}
	/**
	 * Public Methods
	 */

	Travysta.prototype.getApi = function(state){

		sortState.call(this, state);

		if(this.state){
			verifyElement.call(this);
			initializeEvents.call(this);
			Validation.init(this.form, this.state);
			passHiddenValue.call(this, 'roundTrip');
		}
		
	};

	Travysta.prototype.autoSuggest = function(_this, keyword, url){
		// building the autosuggest;
		  fetchApi.call(this, _this, keyword);
		  buildFrag.call(this,_this);
	};

	Travysta.prototype.clear = function(argument){
		$('.auto__suggest').remove();
	};

	/**
	 * Private Methods
	 */

	 // function mergeObject(obj1,obj2){
	 // 	var newObject = {};
	 // 	for()
	 // }
	
	// Sorting the state of search
	function sortState(state){
		switch (state) {
			case 'flight':
				this.state = 'flight';
				break;

			case 'car':
				this.state = 'car';
				break;

			case 'hotel':
				this.state = 'hotel';
				break;

			default:
				return false;
				break;
		}
	}

	//fetching API 
	
	function fetchApi(_this,keyword){
		/**
			if(Helper.fetchSupport()){
				fectchApiInit.call(this);
			}else{
				ajaxApiInit.call(this);
			}
		**/
		ajaxApiInit.call(this, _this, keyword);
	}

	//fetching using ajax fallback method
	
	function ajaxApiInit(_this, keyword){
		var self = this;

		$.ajax({
			url: self.options.url,
			type: self.options.method,
			data:{query:keyword},
			crossDomain: true,
			dataType: self.options.dataType,
			beforeSend: function(){
				//$('*[data-api="true"]').addClass('loading-data');
			},
			success: function (response) {
				distribute.call(self, _this, response);
				//$('*[data-api="true"]').removeClass('loading-data');
			},
			error: function(err, xhrr){
				console.log(xhrr);
			}
		});
	}

	function distribute(_this, response){
		var self = this;
		$('.auto__suggest ul').html('');
		switch (self.state){
			case 'flight':
			$.each(response.Places, function(key, v){
				if(!Helper.isUndefined(v.PlaceName)){
					var placeId = v.PlaceId.replace('-sky', '');
					_this.next('.auto__suggest').children('ul').append(
						'<li class="optn-down" data-getId="'+v.PlaceId+'"><span class="placeName">'+
						v.PlaceName+'</span><span class="dim-id">('+placeId+')</span></li>'
					);
				}
			});
			break;
			case 'hotel':
			$.each(response.places, function(k, v){
				if(!Helper.isUndefined(v.display_name)){
					$('.auto__suggest ul').append(
						'<li class="optn-down" data-getId="'+v.individual_id+'"><span class="placeName">'+
						v.display_name+'</span> <span class="dim-id">geo: '+v.geo_type+'</span></li>'
					);
				}
			});
			break;
			case 'car':
			$.each(response.places, function(key, v){
				if(!Helper.isUndefined(v.display_name)){
					$('.auto__suggest ul').append(
						'<li class="optn-down" data-getId="'+v.individual_id+'"><span class="placeName">'+
						v.display_name+'</span> <span class="dim-id">geo: '+v.localised_geo_type+'</span></li>'
					);
				}
			});
			break;
			default:
				return false;
				break;
		}
	}

	//Initializing Evets
	function initializeEvents(){
	  var verifyElements = verifyElement.call(this),
	  	  self = this,
	  	  apiOptions = $('.auto__suggest .optn-down'),
	  	  overlayBg = $('.overlay-bg');

	  if(verifyElements){

	  	var typingTimer;
	  	var	doneTypingIntervel = 200;


	  	//reseting form default action on enter

	  	self.element.on('keypress', function(e){
	  		if(e.keyCode == 13){
	  			e.preventDefault();
	  		}
	  	});

	  	// auto search according to keyword 

	  	self.element.keyup(function(e) {
	  		var	_this = $(this);
	  		self.author = $(this);
	  		var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
	  		var	keyword = _this.val().trim();

	  		if(Helper.validateKeyPress(key)){
	  			keyPressUpDown.call(self, key, e);
	  		} else {
			  	dumpJunkField.call(this, _this);
	  			self.clear();
	  		}

	  		clearTimeout(typingTimer);

	  		if(_this.val().trim() != "" ){
	  			//self.clear();
		  		typingTimer = setTimeout(function(){
		  			if(!Helper.validateKeyPress(key)){
			  			self.autoSuggest(_this, keyword);
		  			}
		  		}, doneTypingIntervel);

		  	} else if(_this.val().length === 0){

		  		self.clear();
		  		dumpJunkField.call(this, _this);
		  	}
	  	});

	  	self.element.on('keydown', function(){
	  		clearTimeout(typingTimer);
	  	});
	  }

	  /**
	  *	background-bg initiates
	  **/
	  var filterSection = $('.filter__form__sec'),
	  	  dropDownMenu = $('.drop-menu'),
	  	  dropDownMenu_Zindex = dropDownMenu.css('z-index');

	  filterSection.on('click', function(){
			overlayBg.fadeIn(200);
	  });

	  overlayBg.click(function(){
	  	if(Helper.ifExist($(this))){
	  		$(this).fadeOut(200);
	  	}
	  });

	  /**
	  	*Click event on options in dropdown menu
	  **/

	  $('.filter__form__sec').on('click', '.optn-down', function(){
	  		var element = $(this);
	  		applyDataFrom.call(self, element);
	  });

	  /**
	  * tab switches according to data-role
	  * init only if flight page is loaded
	  **/

	  if(self.state == 'flight'){
		  var switchObj = $('.switchTab');

		  switchObj.on('click', function(){
		  	var role = $(this).attr('data-role');
		  	switchTab.call(self, role);
		  });
	  }
	}

	//distributing the values to dropdown elements

	function applyDataFrom(obj){
		
		var values = {
			'id': obj.attr('data-getid'),
			'name' : obj.children('.placeName').html()
		},
			formName = this.author.attr('data-name');
			parentElement = obj.parents('.form-group'),
			hiddenField = '<input type="hidden" class="hiddenField" name="'+formName+'">',
			validateElement = $('.hiddenField');

		if(Helper.ifExist(validateElement)){
			if(!parentElement.children('.hiddenField').length){
				parentElement.append(hiddenField);
			}
		}else {
			parentElement.prepend(hiddenField);
		}

		parentElement.children('*[data-api="true"]').val(values.name);
		parentElement.children('.hiddenField').val(values.id);

		this.clear();
	}

	function keyPressUpDown(keyCode, event){
		var listedItems = $('.auto__suggest li'),
			selectedItems = listedItems.filter('.selected'),
			currentItem;

		if(keyCode != 13){
			listedItems.removeClass('selected');
		}

		
		if(keyCode == 40) {
			if(!Helper.ifExist(selectedItems) || selectedItems.is(':last-child')){
				currentItem = listedItems.eq(0);
			} else {
				currentItem = selectedItems.next();
			}
			
		} else if(keyCode == 38){
			if(!Helper.ifExist(selectedItems) || selectedItems.is(':first-child')){
				currentItem = listedItems.last();
			}else{
				currentItem = selectedItems.prev();
			}
		} else if(keyCode == 13){
			event.preventDefault();
			applyDataFrom.call(this, $('.selected'));
			
		}

		if(keyCode != 13){
			currentItem.addClass('selected');
		}
	}

	function dumpJunkField(obj){
		var junkInputField = (Helper.ifExist(obj.prev('.hiddenField'))?obj.prev('.hiddenField'):obj.next('.hiddenField'));
		if(Helper.ifExist(junkInputField)){
			junkInputField.remove();
		}
	}

	function switchTab(role){
		var fieldReturn = $('*[data-role="return"]').parent('.form-group'),
			returnInputField = $('*[data-role="return"]'),
			selectedClass;

		switch (role) {
			case 'singleTrip':
				selectedClass = 'singleTrip';
				if(Helper.ifExist(fieldReturn)){
					fieldReturn.hide();
					this.fieldReturnInput.val('');
				}
				Validation.toggleValidation(returnInputField, false);
				toggleTabs.call(this, this.multipleSection, this.singleSection);
				passHiddenValue.call(this, 'singleTrip');
				break;

			case 'roundTrip':
				selectedClass = 'roundTrip';
				fieldReturn.show();
				Validation.toggleValidation(returnInputField, true);
				toggleTabs.call(this, this.multipleSection, this.singleSection);
				passHiddenValue.call(this, 'roundTrip');
				break;

			case 'multipleTrip':
				selectedClass = 'multipleTrip';
				toggleTabs.call(this, this.singleSection, this.multipleSection);
				break;

			default:
				return false;
				break;
		}

		if(!Helper.isUndefined(selectedClass)){
			$('.switchTab').removeClass('activeSwitch');
			$('*[data-role="'+selectedClass+'"]').addClass('activeSwitch');
		}

	}

	function toggleTabs(hidden, visible){
		if(Helper.ifExist(visible)){
			hidden.hide();
			visible.show();
		}
	}

	function verifyElement(){
		var suggestInput = $('*[data-api="true"]');

		if(Helper.ifExist(suggestInput)){
			this.element = suggestInput;
			return true;
		} else {
			throw new Error('data-api not found');
			return false;
		}
	}

	function passHiddenValue(value){
		var hiddenSingle = $('.tripWay'),
			hiddenSIngleHtml = '<input type="hidden" class="tripWay" name="tripType" value="'+value+'">';
		if(!Helper.ifExist(hiddenSingle)){
			$('.filter__form form').prepend(hiddenSIngleHtml);
			hiddenSingle.val(value);
		} else{
			hiddenSingle.val(value);
		}

	}

	//build dropdown list
	function buildFrag(_this){
		var dropDownContainer = '<div class="auto__suggest"><ul></ul></div>',
			suggestClass = $('.auto__suggest');

		if(Helper.ifExist(suggestClass)){
			if(!_this.next('.auto__suggest').length){
				_this.after(dropDownContainer);
			}
		}else{
			_this.after(dropDownContainer);
		}
	}
	
	// Utility method to extend defaults with user options
	function extendDefaults(source, properties) {
		var property;
		for (property in properties) {
		  if (properties.hasOwnProperty(property)) {
		    source[property] = properties[property];
		  }
		}
		return source;
	}
}());



