const convert = (num, fromNS, toNS) => {
    return parseInt(num, fromNS).toString(toNS);
};

while(true) {
    try {
        let number = prompt("Number: ");
        let fromNumberSystem = prompt("From: ");
        let toNumberSystem = prompt("To: ");
        alert(`Number ${number} from ${fromNumberSystem} to ${toNumberSystem}: ${convert(number, fromNumberSystem, toNumberSystem)}`);
    } catch(e) {
        console.log(e);
    }
}
