var HelperFn = require("./helper");
var Helper = new HelperFn.HelperInit();

var ValidateForm = function (){
	this.formObj;
	this.formState;
	this.errorColor = {
		'error' : '#ff0000',
		'default' : '#cccccc'
	};
}

ValidateForm.prototype.init = function(form, state){
	var self = this;
	self.formState = state;
	self.formObj = form;

	form.submit(function(e){
		if(canSubmit.call(self)){
			_this.submit();
		} else{
			e.preventDefault();
		}
	});
};

ValidateForm.prototype.toggleValidation = function(Obj, bool){
	if(bool) {
		Obj.attr('data-validation', 'true');
	} else {
		Obj.attr('data-validation', 'false');
	}
};

function canSubmit(){
	var self = this,
		isValidated = isValid.call(self);

	return (isValidated)?true:false;
}

function isValid(){
	var self = this,
		isEmpty = isEmptyFieldExist.call(self);
		isSelected = isSelectedDropDown.call(self);
		//isSame = isSameValue.call(self);

	if(!isEmpty && isSelected){
		return true;
	} else {
		return false;
	}
}

function isSelectedDropDown(){
	var self = this,
		suggestFields = self.formObj.find('input[data-api="true"]'),
		suggestFieldsLength = suggestFields.length,
		nullArray = [], validArray = [];


		if(suggestFieldsLength != 0){
			for(var i=0; i<suggestFieldsLength; i++){
				var hiddenFieldsPrev = $(suggestFields[i]).prev('.hiddenField'),
					hiddenFieldsNext = $(suggestFields[i]).next('.hiddenField');

				if(Helper.ifExist(hiddenFieldsPrev) || Helper.ifExist(hiddenFieldsNext)){
					var checkValue = (Helper.ifExist(hiddenFieldsPrev))
										?hiddenFieldsPrev.val().trim()
										:hiddenFieldsNext.val().trim();

					if(checkValue == ''){
						nullArray.push(suggestFields[i]);
						applyErrorColor.call(self, suggestFields[i], true);
					} else{
						validArray.push(suggestFields[i]);
						applyErrorColor.call(self, suggestFields[i], false);
					}
				}else{
					applyErrorColor.call(self, suggestFields[i], true);
				}
			}

			return (suggestFieldsLength === validArray.length)?true:false;

		} else{
			return true;
		}
}

// function isSameValue(){
// 	var self = this,
// 		unmatchFields = this.formObj.find('input[data-validation="true"]'),
// 		sameValueArray = [];

// 	for(var i=0; i<unmatchFields.length; i++){
// 		var verifyAttr = $(unmatchFields[i]).attr('data-same');

// 		if( typeof verifyAttr !== typeof undefined && verifyAttr !== false ){
// 			var fetchedValue = $(unmatchFields[i]).val();

// 			if(fetchedValue != '' || Helper.isUndefined(fetchedValue)){
// 				sameValueArray.push(fetchedValue);
// 				if(sameValueArray.length > 1){
// 					if($.inArray(fetchedValue, sameValueArray) > -1){
// 						var sameColoredObj = $('*[data-same="'+verifyAttr+'"]'); 
// 						applyErrorColor.call(self, sameColoredObj, true);
// 					}
// 				}
// 			}
// 		}
// 	}
	
// }

function isEmptyFieldExist(){
	var self = this;
		inputFields = self.formObj.find('input[data-validation="true"]'),
		inputLength = inputFields.length;
		blankField = [], filledField = [];

	for(var i=0; i<inputLength; i++){

		if(validateFields.call(self, inputFields[i])){
			blankField.push(inputFields[i]);
		} else {
			filledField.push(inputFields[i]);
		}
	}

	return (inputLength === filledField.length)?false:true;
}

function validateFields(field){
	var self = this,
	 	isValue = $(field).val().trim();

	if(isValue == '' || Helper.isUndefined(isValue)){
		applyErrorColor.call(self, field, true);
		return true
	}else {
		applyErrorColor.call(self, field, false);
		return false;
	}
};

function applyErrorColor(Obj, bool){
	var self = this,
	 	errorObj = $(Obj);

	if(Helper.ifExist(errorObj)){
		if(bool){
			errorObj.css({
				'border-color' : self.errorColor.error});
		}else{
			errorObj.css({
				'border-color': self.errorColor.default});
		}
	}
}


exports.ValidateForm = ValidateForm;