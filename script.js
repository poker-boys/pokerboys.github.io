var ctx = document.getElementById('myChart');

var barry = [1, 2];
var chris = [5, 5];
var dave = [2, 1];
var ian = [4, 6];
var nic = [6, 3];
var silver = [3, 4];
var seasons = ['2021', '2022'];

var myChart = new Chart(ctx, {
 type: "line",
 data: {
    labels: seasons,
    datasets: [
    {
        label: "Barry",
        data: barry,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
		pointRadius: 0
    },
	{
        label: "Chris",
        data: chris,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
		pointRadius: 0
    },
		{
        label: "Dave",
        data: dave,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
		pointRadius: 0
    },
		{
        label: "Ian",
        data: ian,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
		pointRadius: 0
    },
		{
        label: "Nic",
        data: nic,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
		pointRadius: 0
    },
		{
        label: "Silver",
        data: silver,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
		pointRadius: 0
    }
    ],
		options: {
        maintainAspectRatio: false,
		responsive: false,
		scales: {
			y: {
				reverse: true,
				ticks: {
					precision: 0
				}
			}
		}
    }
 }
});

