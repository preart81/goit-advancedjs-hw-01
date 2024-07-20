// Feedback form
let formData = {
  email: '',
  message: '',
};

const fillFormFromLS = (form, savedItemName) => {
  const savedFormData = JSON.parse(localStorage.getItem(savedItemName));
  if (savedFormData) {
    formData = savedFormData;

    for (const key in savedFormData) {
      if (savedFormData.hasOwnProperty(key)) {
        form.elements[key].value = savedFormData[key];
      }
    }
  }
};

const onFormInput = event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFormSubmit = event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    event.currentTarget.reset();
    formData = {
      email: '',
      message: '',
    };
  }
};

const feedbackForm = document.querySelector('.feedback-form');

fillFormFromLS(feedbackForm, 'feedback-form-state');

feedbackForm.addEventListener('input', onFormInput);
feedbackForm.addEventListener('submit', onFormSubmit);
