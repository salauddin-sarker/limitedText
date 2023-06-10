let inputBox = document.querySelector(".input_box"),
textarea = inputBox.querySelector("textarea"),
signalNum = inputBox.querySelector(".signal_num");

textarea.addEventListener("keyup", () => {
   let valLength = textarea.value.length; // stored textarea value length into valLength

   signalNum.innerText = valLength; // converted signalNum innerText by valLength
   (valLength > 0) ? inputBox.classList.add("active") : inputBox.classList.remove("active"); // if valLength is greater then 0 than add class active if not than remove active class
   (valLength > 100) ? inputBox.classList.add("error") : inputBox.classList.remove("error"); // if valLength is greater then 100 than add error class if not than remove error class
   console.log(valLength);
});