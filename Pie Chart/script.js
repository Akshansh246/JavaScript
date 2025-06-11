const canvas = document.getElementById('pieChart');
const ctx = canvas.getContext('2d');

const data = [10, 10, 10, 70]; // Data for the chart
const colors = ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']; // Colors for each slice

let total = data.reduce((sum, value) => sum + value, 0);
let startAngle = 0;

data.forEach((value, index) => {
    let sliceAngle = (value / total) * 2 * Math.PI;

    ctx.beginPath();
    ctx.moveTo(200, 200); // Center of the pie chart
    ctx.arc(200, 200, 150, startAngle, startAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = colors[index];
    ctx.fill();

    startAngle += sliceAngle;
});
