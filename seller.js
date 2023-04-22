/*Dynamic Selector*/

// let auth_token;
// $(document).ready(function(){
//     $.ajax({
//         type:'get',
//         url:'https://www.universal-tutorial.com/api/getaccesstoken',
//         success:function(data){
//             auth_token=data.auth_token;
//         },
//         error: function(error){
//             console.log(error);
//         },
//         headers:{
//             "Accept" : "application/json",
//             "api-token":"APIKEY",
//             "user-email":"abc"
//         }
//     })
//     $('#country').change(function(){
//         // console.log("Country changed");
//         getState();
//     })
// })

const url_arr = [];
/***************IMAGE UPLOAD*****************/
const imageInput = document.getElementById("imageInput");
        const imageContainerElement = document.querySelector('.image-container');
        let uploadedFiles = [];
    
        imageInput.addEventListener("change", function () {
            const files = this.files;
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const url = URL.createObjectURL(file);
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                    const imagePreviewElement = document.createElement('div');
                    imagePreviewElement.className = 'image-preview';
                    imagePreviewElement.style.backgroundImage = `url(${reader.result})`;
                    const deleteButton = document.createElement('button');
                    deleteButton.className = 'delete-button';
                    deleteButton.innerText = 'Delete';
                    deleteButton.addEventListener('click', () => {
                        uploadedFiles = uploadedFiles.filter(f => f !== file);
                        imageContainerElement.removeChild(imagePreviewElement);
                        updateImageUrlElement();
                    });
                    imagePreviewElement.appendChild(deleteButton);
                    imageContainerElement.appendChild(imagePreviewElement);
                    uploadedFiles.push(file);
                    updateImageUrlElement();
                });
                reader.readAsDataURL(file);
            }
        });
    
        function updateImageUrlElement() {
           
            for (let i = 0; i < uploadedFiles.length; i++) {
                const file = uploadedFiles[i];
                const url = URL.createObjectURL(file);
				url_arr.push(url);
                const linkElement = document.createElement('a');
                linkElement.setAttribute('href', url);
                linkElement.setAttribute('target', '_blank');
                linkElement.innerText = url;
              
            }
        }
    
        function uploadImage() {
            const files = imageInput.files;
            if (!files || files.length === 0) {
                alert("Please select one or more images to upload.");
                return;
            }
            alert("Images uploaded successfully!");
        }

const form = document.querySelector('#forms');
const nameInput = document.querySelector('input[type="text"][name="name"]');
const emailInput = document.querySelector('input[type="email"][name="email"]');
const phoneInput = document.querySelector('input[type="tel"][name="phone"]');
const addressInput = document.querySelector('input[type="text"][name="address"]');
const propertyTypeInput = document.querySelector('select[name="property-type"]');
const bedroomsInput = document.querySelector('input[type="number"][name="bedrooms"]');
const bathroomsInput = document.querySelector('input[type="number"][name="bathrooms"]');
const sqFootageInput = document.querySelector('input[type="number"][name="sq-footage"]');
const lotSizeInput = document.querySelector('input[type="number"][name="lot-size"]');
const yearBuiltInput = document.querySelector('input[type="number"][name="year-built"]');
const amenitiesInput = document.querySelector('input[type="text"][name="amenities"]');
const countryInput = document.querySelector('select[name="country"]');
const stateInput = document.querySelector('select[name="state"]');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	console.log(url_arr);
  let errors = [];

  if (nameInput.value === '') {
    errors.push('Name is required');
  }

  if (emailInput.value === '') {
    errors.push('Email is required');
  } else if (!isValidEmail(emailInput.value)) {
    errors.push('Invalid email format');
  }

  if (phoneInput.value === '') {
    errors.push('Phone number is required');
  } else if (!isValidPhone(phoneInput.value)) {
    errors.push('Invalid phone number format');
  }

  if (addressInput.value === '') {
    errors.push('Contact address is required');
  }

  if (bathroomsInput.value === '') {
    errors.push('Number of bathrooms is required');
  }

  if (sqFootageInput.value === '') {
    errors.push('Square footage is required');
  }

  if (lotSizeInput.value === '') {
    errors.push('Lot size is required');
  }

  if (yearBuiltInput.value === '') {
    errors.push('Year built is required');
  }

  if (amenitiesInput.value === '') {
    errors.push('Amenities are required');
  }

  if (countryInput.value === '') {
    errors.push('Country is required');
  }

  if (stateInput.value === '') {
    errors.push('State is required');
  }

  if (errors.length > 0) {
    event.preventDefault();
    displayErrors(errors);
  }

	const currentYear = new Date().getFullYear();
	if (yearBuiltInput.value < 1800 || yearBuiltInput.value > currentYear) {
		errors.push('Invalid year built');
	}

});

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isValidPhone(phone) {
  const regex = /^\d{10}$/;
  return regex.test(phone);
}

function displayErrors(errors) {
	const errorContainer = document.querySelector('#error-container');
	const errorList = errorContainer.querySelector('ul');
	errorList.innerHTML = '';
  
	errors.forEach((error) => {
	  const li = document.createElement('li');
	  li.textContent = error;
	  errorList.appendChild(li);
	});
  
	errorContainer.style.display = 'block';
  }
  