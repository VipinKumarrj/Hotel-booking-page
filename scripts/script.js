function calculateTotal() {
    const roomRate = document.getElementById("room-type").value === "Delux Room" ? 2500 : 4000;
    const totalDays = parseInt(document.getElementById("total-days").value);
    const amenitiesCost = Array.from(document.getElementById("amenities").selectedOptions).reduce((total, option) => {
        if (option.value === "AC") total += 1000;
        if (option.value === "Locker") total += 300;
        return total;
    }, 0);
    const advanceAmount = parseInt(document.getElementById("advance-amount").value);
    const totalPersons = parseInt(document.getElementById("total-persons").value);

    // Calculate additional charges for extra persons
    const extraPersons = totalPersons > 2 ? totalPersons - 2 : 0;
    const extraPersonCharges = extraPersons * 1000;

    const totalRoomCost = roomRate * totalDays;
    const totalAmenitiesCost = amenitiesCost * totalDays;
    const totalCost = totalRoomCost + totalAmenitiesCost + extraPersonCharges;
    const balance = totalCost - advanceAmount;

    document.getElementById("total-room-cost").value = totalRoomCost;
    document.getElementById("total-amenities-cost").value = totalAmenitiesCost;
    document.getElementById("total-cost").value = totalCost;
    document.getElementById("balance").value = balance;
    document.getElementById("extra-person-charges").value = extraPersonCharges;
}
 