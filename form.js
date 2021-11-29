const formHandler = () => {
  const loginOptions = document.querySelector(".login-options");
  const generateForm = (type) => {
    const loginForm = document.createElement("form");
    const id = document.createElement("input");
    id.type = "text";
    id.placeholder = "ID";
    id.required = "";

    const name = document.createElement("input");
    name.type = "text";
    name.placeholder = "Name";
    name.required = "";

    const formType = document.createElement("input");
    formType.type = "text";
    formType.defaultValue = type;
    formType.classList.add("hide-pls");

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";

    loginForm.classList.add("login-form");
    loginForm.appendChild(formType);
    loginForm.appendChild(id);
    loginForm.appendChild(name);
    loginForm.appendChild(submitButton);
    return loginForm;
  };

  const clearArea = () => {
    loginOptions.innerHTML = "";
  };

  const addForm = (type) => {
    clearArea();
    const form = generateForm(type);
    const heading = document.createElement("div");
    heading.textContent = "Details";
    heading.classList.add("form-heading");

    loginOptions.classList.add("login-active");
    loginOptions.appendChild(heading);
    loginOptions.appendChild(form);
  };

  return {
    addForm,
  };
};

const cardClickHandler = (e) => {
  const doctor = document.querySelector(".doctor");
  const patient = document.querySelector(".patient");
  const hospital = document.querySelector(".hospital");
  const supplier = document.querySelector(".supplier");

  doctor.addEventListener("click", (e) => {
    formHandler().addForm("doctor");
  });
  patient.addEventListener("click", (e) => {
    formHandler().addForm("patient");
  });
  hospital.addEventListener("click", (e) => {
    formHandler().addForm("hospital");
  });
  supplier.addEventListener("click", (e) => {
    formHandler().addForm("supplier");
  });
};

cardClickHandler();
