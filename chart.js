const ctx = document.getElementById('radarChart').getContext('2d');
new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['Comunicación', 'Trabajo en equipo', 'Liderazgo', 'Adaptabilidad', 'Creatividad'],
    datasets: [{
      data: [90, 70, 75, 85, 70],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(32, 83, 250)',
      pointBackgroundColor: 'rgb(241, 120, 6)'
    }]
  },
  options: {
    responsive: false,
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
        pointLabels: { display: true },
        angleLines: {
          display: true,
          
          color: '#aaa'
        },
        grid: {
        
          color: '#eee'
        },
        ticks: {
          display: false,
          stepSize: 25
        }
      }
    },
    plugins: {
      legend: { display: false }
    }
  }
});
