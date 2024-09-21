const menuBtn = document.getElementById("menu-btn");
const mobileMenuEl = document.getElementById("mobileMenu");
const defaultText = document.getElementById("default-text");
const totalBookedSeat = document.getElementById("total-booked");
const availableSeat = document.getElementById("available-seat");
// const showSeat = document.getElementById('default-text');

const collectSeat = [];
function seatSelectBtn(event) {
  // defaultText.innerHTML += `
  //     <div class="flex justify-between">
  //     <span>${event.innerText}</span>
  //     <span>Economoy</span>
  //     <span>550</span>
  //     </div>
  //   `;
  if (collectSeat.length >= 4) {
    alert("Maximum seat added");
    return;
  }
  event.classList.add("bg-green-400");
  event.classList.add("text-white");
  collectSeat.push(event.innerText).length;
  totalBookedSeat.innerHTML = collectSeat.length;
  const availableSeatValue = parseFloat(availableSeat.innerText);
  availableSeat.innerText = availableSeatValue - 1;
}
