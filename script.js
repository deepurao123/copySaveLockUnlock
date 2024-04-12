let isLocked = false;

function copyCode() {
  const textarea = document.getElementById("textBox");
  textarea.select();
  document.execCommand("copy");
  alert("code copy to clickboard!");
}

function saveCode() {
  const textBox = document.getElementById("textBox").value;
  const blob = new Blob([textBox], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "textBox.txt";
  link.click();
  URL.revokeObjectURL(url);
  alert("code saved");
}

function toggleLock() {
  isLocked = !isLocked;
  const textarea = document.getElementById("textBox");
  const lockBtn = document.querySelector(".container__button--lock");
  if (isLocked) {
    textarea.setAttribute("readonly", true);
    lockBtn.classList.add("active");
  } else {
    textarea.removeAttribute("readonly");
    lockBtn.classList.remove("active");
  }
}
