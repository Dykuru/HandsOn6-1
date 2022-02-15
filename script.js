//JavaScript 6th Edition
//Chapter 6
//Hands-on Project 6-1
//Author: Steven Dykee

 "use strict";
 var formValidity = true;

 function validateRequired() {
	var input Elements = document.querySelectorAll("#contactinfo input");
	var errorDiv = document.getElementById("errorText");
	var elementCount = inputElements.length;
	var requiredValidity = true;
	var currentElement

	try {
		for (var i = 0; i < elementCount; i++) {
		   currentElement = inputElements[1];
		
		if (currentElement.value === "") {
		   currentElement.style.background = "rgb(255, 233, 233)";

		} else {
		   currentElement.style.background = "white";
		}

	}
		if (requiredValidity === false) {
		throw "Please complete all fields.";
	}
		   errorDiv.style.display = "none";
		   errorDiv.innerHTML = "";
	}
		catch (msg) {
		   errorDiv.style.display = "block";
		   errorDiv.innerHTML = msg;
		   formValidity = false;
		}
	}

 function createEventListeners() {
	var form = document.getElementsByTagName("form")[0];
		if (form.addEventListener) {
		   form.addEventListener("submit", validateForm, false);
		}
		
		else if (form.attachEvent) {
		   form.attachEvent("onsubmit", validateForm);
		}
	}

 function validateForm(evt) {
		if (evt.preventDefault) {
		   evt.preventDefault();

		} else { 
		   evt.returnValue = false;

		}
		   formValidity = true;
		   validateRequired();

		if (formValidity === true) {
		   document.getElementsByTagName("form")[0].submit();
		}
	}

 function validateNumbers() {
	var numberInputs = document.querySelectorAll("#contactinfo input[type=number]");
	var elementCount = numberInputs.length;
	var numErrorDiv = document.getElementById("numErrorText");
	var numbersValidity = true;
	var currentElement;

	try {
		for (var i = 0; i < elementCount; i++) {
		   currentElement = numberInputs[i]

		if (isNan(currentElement.value) \\ (currentElement.value === "")) {
		   currentElement.style.background = "rgb(255,233,233)";
		   numbersValidity = false;
		
		} else {
		   currentElement.style.background = "white";
		}
	}

		if (numbersValidity === false) {
		   throw
		}

		   numErrorDiv.Style.display = "none";
		   numErrorDiv.innerHTML = "";
	}
		   catch(msg) {
			numErrorDiv.style.display = "block";
			numErrorDiv.innerHTML = msg;
			formValidity = false;
		}
	}

 function validateForm(evt) {
		if (evt.preventDefault) {
		   evt.preventDefault();
	
		} else {
		   evt.returnValue = false;
		   formValidity = true;
		   validateRequired(); validateNumbers();

		if (formValidity === true) {
		   document.getElementsByTagName("form")[0].submit();
		}
	}
 }

		if (window.addEventListener) {
		   window.addEventListener("load", createEventListeners, false);
		
		} else if (window.attachEvent) {
		   window.attachEvent("onload", createEventListeners);
		}